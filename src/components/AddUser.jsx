import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";

const Adduser = () => {
  const { users, setUsers } = useContext(UsersContext);
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    const user = {
      id: uuidv4(),
      name: event.name,
      age: event.age,
      email: event.email,
      country: event.country,
      password: event.password,
    };
    setUsers([...users, user]);
    navigate("/users");
  };
  console.log("dsfsdf", users)
  return (
    <UserForm props={{handleSubmit}}/>
  );
};

export default Adduser;
