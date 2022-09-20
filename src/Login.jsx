import { Formik } from "formik";
import "./Login.css";

const Login = () => (
  <div className="login">
    <div className="blur"></div>

    <div className="loginContainer">
      <h1>Sign In</h1>
      <p>Enter your account details below</p>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              placeholder="Email address"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <div className="formCheckBox">
              <input type="checkBox" />
              <span>Keep me signed in</span>
            </div>

            <button type="submit" disabled={isSubmitting}>
              Get Started
            </button>
            <p>
              Don't have an account? <span>Create for free</span>{" "}
            </p>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Login;
