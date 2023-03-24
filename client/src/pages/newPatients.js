import React from 'react';
import visa from '../components/images/visa.jpg';
import adobe from '../components/images/download.jpg';
import'./newPatientsBody1.css';

const NewPatients = () => {
return (
	<div className="NewPatients">

       <div class="container-fluid p-5 bg-white text-black text-center">
		<h1>New Patients Info</h1><br/><br/>
        <h3>Patient Forms - New Patient Information</h3><hr/><br/>
        <p>If you are a new patient to our office, the attached file contains our new patient
        bundle with forms that will need to be filled out </p>
        <p>when you arrive at our office. Printing them, filling them out and bringing them with 
        you will allow us to attend to your medical</p>
        <p>needs more quickly than completing them on your arrival. Thank you and please call 
        our office if you have any questions at all.</p><br/><br/>

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
        
        <p>Check Out <a href="https://www.carecredit.com/doctor-locator/results/Doctor-or-Practice-Name/?City=City&Lat=40.6093824&Long=-73.9966976&Sort=D&Radius=5&PracticePhone=(215)%20632-1612&Find2=2&.x=22&.y=19&Page=1" id="my-link" target="_blank" rel="noreferrer">CareCredit</a> Learn More</p><br/>


        <p><b><br/>Dental Insurance</b></p><hr/> <br/><br/>

       <div class="p-5 bg-warning">As a service to our patients, our practice accepts most dental insurance programs, including non-managed care, indemnity
        (traditional) and PPO out-of-network. We are not part of any managed care network. Our accounting staff will prepare all the
        necessary forms for your dental benefits. However, we remind you that your specific policy is an agreement between you and your
        insurance company. Please keep in mind that you are responsible for your total obligation should your insurance benefits result in
        less coverage than anticipated. Our staff will gladly submit a pre-treatment estimate to your insurance company so that you will
        know what your benefits will be. <br/><br/>
        The fees charged for services rendered to those who are insured are the usual and customary fees charged to all our patients for
        similar services. Your policy may base its allowances on a fixed fee schedule, which may or may not coincide with our usual fees.
        You should be aware that different insurance companies vary greatly in the types of coverage available.  It is a common
        misconception that since you pay your dental insurance premium yearly that there are no more costs to you (the patient).  Also,
        some companies take care of claims promptly while others delay payment for several months.
        </div>

      
    
          <p><b><br/><br/>Patient Forms</b></p><hr/> <br/><br/>
          <ol class="list-group d-flex flex-column" > 
            <li><a href="https://c2-preview.prosites.com/169747/wy/docs/A)%20ADA%20child%20history%20form.pdf">Child Health History Form. </a></li>
            <li><a href="https://c2-preview.prosites.com/169747/wy/docs/1)%20ADA%20Adult%20history%20form.pdf">Adult Health History Form. </a></li>
            <li><a href="/docs/Consent.doc"  download> Consent for Disclosure of Health Information. </a></li>
            <li><a href="/docs/DentalInsurance.doc"  download>Dental Insurance Form. </a></li>
            <li><a href="/docs/Authorization Form.docx"  download>Authorization Form: Use or Disclosure of Patient Information. </a></li>
            <li><a href="/docs/Office Policies.doc">Office Policies & Electronic Communication Agreement. </a></li>
            <li><a href="/docs/RECEIPT OF NOTICE OF PRIVACY.docx">Notice of Privacy Practices. </a></li><br/>
            <p><span style={{ color: 'red' }}>Notice of Privacy Practices </span>(do NOT bring this form to the office. Please keep this form for your records)</p><br/><br/>
             
          <p>This web site uses files in Adobe Acrobat Portable Document Format (pdf) 
          which require <a href="https://get.adobe.com/reader/">Adobe® Acrobat® Reader</a> for viewing and printing. It is available to <a href="https://get.adobe.com/reader/">download</a> free.</p>
        <a href="https://get.adobe.com/reader/"><img src={adobe} alt="logo" width="140" height="50"/></a>
  
        </ol>

       
  
	</div>
  </div>
);
};

export default NewPatients;