import React, { useState, useContext } from 'react'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { userService } from '../../services'
import { AuthContext } from '../../context/AuthContext'
import { Input, Label, HelperText, Button } from '@windmill/react-ui'
import { useTranslation } from 'react-i18next'

function UpdateUserForm({formRef, callback, m_user}) {
  const { user, lastname, setUser } = useContext(AuthContext)
  const [saved, setSaved] = useState(false)
  const { t } = useTranslation()

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        username: m_user ? m_user.name : '',
        lastname: m_user ? m_user.lastname : '',
        email: m_user ? m_user.email : '',
      }}
      validationSchema={Yup.object().shape({
        username: Yup.string().required(t('First Name is required')),
        lastname: Yup.string().required(t('Last Name is required')),
        email: Yup.string().email().required(t('Email is required')),
      })}
      onSubmit={({ username, lastname, email }, { setStatus, setSubmitting }) => {
        setSaved(false)
        setStatus()
        userService.updateUserDetails(m_user.id, username, email, lastname)
        .then(
          response => {
            setSaved(true)
            setSubmitting(false)
            if(user.id === m_user.id) setUser(response.data)
            if(callback) callback(response.data)
          },
          error => {
            setSubmitting(false);
            if(error.response) {
              setStatus(t(error.response.data));
            } else {
              setStatus(t('Some error occured.'));
            }
            if(callback) callback(null)
          }
        );
      }}
    >  
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <div className='flex gap-4'>
            <Label className='flex-1'>
              <span>{t("First Name")}:</span>
              <Field className="mt-1" as={Input} name="username" type="text" placeholder={t("enter first name")} />
              {errors.username && touched.username ? (
                <div>   
                  <HelperText valid={false}>{t(errors.username)}</HelperText>
                </div>
              ) : null}
            </Label>
            <Label className='flex-1'>
              <span>{t("Last Name")}:</span>
              <Field className="mt-1" as={Input} name="lastname" type="text" placeholder={t("enter last name")} />
              {errors.lastname && touched.lastname ? (
                <div>   
                  <HelperText valid={false}>{t(errors.lastname)}</HelperText>
                </div>
              ) : null}
            </Label>
          </div>
          <Label className="mt-4">
            <span>E-Mail:</span>
            <Field className="mt-1" as={Input} name="email" type="email" placeholder={t("enter email")} />
            {errors.email && touched.email ? (
              <div>   
                <HelperText valid={false}>{t(errors.email)}</HelperText>
              </div>
            ) : null}
          </Label>

          {!formRef && 
            <Button className="mt-6" block type="submit" value="submit" disabled={isSubmitting}>
              {t("Save Details")}
            </Button> 
          }

          {status && (
            <HelperText valid={false}>{status.message}</HelperText>
          )}

          {saved && (
            <HelperText valid={true}>Saved!</HelperText>
          )}
          
        </Form>
      )}
    </Formik>
  )
}

export default UpdateUserForm