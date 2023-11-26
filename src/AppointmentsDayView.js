import React, { useState } from "react";

export const Appointment = ({
  startsAt,
  customer,
  stylist,
  service,
  notes,
}) => {
  const formattedStart = startsAt?.toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <>
      //show startsAt in an h3 tag formatted like this: 9/1/2023 9:00
      <h3>{formattedStart}</h3>
      <table>
        <tbody>
          <tr>
            <td>Customer first name</td>
            <td>{customer.firstName}</td>
          </tr>
          <tr>
            <td>Customer last name</td>
            <td>{customer.lastName}</td>
          </tr>
          <tr>
            <td>Customer phone number</td>
            <td>{customer.phoneNumber}</td>
          </tr>
          <tr>
            <td>Stylist</td>
            <td>{stylist}</td>
          </tr>
          <tr>
            <td>Salon service</td>
            <td>{service}</td>
          </tr>
          <tr>
            <td>Appointment notes</td>
            <td>{notes}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const appointmentTimeOfDay = (startsAt) => {
  const [h, m] = new Date(startsAt).toTimeString().split(":");
  return `${h}:${m}`;
};

export const AppointmentsDayView = ({ appointments }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(0);

  return (
    <div id="appointmentsDayView">
      <ol>
        {appointments.map((appt, i) => (
          <li key={appt.startsAt}>
            <button type="button" onClick={() => setSelectedAppointment(i)}>
              {appointmentTimeOfDay(appt.startsAt)}
            </button>
          </li>
        ))}
      </ol>
      {appointments.length === 0 ? (
        <p>There are no appointments scheduled for today.</p>
      ) : (
        <Appointment {...appointments[selectedAppointment]} />
      )}
    </div>
  );
};
