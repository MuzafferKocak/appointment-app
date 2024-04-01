import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { appointmentData } from "../../helper/Data";

const PatientList = ({ appointments, onRemoveAppointment }) => {
  const [patients, setPatients] = useState(appointmentData);

  const handleClose = (patientId) => {
    const updatedPatients = patients.filter(
      (patient) => patient.id !== patientId
    );
    setPatients(updatedPatients);
  };

  return (
    <div>
      <div className="newcard-patient">
        {appointments &&
          appointments.length > 0 &&
          appointments.map((appointment, index) => (
            <div className="newpatient" key={index}>
              <div className="newpatient-info">
                <h4>Patient: {appointment.patient}</h4>
                <h5>Doctor: {appointment.doctor}</h5>
              </div>
              <div className="newpatient-date">
                <h5>Date: {appointment.date}</h5>
                <h5>Time: {appointment.time}</h5>
              </div>
              <div className="newclose-icon">
                <i
                  onClick={() => onRemoveAppointment(appointment.id)}
                  className="bi bi-x-circle"
                ></i>
              </div>
            </div>
          ))}
      </div>

      <div className="card-patient">
        {patients.map((patient, index) => {
          const today = new Date(patient.day);
          const formatDate = today.toLocaleDateString();
          const formatTime = today.toLocaleTimeString();
          return (
            <div className="patient" key={index}>
              <div className="patient-info">
                <h4>Patient: {patient.patient}</h4>
                <h5>Doctor: {patient.doctor}</h5>
              </div>
              <div className="patient-date">
                <h5>Date: {formatDate}</h5>
                <h5>Time: {formatTime}</h5>
              </div>
              <div className="close-icon">
                <i
                  onClick={() => handleClose(patient.id)}
                  className="bi bi-x-circle"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientList;
