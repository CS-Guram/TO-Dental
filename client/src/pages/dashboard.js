import React, { useState } from 'react';
import "./dashboard.css"

import axios from 'axios';

function Dashboard() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [procedures, setProcedures] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const [idpatients, setIdPatients] = useState('');

  const handleIdChange = (event) => {
    setIdPatients(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`/dashboard/${idpatients}`)
      .then(response => {
        const data = response.data;
        if (data.message) {
          setError(data.message);
        } else {
          setEmail(data.email);
          setUsername(data.username);
          setProcedures(data.procedures);
     
           setDate(data.date);
           //////
           setTime(data.time);
        }
      })
      .catch(error => {
        setError('Patient not found');
      });
  };

  return (
    <div>
      <h1>Dashboard: Patient Information</h1>
   
      <form onSubmit={handleSubmit}>
        <label>
          Patient ID:
          <input type="text" value={idpatients} onChange={handleIdChange} />
        </label>
        <button type="submit">Get Email and Username</button>
      </form>

      {error && <div>{error}</div>}
      {email && <div>Email: {email}</div>}
      {username && <div>Username: {username}</div>}
      {procedures && <div>Procedures: {procedures}</div>}
      {date && <div>Visit Date: {date}</div>}
      {time && <div>Visit Time: {time}</div>}
    </div>
  );
}

export default Dashboard;
