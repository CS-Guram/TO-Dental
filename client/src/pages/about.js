import doctor1 from '../components/images/doctor-001.jpg'
import doctor2 from '../components/images/doctor-002.jpg'
import doctor3 from '../components/images/doctor-003.jpg'
import "./about.css"

function Services () {
    return (
      <section id="about" className="about">
        <div className="container">
        <div className="section-header text-center pb-3 mt-md-4 ">
        <h4 text= "">OUR DOCTORS</h4><hr/>
        </div>
          <div className="text-center">
            <div className="about-img">
              <img src={doctor1} alt="" class="rounded"/>
            </div>
            <div className="mt-md-4"></div>
              <h4>JOAN RIVERA</h4>
              <h5>Dentist, Speacialist in orthodontics</h5>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Placeat deleniti accusantium saepe praesentium, magnam quas est et, 
                  repellat, expedita libero ut corporis optio inventore impedit numquam 
                  fuga dolores facilis distinctio.</p><br/><br/>
            </div>
          <div className="text-center">
            <div className="about-img">
              <img src={doctor2} alt="" class="rounded"/>
            </div>
          <div className="mt-md-4"></div>
            <h4>JACK PIRECE</h4>
            <h5>Anaesthetist, MD</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                  Placeat deleniti accusantium saepe praesentium, magnam quas est et, 
                  repellat, expedita libero ut corporis optio inventore impedit numquam 
                  fuga dolores facilis distinctio.</p><br/><br/>
          </div>
          <div className="text-center">
            <div className="about-img">
              <img src={doctor3} alt="" class="rounded"/>
            </div>
          <div className="mt-md-4"></div>
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
  
  export default Services;
