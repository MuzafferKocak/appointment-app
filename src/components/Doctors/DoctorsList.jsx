import React from "react";
import Card from "react-bootstrap/Card";

const DoctorList = ({ doctors, onDoctorClick }) => {
  return (
    <div className="card-container">
      {doctors.map((doctor, index) => (
        <Card
          className="card-body"
          key={index}
          onClick={() => onDoctorClick(doctor.name)}
        >
          <div className="img">
            <img src={doctor.img} alt={doctor.name} />
          </div>
          <div>
            <h4>{doctor.name}</h4>
            <h5>{doctor.dep}</h5>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DoctorList;