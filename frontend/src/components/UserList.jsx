import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <nav className="navbar is-light ">
        <div className="navbar-brand ">
          <Link to="/" className="navbar-item">
            <strong>Contact List</strong>
          </Link>
        </div>
      </nav>

      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <Link to={`add`} className="button is-success mb-3">
            Add New
          </Link>
          <table className="table is-striped is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>No Tlp</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.no_tlp}</td>
                  <td>
                    <Link to={`edit/${user.id}`} className="button is-small is-info mr-2">
                      Edit
                    </Link>
                    <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;