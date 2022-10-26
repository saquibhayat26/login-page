import { Formik } from "formik";
import "./Login.css";

const Login = () => (
  <div className="login">
    <h1>Omega</h1>

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
              className="form__input"
            />
            {errors.email && touched.email && errors.email}
            <input
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              className="form__input"
            />
            {errors.password && touched.password && errors.password}
            <div className="formCheckBox">
              <input type="checkBox" />
              <p>Keep me signed in</p>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="form__btn btn1"
            >
              Get Started
            </button>
            <p>
              Don't have an account?
              <span style={{ color: "yellow" }}>Create for free</span>
            </p>
            <button className="form__btn btn2 ">Create Now</button>
          </form>
        )}
      </Formik>
    </div>
  </div>
);

export default Login;
