import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import UserForm from "./UserForm";

const EditUser = () => {
  let navigate = useNavigate();
  const { users, setUsers } = useContext(UsersContext);
  const { id } = useParams();
  const userToEdit = users.find((user) => user.id === id);
  const handleSubmit = (event) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    const user = {
      id: userToEdit.id,
      name: event.name ? event.name : userToEdit.name,
      age: event.age ? event.age : userToEdit.age,
      email: event.email ? event.email : userToEdit.email,
      country: event.country ? event.country : userToEdit.country,
      password: event.password ? event.password : userToEdit.password,
    };
    setUsers([user, ...filteredUsers]);
    navigate("/users");
  };
  const UserSchema = Yup.object().shape({
    age: Yup.number()
      .typeError("you must specify a number")
      .min(0, "Min value 0.")
      .max(120, "Max value 120."),
  });
  return (
    <UserForm  props={{UserSchema,userToEdit,handleSubmit}}/>
  );
};

export default EditUser;
