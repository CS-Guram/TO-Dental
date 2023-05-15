// importing React hooks
import { useEffect, useState } from "react";

// importing Axios library for making HTTP requests
import Axios from "axios";

// importing image files
import visa from "../components/images/visa.jpg";

//importing dashboard styles
import "./dashboard.css";

// defining the Dashboard component
function Dashboard() {
  // declare a state variable to store user data
  const [userData, setUserData] = useState(null);

  // retrieve user email from local storage
  const userEmail = localStorage.getItem("userEmail");

  // use useEffect to fetch user data
  useEffect(() => {
    // check if user email exists
    if (userEmail) {
      console.log("Email is available");
      Axios.get(`http://localhost:3001/dashboard/${userEmail}`)

        // handle successful response
        .then((response) => {
          console.log(response);

          // update user data state variable with response data
          setUserData(response.data);
        })

        // handle error
        .catch((error) => {
          console.log(error);
        });
    } else {
      // handle case when user email does not exist
      console.log("Email is not available");

      // set user data state variable to indicate email is not available
      setUserData("Email is not available");
    }

    // useEffect will only run when userEmail changes
  }, [userEmail]);

  // check if user data exists
  if (userData) {
    return (
      // adding padding of 4
      <div className="p-4">
        <h3>Patients Info</h3>
        <hr /><br/>

        {/* bootstrap classes container with padding of 3, background color, opacity, border and rounded corners */}
        <div className="container p-3 bg-info bg-opacity-10 border border-info rounded">
          {/* paragraph tag to display email of patient from MySQL workbench database */}
          <h5>
            <p>Email: {userData.email}</p>
          </h5>

          {/* paragraph tag to display username of patient from MySQL workbench database */}
          <h5>
            <p>Username: {userData.username}</p>
          </h5>

          {/* paragraph tag to display procedures for patient from MySQL workbench database */}
          <h5>
            <p>Procedures: {userData.procedures}</p>
          </h5>

          {/* paragraph tag to display date for patient from MySQL workbench database */}
          <h5>
            <p>Date: {userData.date}</p>
          </h5>

          {/* paragraph tag to display time for patient MySQL workbench database */}
          <h5>
            <p>Time: {userData.time}</p>
          </h5>
        </div>
        <br/>

        {/* bootstrap container element for fluid layout and padding */}
        <div className="container-fluid p-5 bg-white text-black text-center">
         
            <h4>Payment Options</h4>

          <hr /> <br />
          <br />
          <p>
            For your convenience, we accept cash, personal checks, and major
            credit cards. We also offer dental work to be paid via
          </p>
          <p>
            CARECREDIT (need logo inserted here). With CARECREDIT, dental work
            can be finished and paid immediately with your
          </p>
          <p>
            CARECREDIT card. There are different plans with CARECREDIT, from low
            interest to NO interest payment plans. Payment is
          </p>
          <p>
            expected at the time services are performed. When more extensive
            dental care is necessary, financial arrangements can be made
          </p>
          <p>
            with our office. We also offer SENIOR CITIZEN DISCOUNTS at our
            practice.
          </p>
          <br />
          {/* adding Visa logo */}
          <img src={visa} alt="logo" width="200" height="80" />
          {/* link to CareCredit */}
          <p>
            Check Out{" "}
            <a
              href="https://www.carecredit.com/doctor-locator/results/Doctor-or-Practice-Name/?City=City&Lat=40.6093824&Long=-73.9966976&Sort=D&Radius=5&PracticePhone=(215)%20632-1612&Find2=2&.x=22&.y=19&Page=1"
              id="my-link"
              target="_blank"
              rel="noreferrer"
            >
              CareCredit
            </a>{" "}
            Learn More
          </p>
          <br/>
        </div>
      </div>
      
    );

    // display loading message if user data is not available
  } else {
    return <p>Loading...</p>;
  }
}

// exporting the Dashboard component
export default Dashboard;
