import { useEffect, useState } from "react";
import Axios from 'axios';
import "./dashboard.css"

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const userEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    if (userEmail) {
      console.log("Email is available");
      Axios.get(`http://localhost:3001/dashboard/${userEmail}`)
        .then((response) => {
          console.log(response);
          setUserData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Email is not available");
      setUserData("Email is not available");
    }
  }, [userEmail]);

  if (userData) {
    return (
      <div className = "p-4">
        <h3>Patients Info</h3>
      <div className="container p-3 bg-info bg-opacity-10 border border-info rounded">
        <p><h5>Email: {userData.email}</h5></p>
        <p><h5>Username: {userData.username}</h5></p>
        <p><h5>Procedures: {userData.procedures}</h5></p>
        <p><h5>Date: {userData.date}</h5></p>
        <p><h5>Time: {userData.time}</h5></p>
      </div>
      </div>
    );
  } else {
    return <p>Loading...</p>;
  }
}

export default Dashboard;