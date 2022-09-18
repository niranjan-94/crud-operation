import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";

const Home = () => {
  const { setCurrentUser } = useContext(UsersContext);
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <a href="/users">Users List</a>
      </div>
      <button>
        <a href="/add-user">Add an User</a>
      </button>
      <button onClick={() => setCurrentUser(false)}>Logout</button>
    </div>
  );
};

export default Home;
