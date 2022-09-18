import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import UsersList from "./components/UsersList";
import UsersContext from "./context/UsersContext";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [users, setUsers] = useLocalStorage("users", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {});
  return (
    <div>
      <Router>
        <UsersContext.Provider
          value={{ users, setUsers, currentUser, setCurrentUser }}
        >
          <Routes>
            <Route path="/" element={<ProtectedRoute Component={Home} />} />
            <Route
              path="/users"
              element={<ProtectedRoute Component={UsersList} />}
            />
            <Route
              path="/add-user"
              element={<ProtectedRoute Component={AddUser} />}
            />
            <Route
              path="/edit-user/:id"
              element={<ProtectedRoute Component={EditUser} />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </UsersContext.Provider>
      </Router>
    </div>
  );
};

export default App;
