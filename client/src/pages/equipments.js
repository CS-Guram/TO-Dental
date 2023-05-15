// importing React library 
import React from "react";

// importing CSS file for styling the equipment page
import "./equipment.css";

// defining the Equipments component
const Equipments = () => {

  // defining the YouTube video IDs to be used in the iframe elements
  const videoId1 = "S2Z8xR8iKTA";
  const videoId2 = "8XggYYfVVG0";
  const videoId3 = "13k2s94eaSk";
  const videoId4 = "g84D5674v60";
  const videoId5 = "KYVhIgulQxM";

  // return the JSX for the Equipments component
  return (
    <div>

      {/* the container for the component */}
      <div className="container mt-3 ">
        <div className="equipmentTitle">
          <br />
          <h2> Dental Technology Used in Our Office</h2>
          <hr />
          <br />
        </div>

        {/* the first post */}
        <div className="post">

          {/* the first block of text */}
          <div className="container-fluid  text-black">
            <div className="container-fluid  text-black text-center">
              {" "}
              <h4>Yomi Dental Robot</h4>
            </div>
            <p>
              The future of dentistry may include a lot of robots. This year,
              the FDA gave clearance for a company to use a dental robot for
              bone reduction in dental implant surgery. The robotic system helps
              dentists during the preoperative and intraoperative phases of
              surgery by performing robot-guided bone reduction of the mandible
              and maxilla. Microrobots could also be used to access
              difficult-to-reach areas of the root canal to treat biofilms,
              deliver drugs and retrieve diagnostic samples, according to a
              study published in the Journal of Dental Research. Researchers
              were able to track the robots’ movements in real time using
              imaging technology like intraoral scanners, dental x-rays and
              cone-beam computed tomography.
            </p>
            <br />
          </div>

          {/* the first iframe element */}
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${videoId1}`}
            ></iframe>
          </div>
        </div>

         {/* the second post */}
        <div className="post">

          {/* the second iframe element */}
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${videoId2}`}
            ></iframe>
          </div>

          {/* the second block of text */}
          <div className="container-fluid  text-black">
            <div className="container-fluid  text-black text-center">
              {" "}
              <h4>Dental CBCT Scan</h4>
            </div>
            <p>
              {" "}
              CBCT systems used by dental professionals rotate around you,
              capturing data using a cone-shaped x-ray. In less than a minute,
              about 150-200 images are captured from a variety of angles. The
              data captured are used to reconstruct a 3D image of your: Teeth,
              Mouth, jaw, neck, Ears, nose, and throat (ENT) <br />
              What’s the difference between CBCT and standard x-rays? <br />
              FMX — Typically taken every 3-5 years by your dentist.The FMX
              captures images of each tooth and the surrounding structures and
              is used to diagnose gum disease, cavities, dental abscesses, and
              lesions.
              <br />
              PANO — A single picture image most often used by oral surgeons and
              orthodontists. This type of x-ray does not provide explicit
              detail. <br />
              What are the benefits of CBCT scans? <br />
              <li>Better image quality and accuracy</li>
              <li>
                {" "}
                Provides comprehensive information about your oral health
              </li>
              <li>Comfortable and quick experience</li>
              <li> A lower dose of radiation</li>
            </p>
          </div>
        </div>

        {/* the third post */}
        <div className="post">

          {/* the third block of text */}
          <div className="container-fluid  text-black">
            <div className="container-fluid  text-black text-center">
              {" "}
              <h4>CEREC Scanner</h4>
            </div>
            <p>
              The system uses computer-aided design (CAD) technology and
              software to design and create permanent dental restorations like
              crowns, veneers, onlays, and more. The machine itself includes a
              camera, computer, and milling instrument. In the past, making
              single tooth restorations required multiple visits, but with
              CEREC® it takes only minutes. You can get a crown, for example, in
              only one visit! Plus, it also means we don’t have to take physical
              impressions of your teeth, since CEREC® uses digital imaging. It
              is a recently developed digital scanner that uses a camera to
              create incredibly detailed and crisp 3D digital images of your
              mouth. It’s faster, more accurate, and easier to use. It even
              beautifully scans restorations (like crowns, implants, bridges,
              and others). Perhaps most importantly of all, it allows us to give
              our patients an even more comfortable and low-stress experience.
            </p>
          </div>

          {/* the third iframe element */}
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${videoId3}`}
            ></iframe>
          </div>
        </div>
        
        {/* the fourth post */}
        <div className="post">
          {/* the fourth iframe element */}
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${videoId4}`}
            ></iframe>
          </div>

          {/* the fourth block of text */}
          <div className="container-fluid  text-black">
            <div className="container-fluid  text-black text-center">
              {" "}
              <h4>Waterlase Dentistry</h4>
            </div>
            <p>
              {" "}
              Waterlase dentistry is one of the most advanced dental treatments
              available to Dentists today. Waterlase uses a patented technology
              that combines focused light energy with a stream of water for a
              highly precise, exceptionally gentle dental experience. Waterlase
              allows your dentist to perform a wide range of procedures with
              benefits including:
              <li>
                Less pain and faster healing time, with less trauma to teeth and
                gums
              </li>
              <li> Less usage of anesthetic for most procedures</li>
              <li>
                Treatment of more than one part of the mouth in one visit,
                eliminating referrals and specialist visits in many cases.
              </li>
              <li>Making dental care a more relaxing experience for you!</li>
            </p>
            <br />
            <br />
          </div>
        </div>
        
        {/* the fifth post */}
        <div className="post">

          {/* the fifth block of text */}
          <div className="container-fluid  text-black text-center">
            <div className="container-fluid  text-black text-center">
              <h4>NOMAD Pro2 – Portable Low Dose Radiation X-Ray</h4>
            </div>
            <p>
              We use the Nomad Portable X-ray which allows for flexibility,
              comfort, convenience and reduced radiation exposure. The use of
              the Nomad results in less time that the sensor has to rest in the
              patient’s mouth, more accurate positioning and reduced radiation.
            </p>
          </div>

          {/* the fifth iframe element */}
          <div className="embed-responsive embed-responsive-1by1">
            <iframe
              className="embed-responsive-item"
              title="YouTube video player"
              src={`https://www.youtube.com/embed/${videoId5}`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipments;
