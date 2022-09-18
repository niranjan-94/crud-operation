import React, { useContext } from "react";
import { Formik, Field, Form } from "formik";
import UsersContext from "../context/UsersContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const { setCurrentUser } = useContext(UsersContext);
  const handleSubmit = (event) => {
    const user = {
      email: event.email,
      password: event.password,
    };
    setCurrentUser(user);
    navigate("/");
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="email">Email:</label>
          <Field
            id="email"
            name="email"
            placeholder="Enter Email"
            type="email"
          />
          <label htmlFor="password">Password:</label>
          <Field
            id="password"
            name="password"
            placeholder="Enter Password"
            type="password"
          ></Field>
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
