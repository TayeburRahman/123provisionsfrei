(this.webpackJsonprocket=this.webpackJsonprocket||[]).push([[41],{143:function(e,s,t){"use strict";s.a=t.p+"static/media/logo.5e945e43.svg"},420:function(e,s,t){"use strict";t.r(s);var a=t(0),c=t(22),l=t(143),r=t.p+"static/media/create-account-office.be2281a3.jpeg",i=t.p+"static/media/create-account-office-dark.63064297.jpeg",n=t(144),m=t(145),d=t(129),j=t(18),x=t(34),o=t(1);var u=function(){var e=Object(a.useContext)(j.a).register,s=Object(d.a)().t;return Object(o.jsx)(n.c,{initialValues:{username:"",lastname:"",email:"",password:"",customCheckLogin:!1},validationSchema:m.b().shape({username:m.c().required(s("Required")),email:m.c().email().required(s("Required")),password:m.c().min(8).matches("^.*[0-9].*$",s("Atleast one number required")).matches("^.*[a-zA-Z].*$",s("Atleast one number required")).required(s("Required")),customCheckLogin:m.a().oneOf([!0],s("Must agree Privacy Policy")),lastname:m.c().required(s("Required"))}),onSubmit:function(s,t){var a=s.username,c=s.email,l=s.password,r=s.lastname,i=t.setStatus,n=t.setSubmitting;n(!0),i(),e(a,c,l,r).catch((function(e){e.response?i(e.response.data.message):i("Some error occured. Please try again."),n(!1)}))},children:function(e){var t=e.errors,a=e.status,l=e.touched,r=e.isSubmitting;return Object(o.jsxs)(n.b,{children:[Object(o.jsxs)("div",{className:"flex gap-2",children:[Object(o.jsxs)(x.Label,{children:[Object(o.jsxs)("span",{children:[s("First name"),":"]}),Object(o.jsx)(n.a,{className:"mt-1",as:x.Input,name:"username",type:"text",placeholder:s("Max")}),t.username&&l.username?Object(o.jsx)("div",{children:Object(o.jsx)(x.HelperText,{valid:!1,children:t.username})}):null]}),Object(o.jsxs)(x.Label,{children:[Object(o.jsxs)("span",{children:[s("Last name"),":"]}),Object(o.jsx)(n.a,{className:"mt-1",as:x.Input,name:"lastname",type:"text",placeholder:s("Mustermann")}),t.lastname&&l.lastname?Object(o.jsx)("div",{children:Object(o.jsx)(x.HelperText,{valid:!1,children:t.lastname})}):null]})]}),Object(o.jsxs)(x.Label,{className:"mt-4",children:[Object(o.jsxs)("span",{children:[s("Email"),":"]}),Object(o.jsx)(n.a,{className:"mt-1",as:x.Input,name:"email",type:"email",placeholder:"max.mustermann@gmail.com"}),t.email&&l.email?Object(o.jsx)("div",{children:Object(o.jsx)(x.HelperText,{valid:!1,children:s(t.email)})}):null]}),Object(o.jsxs)(x.Label,{className:"mt-4",children:[Object(o.jsxs)("span",{children:[s("Password"),":"]}),Object(o.jsx)(n.a,{className:"mt-1",as:x.Input,name:"password",type:"password",placeholder:"***************"}),t.password&&l.password?Object(o.jsx)("div",{children:Object(o.jsx)(x.HelperText,{valid:!1,children:s(t.password)})}):null]}),Object(o.jsxs)(x.Label,{className:"mt-6 flex flex-col",check:!0,children:[Object(o.jsxs)("div",{className:"flex flex-none items-center",children:[Object(o.jsx)(n.a,{as:x.Input,name:"customCheckLogin",type:"checkbox"}),Object(o.jsxs)("div",{className:"ml-2",children:[s("I agree to the")," ",Object(o.jsx)(c.b,{className:"underline",to:"/datenschutz",children:s("privacy policy")})," zu."]})]}),t.customCheckLogin&&l.customCheckLogin?Object(o.jsx)("div",{className:"flex flex-none items-center w-full",children:Object(o.jsx)(x.HelperText,{valid:!1,children:t.customCheckLogin})}):null]}),Object(o.jsx)(x.Button,{className:"mt-4",block:!0,type:"submit",value:"submit",disabled:r,children:s("Create Account")}),a&&Object(o.jsx)(x.HelperText,{valid:!1,children:a})]})}})},h=t(146);s.default=function(){return Object(o.jsxs)("div",{className:"flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900",children:[Object(o.jsx)(h.a,{children:Object(o.jsx)("title",{children:"Registrieren - 123provisionsfrei"})}),Object(o.jsx)(c.b,{to:"/",className:"px-8 pt-4 text-xl font-bold text-gray-800 dark:text-gray-200",children:Object(o.jsx)("img",{src:l.a,className:"w-40",alt:"My logo"})}),Object(o.jsx)("div",{className:"flex flex-1 h-full items-center mt-4 lg:mt-0 p-6",children:Object(o.jsx)("div",{className:"flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800",children:Object(o.jsxs)("div",{className:"flex flex-col overflow-y-auto md:flex-row",children:[Object(o.jsxs)("div",{className:"h-32 md:h-auto md:w-1/2",children:[Object(o.jsx)("img",{"aria-hidden":"true",className:"object-cover w-full h-full dark:hidden",src:r,alt:"Office"}),Object(o.jsx)("img",{"aria-hidden":"true",className:"hidden object-cover w-full h-full dark:block",src:i,alt:"Office"})]}),Object(o.jsx)("main",{className:"flex items-center justify-center p-6 sm:p-12 md:w-1/2",children:Object(o.jsxs)("div",{className:"w-full",children:[Object(o.jsx)("h1",{className:"mb-2 text-xl font-semibold text-gray-700 dark:text-gray-200",children:"Schritt 1: Gratis Registrieren"}),Object(o.jsx)("p",{className:"text-sm mb-6",children:"Um Ihre Immobilie einfach und schnell zu inserieren, m\xfcssen Sie sich zun\xe4chst registrieren."}),Object(o.jsx)(u,{}),Object(o.jsx)("hr",{className:"my-8"}),Object(o.jsx)("p",{className:"mt-4",children:Object(o.jsx)(c.b,{className:"text-sm font-medium text-green-600 dark:text-green-400 hover:underline",to:"/auth/login",children:"Du hast bereits einen Account? Login"})}),Object(o.jsxs)("div",{className:"mt-16 flex",children:[Object(o.jsx)("p",{className:"",children:Object(o.jsx)(c.b,{className:"text-xs font-medium text-gray-700 dark:text-gray-100 hover:underline",to:"/impressum",children:"Impressum"})}),Object(o.jsx)("p",{className:"ml-2",children:Object(o.jsx)(c.b,{className:"text-xs font-medium text-gray-700 dark:text-gray-100 hover:underline",to:"/datenschutz",children:"Datenschutz"})}),Object(o.jsx)("p",{className:"ml-2",children:Object(o.jsx)(c.b,{className:"text-xs font-medium text-gray-700 dark:text-gray-100 hover:underline",to:"/agb",children:"AGB"})})]})]})})]})})})]})}}}]);
//# sourceMappingURL=41.8ea2f40f.chunk.js.map