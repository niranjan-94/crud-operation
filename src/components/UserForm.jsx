import React from "react";
import { Formik, Field, Form } from "formik";

const UserForm = ({props}) => {
  const userToEdit = props.userToEdit ? props.userToEdit : "";
  return (
    <Formik
      initialValues={{
        name: userToEdit.name,
        age: userToEdit.age,
        email: userToEdit.email,
        country: userToEdit.country,
        password: userToEdit.password,
      }}
      onSubmit={props.handleSubmit}
    >
      <Form>
        <label htmlFor="name">Name:</label>
        <Field id="name" name="name" placeholder="Enter Name" />
        <label htmlFor="age">Age:</label>
        <Field id="age" name="age" placeholder="Enter Age"></Field>
        <label htmlFor="email">Email:</label>
        <Field id="email" name="email" placeholder="Enter Email" type="email" />
        <label htmlFor="country">Country:</label>
        <Field id="country" name="country" placeholder="Enter Country" />
        <label htmlFor="password">Password:</label>
        <Field
          id="password"
          name="password"
          placeholder="Enter Password"
          type="password"
        ></Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default UserForm;
