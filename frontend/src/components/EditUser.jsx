import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';

export const EditUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [no_tlp, setNo_tlp] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        no_tlp,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setNo_tlp(response.data.no_tlp);
  };

  return (
    <div>
      <nav className="navbar is-light">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <strong>Contact List</strong>
          </Link>
        </div>
      </nav>

      <div className="columns mt-5 is-centered">
        <div className="column is-half">
          <form onSubmit={updateUser}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
              </div>
            </div>
            <div className="field">
              <label className="label">No tlp</label>
              <div className="control">
                <input type="text" className="input" value={no_tlp} onChange={(e) => setNo_tlp(e.target.value)} placeholder="No tlp" />
              </div>
            </div>
            <div className="field">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
