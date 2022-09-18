import React, { useContext } from "react";
import UsersContext from "../context/UsersContext";

const UsersList = () => {
  const { users, setUsers } = useContext(UsersContext);
  const handleDelete = (id) => {
    setUsers(users.filter((users) => users.id !== id));
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0
            ? users.map((user) => {
                return (
                  <tr key={`user-${user.id}`}>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>
                      <button>
                        <a href={`/edit-user/${user.id}`}>Edit</a>
                      </button>
                      <button onClick={() => handleDelete(user.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "No Users Available"}
        </tbody>
      </table>

      <button>
        <a href="/add-user">Add User</a>
      </button>
      <button>
        <a href="/">Go to Home Page</a>
      </button>
    </div>
  );
};

export default UsersList;
