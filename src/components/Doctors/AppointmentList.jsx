import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { doctorData } from "../../helper/Data";
import DoctorList from "./DoctorsList";
import PatientList from "./PatientList";

const AppointmentList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    patientName: "",
  });
  const [appointments, setAppointments] = useState([]);

  const handleDoctorClick = (doctorName) => {
    setSelectedDoctor(doctorName);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: Math.floor(Math.random() * 1000),
      date: formData.date,
      time: formData.time,
      patient: formData.patientName,
      doctor: selectedDoctor,
    };
    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);
    setFormData({ date: "", time: "", patientName: "" });
    handleCloseModal();
    console.log(newAppointment);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleRemoveAppointment = (appointmentId) => {
    const updatedAppointments = appointments.filter(
      (appointment) => appointment.id !== appointmentId
    );
    setAppointments(updatedAppointments);
  };

  return (
    <div className="appointment-list">
      <DoctorList doctors={doctorData} onDoctorClick={handleDoctorClick} />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {selectedDoctor}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                placeholder="Choose appointment Date"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                placeholder="Choose appointment Time"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPatientName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                placeholder="Enter your Name"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create an Appointment
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <PatientList
        appointments={appointments}
        onRemoveAppointment={handleRemoveAppointment}
      />
    </div>
  );
};

export default AppointmentList;
