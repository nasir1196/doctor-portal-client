import React from "react";
import doctor from "../../../images/doctor.png";
import "./ServiceAppoint.css";

const ServiceAppoint = () => {
  return (
    <section className="make-appointment container">
      <div className="row">
        <div className="col-md-5 d-none d-md-block">
          <img src={doctor} alt="" />
        </div>
        <div className="col-md-7 text-white py-5 appoint-text">
          <h5 className="text-info text-uppercase ">Appointment</h5>
          <h1 className="my-4">
            Make an Appointment <br /> Today
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
            magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!
          </p>
          <button className="btn btn-info">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default ServiceAppoint;
