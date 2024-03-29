import React, { useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import { useTranslation } from "react-i18next";

import { Label, Input, HelperText, Button } from "@windmill/react-ui";

function LoginForm() {
  const { login } = useContext(AuthContext);
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string().email().required(t("Email is required")),
        password: Yup.string().required(t("Password is required")),
      })}
      onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
        setSubmitting(true);
        setStatus();
        login(email, password).catch((error) => {
          if (error.response) {
            setStatus(error.response.data.message);
          } else {
            setStatus("Some error occured. Please try again.");
          }
          setSubmitting(false);
        });
      }}
    >
      {({ errors, status, touched, isSubmitting }) => (
        <Form>
          <Label>
            <Field
              className="mt-1"
              as={Input}
              name="email"
              type="email"
              placeholder="E-Mail Adresse"
            />
            {errors.email && touched.email ? (
              <div>
                <HelperText valid={false}>{t(errors.email)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Label className="mt-4">
           
            <Field
              className="mt-1"
              as={Input}
              name="password"
              type="password"
              placeholder="Passwort"
            />
            {errors.password && touched.password ? (
              <div>
                <HelperText valid={false}>{t(errors.password)}</HelperText>
              </div>
            ) : null}
          </Label>

          <Button
            className="mt-4"
            block
            type="submit"
            value="submit"
            disabled={isSubmitting}
          >
            {t("login")}
          </Button>
          {status && <HelperText valid={false}>{status}</HelperText>}
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;
