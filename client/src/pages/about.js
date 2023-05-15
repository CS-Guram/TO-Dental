// importing images
import doctor1 from '../components/images/doctor-001.jpg'
import doctor2 from '../components/images/doctor-002.jpg'
import doctor3 from '../components/images/doctor-003.jpg'

// defining the About component
function About () {
    return (

      <section id="about" className="about">

      {/* bootstrap class container used to contain and center the content within a specified width */}
        <div className="container">

        {/* bootstrap class section for grouping related content in a page */}
        {/* bootstrap class text-center used to horizontally center an element's content */}
        {/* bootstrap class pb-3 used to add padding to the bottom of an element */}
        {/* bootstrap class mt-md-4 used to add margin to the top of an element on medium and larger screens */}
        <div className="section-header text-center pb-3 mt-md-4 ">
        <h2 text= "">OUR DOCTORS</h2><hr/>
        </div>
          <div className="text-center">

            {/* displaying the first doctor */}
            <div className="about-img">

            {/* bootstrap class rounded used to add rounded corners to an element */}
              <img src={doctor1} alt="" className="rounded"/>
            </div>
            <div className="mt-md-4"></div>

            {/* describing the first doctor */}
              <h4>JOAN RIVERA</h4>
              <h5>Dentist, Speacialist in orthodontics</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Placeat deleniti accusantium saepe praesentium, magnam quas est et, 
                  repellat, expedita libero ut corporis optio inventore impedit numquam 
                  fuga dolores facilis distinctio.</p><br/><br/>
            </div>
          <div className="text-center">

          {/* displaying the second doctor */}
            <div className="about-img">
              <img src={doctor2} alt="" className="rounded"/>
            </div>
          <div className="mt-md-4"></div>

          {/* describing the second doctor */}
            <h4>JACK PIRECE</h4>
            <h5>Anaesthetist, MD</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Placeat deleniti accusantium saepe praesentium, magnam quas est et, 
                  repellat, expedita libero ut corporis optio inventore impedit numquam 
                  fuga dolores facilis distinctio.</p><br/><br/>
          </div>
          <div className="text-center">

            {/* displaying the third doctor */}
            <div className="about-img">
              <img src={doctor3} alt="" className="rounded"/>
            </div>
          <div className="mt-md-4"></div>

          {/* describing the third doctor */}
            <h4>CARL WINDSLOW</h4>
            <h5>Dentist, Oral Surgeon, DMD</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Placeat deleniti accusantium saepe praesentium, magnam quas est et, 
                  repellat, expedita libero ut corporis optio inventore impedit numquam 
                  fuga dolores facilis distinctio.</p><br/><br/>
            </div>
        </div>    
      </section>
    );
  }
  
  // exporting the About component
  export default About;
