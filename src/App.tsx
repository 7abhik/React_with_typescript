import { useEffect, useState } from "react";
import { CanceledError } from "./services/api-client";
import create, { Users } from "./services/user-service";
import useUsers from "./hooks/useUser";
const userService = create;
function App() {
  const { users, error, isLoading, setError, setUsers } = useUsers();
  const deleteUser = (id: number) => {
    const originalList = [...users];
    setUsers(users.filter((u) => u.id !== id));
    const { request } = userService.delete(id);
    request.catch((err) => {
      setError(err.message);
      setUsers(originalList);
    });
  };

  const addUser = () => {
    const user = { id: 0, name: "Abhishek" };
    const originalData = [...users];
    setUsers([user, ...users]);
    const { request } = userService.create(user);
    request
      .then(({ data: addedUser }) => setUsers([addedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalData);
      });
  };
  return (
    <>
      {isLoading && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <p className="text-danger">{error}</p>}
      <div className="mb-3">
        <button className="btn btn-primary" onClick={addUser}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.id}
              {" : "}
              {user.name}
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default App;
