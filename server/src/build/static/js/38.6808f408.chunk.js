(this.webpackJsonprocket=this.webpackJsonprocket||[]).push([[38],{143:function(e,s,t){"use strict";s.a=t.p+"static/media/logo.5e945e43.svg"},184:function(e,s,t){"use strict";s.a=t.p+"static/media/forgot-password-office.6075fc44.jpeg"},185:function(e,s,t){"use strict";s.a=t.p+"static/media/forgot-password-office-dark.2ca0fb3e.jpeg"},422:function(e,s,t){"use strict";t.r(s);var a=t(0),r=t.n(a),c=t(22),l=t(143),i=t(184),d=t(185),n=t(4),o=t(2),u=t(144),m=t(145),j=t(18),x=t(34),b=t(1);var h=function(){var e=Object(a.useContext)(j.a).resetPassword,s=r.a.useState(!1),t=Object(n.a)(s,2),c=t[0],l=t[1],i=new URLSearchParams(Object(o.h)().search);return c?Object(b.jsx)("p",{className:"text-sm font-medium text-gray-600",children:"Your password has been reset. Please login using your new password."}):Object(b.jsx)(u.c,{initialValues:{password:""},validationSchema:m.b().shape({password:m.c().min(8).matches("^.*[0-9].*$","Atleast one number required").matches("^.*[a-zA-Z].*$","Atleast one letter required").required("Password is required")}),onSubmit:function(s,t){var a=s.password,r=t.setStatus,c=t.setSubmitting;c(!0),r(),e(a,i.get("token")?i.get("token"):"").then((function(e){l(!0),c(!1)})).catch((function(e){e.response?r(e.response.data.message):r("Some error occured. Please try again."),c(!1)}))},children:function(e){var s=e.errors,t=e.status,a=e.touched,r=e.isSubmitting;return Object(b.jsxs)(u.b,{children:[Object(b.jsxs)(x.Label,{children:[Object(b.jsx)("span",{children:"Password"}),Object(b.jsx)(u.a,{className:"mt-1",as:x.Input,name:"password",type:"password",placeholder:"***************"}),s.password&&a.password?Object(b.jsx)("div",{children:Object(b.jsx)(x.HelperText,{valid:!1,children:s.password})}):null]}),Object(b.jsx)(x.Button,{className:"mt-4",block:!0,type:"submit",value:"submit",disabled:r,children:"Reset password"}),t&&Object(b.jsx)(x.HelperText,{valid:!1,children:t})]})}})};s.default=function(){return Object(b.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900",children:[Object(b.jsx)(c.b,{to:"/",className:"px-8 pt-4 text-xl font-bold text-gray-800 dark:text-gray-200",children:Object(b.jsx)("img",{src:l.a,className:"w-40",alt:"My logo"})}),Object(b.jsx)("div",{className:"flex flex-1 h-full items-center mt-4 lg:mt-0 p-6",children:Object(b.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl",children:Object(b.jsx)("div",{className:"bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(b.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(b.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(b.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:i.a,alt:"Office"}),Object(b.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:d.a,alt:"Office"})]}),Object(b.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(b.jsxs)("div",{className:"w-full",children:[Object(b.jsx)("h1",{className:"mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Reset password"}),Object(b.jsx)(h,{}),Object(b.jsx)("hr",{className:"my-8"}),Object(b.jsx)("p",{className:"mt-4",children:Object(b.jsx)(c.b,{className:"text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline",to:"/auth/login",children:"Already have an account? Login"})})]})})]})})})})]})}}}]);
//# sourceMappingURL=38.6808f408.chunk.js.map