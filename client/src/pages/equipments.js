import React from 'react';
import'./equipment.css';

const Equipments = () => {
  const videoId1 = 'S2Z8xR8iKTA'; // Replace with the ID of your YouTube video
  const videoId2 = '8XggYYfVVG0'; // Replace with the ID of your YouTube video
  const videoId3 = '13k2s94eaSk'; // Replace with the ID of your YouTube video
  const videoId4 = 'g84D5674v60'; // Replace with the ID of your YouTube video
  const videoId5 = 'KYVhIgulQxM'; // Replace with the ID of your YouTube video
  
return (
    <div>
      <div class="container mt-3 ">
        <div className ="equipmentTitle">
        <br /><br /><h1> Dental Technology Used in Our Office</h1><hr/><br />
        </div>

        <div className="post">

        <div class="container-fluid  text-black text-center"> 
        <div class="container-fluid  text-black text-center">   <h2>Yomi Dental Robot</h2></div> <br/>
          <p >The future of dentistry may include a lot of robots. This year, the FDA gave clearance for a company 
            to  use a dental robot for bone reduction in dental implant surgery. The robotic system helps dentists 
            during the preoperative and intraoperative phases of surgery by performing robot-guided bone reduction
            of the mandible and maxilla.
            Microrobots could also be used to access difficult-to-reach areas of the root canal to treat biofilms,
            deliver drugs and retrieve diagnostic samples, according to a study published in the Journal of Dental
            Research. Researchers were able to track the robots’ movements in real time using imaging technology 
            like intraoral scanners, dental x-rays and cone-beam computed tomography.</p>
        </div>
        <div class="embed-responsive embed-responsive-1by1">
        <iframe class="embed-responsive-item" title="YouTube video player" src={`https://www.youtube.com/embed/${videoId1}`} ></iframe>
        </div>
        </div> 
      
      
        <div className="post">

        <div class="container-fluid  text-black text-center"> 
        <div class="container-fluid  text-black text-center">    <h2>Dental CBCT Scan</h2></div> <br/>
          <p > CBCT systems used by dental professionals rotate around
              you, capturing data using a cone-shaped x-ray. In less than a minute, about 150-200 images are captured
              from a variety of angles. The data captured are used to reconstruct a 3D image of your:
              Teeth, Mouth, jaw, neck, Ears, nose, and throat (ENT) <br/>
              What’s the difference between CBCT and standard x-rays? <br />           
              FMX — Typically taken every 3-5 years by your dentist.The FMX captures images of each tooth and the 
              surrounding structures and is used to diagnose gum disease, cavities, dental abscesses, and lesions.<br />
              PANO — A single picture image most often used by oral surgeons and orthodontists. This type of x-ray does 
              not provide explicit detail. <br />
              What are the benefits of CBCT scans? <br /> <br /> 
              <ol>
                 <li>Better image quality and accuracy</li>
                 <li> Provides comprehensive information about your oral health</li>
                 <li>Comfortable and quick experience</li>
                 <li> A lower dose of radiation</li>
              </ol>        
              </p>
        </div>
        <div class="embed-responsive embed-responsive-1by1">
        <iframe class="embed-responsive-item" title="YouTube video player" src={`https://www.youtube.com/embed/${videoId2}`} ></iframe>
        </div>
        </div> 

        <div className="post">

        <div class="container-fluid  text-black text-center"> 
        <div class="container-fluid  text-black text-center">    <h2>CEREC Scanner</h2></div> <br/>
          <p >The system uses computer-aided design (CAD) technology and software to design and create permanent
             dental restorations like crowns, veneers, onlays, and more. The machine itself includes a camera,
             computer, and milling instrument. In the past, making single tooth restorations required multiple 
             visits, but with CEREC® it takes only minutes. You can get a crown, for example, in only one visit! 
             Plus, it also means we don’t have to take physical impressions of your teeth, since CEREC® uses digital
             imaging. It is a recently developed digital scanner that uses a camera to create incredibly detailed and 
             crisp 3D digital images of your mouth.  It’s faster, more accurate, and easier to use. It even beautifully 
             scans restorations (like crowns, implants, bridges, and others). Perhaps most importantly of all, it allows
              us to give our patients an even more comfortable and low-stress experience.</p>
        </div>
        <div class="embed-responsive embed-responsive-1by1">
        <iframe class="embed-responsive-item" title="YouTube video player" src={`https://www.youtube.com/embed/${videoId3}`} ></iframe>
        </div>
        </div> 
   
        <div className="post">

        <div class="container-fluid  text-black text-center"> 
        <div class="container-fluid  text-black text-center">   <h2>Waterlase Dentistry</h2></div> <br/>
          <p > Waterlase dentistry is one of the most advanced dental treatments available to Dentists today.
               Waterlase uses a patented technology that combines focused light energy with a stream of water 
               for a highly precise, exceptionally gentle dental experience. Waterlase allows your dentist to 
               perform a wide range of procedures with benefits including:
          <ol>
                 <li>Less pain and faster healing time, with less trauma to teeth and gums</li>
                 <li> Less usage of anesthetic for most procedures</li>
                 <li>Treatment of more than one part of the mouth in one visit, eliminating
                     referrals and specialist visits in many cases.</li>
                 <li>Making dental care a more relaxing experience for you!</li>
              </ol>
          </p>
        </div>
        <div class="embed-responsive embed-responsive-1by1">
        <iframe class="embed-responsive-item" title="YouTube video player" src={`https://www.youtube.com/embed/${videoId4}`} ></iframe>
        </div>
        </div> 
        
        <div className="post">

        <div class="container-fluid  text-black text-center"> 
         <div class="container-fluid  text-black text-center">   <h2>NOMAD Pro2 – Portable Low Dose Radiation X-Ray</h2></div> <br/>
          <p >We use the Nomad Portable X-ray which allows for flexibility, comfort, convenience and reduced
             radiation exposure. The use of the Nomad results in less time that the sensor has to rest in the
              patient’s mouth, more accurate positioning and reduced radiation.
          </p>
        </div>
        <div class="embed-responsive embed-responsive-1by1">
        <iframe class="embed-responsive-item" title="YouTube video player" src={`https://www.youtube.com/embed/${videoId5}`} ></iframe>
        </div>
        </div> 
   </div>
   </div>
  );
};

export default Equipments;


