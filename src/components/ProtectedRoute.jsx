import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsersContext from "../context/UsersContext";

const ProtectedRoute = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  const { users, currentUser } = useContext(UsersContext);
  useEffect(() => {
    if (
      currentUser
        ? currentUser.password !==
          users.find((user) => user.email === currentUser.email).password
        : !currentUser
    ) {
      navigate("/login");
    }
  });
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
