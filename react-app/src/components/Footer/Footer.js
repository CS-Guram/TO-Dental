import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*colimn1*/}
                    <div className="col">
                        <div className="list-unstyled">
                            <i></i>LOCATION<i></i>
                            <i> 1629 west 10th street </i>
                            <i> Brooklyn, NY 11223 </i>
                        </div>
                    </div>
                    {/*column2*/}
                    <div className="col">
                    <div className="list-unstyled">
                            <h4> HOURS OF OPERATION </h4><br/>
                            <i> Daily by appointment 9:00 AM - 6:00 PM </i>
                            <i> Thursday 9:00 AM - 6:00 PM </i>
                            <i> Friday 9:30 AM - 6:30 PM </i>
                        </div>
                    </div>
                    {/*column3*/}
                    <div className="col">
                        <div className="list-unstyled">
                            <i>Contuct Us At</i>
                            <i>(347)-577-3338</i>
                        </div>
                    </div>
                  </div>
                 <hr/>
                     <p className="col-sm">
                         &copy; {new Date().getFullYear()}; 
                         THCC MEMS INC | All rights reserved | Terms of Srvice | Privacy
                     </p>
            </div>
        </div>
    )
}

export default Footer;