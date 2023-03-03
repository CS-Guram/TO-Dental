import React from 'react';
import visa from '../components/images/visa.jpg';
import'./newPatientsBody1.css';

const NewPatients = () => {
return (
	<div className="NewPatients">
        <div className='body1'>
		<h1>New Patients Info</h1><br/>
        <h3>Philadelphia Patient Forms - New Patient Information</h3><hr/><br/>
        <p>If you are a new patient to our office, the attached file contains our new patient
        bundle with forms that will need to be filled out </p>
        <p>when you arrive at our office. Printing them, filling them out and bringing them with 
        you will allow us to attend to your medical</p>
        <p>needs more quickly than completing them on your arrival. Thank you and please call 
        our office if you have any questions at all.</p><br/>

        <p><b>Payment Options</b></p><hr/> <br/><br/>

        <p>For your convenience, we accept cash, personal checks, and major credit cards. 
        We also offer dental work to be paid via</p>
        <p>CARECREDIT (need logo inserted here).  With CARECREDIT, dental work can be finished
        and paid immediately with your</p>
        <p>CARECREDIT card.  There are different plans with CARECREDIT, from low interest to NO
        interest payment plans.  Payment is</p>
        <p>expected at the time services are performed. When more extensive dental care is
        necessary, financial arrangements can be made</p>
        <p>with our office.  We also offer SENIOR CITIZEN DISCOUNTS at our practice.</p><br/>
        
        <img src={visa} alt="logo" width="200" height="80"/>
    </div>
	</div>
);
};

export default NewPatients;