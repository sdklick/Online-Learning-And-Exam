import React,{useState,useEffect} from "react";

const Footer = () => {
    const [year, setyear] = useState();
    const [time, settime] = useState();

    useEffect(() => {
      const mydateobj = new Date();
      let myyear = mydateobj.getFullYear();
      setyear(myyear);
    }, []);

    useEffect(() => {
      setInterval(() => {
        const mydateobj = new Date();
        let mytime = mydateobj.toLocaleTimeString();
        settime(mytime);
      }, 1000);
    }, [time]);

    return (
      <>
        <footer id="footer" className="footer-1">
          <div className="footer-copyright">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center text-success">
                <span className="fw-bold" >{time}</span>
                  <p>Copyright © {year}. All rights reserved Design And Devloped By Sumanta Das</p>
                  
                </div>
                
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  };

export default Footer;
