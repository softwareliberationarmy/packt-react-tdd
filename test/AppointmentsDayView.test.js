import React from "react";
import ReactDOM from "react-dom/client";
import { act } from "react-dom/test-utils";
import { Appointment, AppointmentsDayView } from "../src/AppointmentsDayView";

describe("Appointment", () => {
  let container;
  let props;

  beforeEach(() => {
    container = document.createElement("div");
    props = { customer: {} };
    document.body.replaceChildren(container);
  });

  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  const verifyFieldShowsUp = (value, label) => {
    render(<Appointment {...props} />);
    expect(document.body.textContent).toContain(value);
    expect(document.body.textContent).toContain(label);
  };

  const verifyCustomerFieldShowsUp = (field, value, label) => {
    props.customer[field] = value;
    verifyFieldShowsUp(value, label);
  };

  it("renders the customer first name", () => {
    verifyCustomerFieldShowsUp("firstName", "Ashley", "Customer first name");
  });

  it("renders any customer first name", () => {
    verifyCustomerFieldShowsUp("firstName", "Jordan", "Customer first name");
  });

  it("renders customer last name", () => {
    verifyCustomerFieldShowsUp("lastName", "Jones", "Customer last name");
  });

  it("renders customer phone number", () => {
    verifyCustomerFieldShowsUp(
      "phoneNumber",
      "555-1212",
      "Customer phone number"
    );
  });

  it("renders the stylist name", () => {
    props.stylist = "Jess";
    verifyFieldShowsUp("Jess", "Stylist");
  });

  it("renders the salon service", () => {
    props.service = "Brazilian wax";
    verifyFieldShowsUp("Brazilian wax", "Salon service");
  });

  it("renders the appointment notes", () => {
    props.notes = "Here are some notes";
    verifyFieldShowsUp("Here are some notes", "Appointment notes");
  });

  it("shows a header with the appointment time", () => {
    const apptDate = new Date(2023, 8, 1, 9, 0, 0);
    props.startsAt = apptDate;
    render(<Appointment {...props} />);
    expect(container.querySelector("h3")).not.toBeNull();
    expect(container.querySelector("h3").textContent).toEqual(
      "9/1/2023, 9:00 AM"
    );
  });
});

describe("AppointmentsDayView", () => {
  let container;
  const today = new Date();
  const twoAppointments = [
    { startsAt: today.setHours(12, 0), customer: { firstName: "Ashley" } },
    { startsAt: today.setHours(13, 0), customer: { firstName: "Jordan" } },
  ];

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointments", () => {
    render(<AppointmentsDayView appointments={[]} />);
    const listElement = document.querySelector("ol");
    expect(listElement).not.toBeNull();
  });

  it("renders an li for each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const listChildren = document.querySelectorAll("ol > li");
    expect(listChildren).toHaveLength(2);
  });

  it("renders the time of each appointment", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const listChildren = document.querySelectorAll("li");
    expect(listChildren[0].textContent).toEqual("12:00");
    expect(listChildren[1].textContent).toEqual("13:00");
  });

  it("initially shows a message saying there are no appointments today", () => {
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.body.textContent).toContain(
      "There are no appointments scheduled for today"
    );
  });

  it("selects the first appointment by default", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    expect(document.body.textContent).toContain("Ashley");
  });

  it("has a button element in each li", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const buttons = document.querySelectorAll("li > button");
    expect(buttons).toHaveLength(2);
    expect(buttons[0].type).toEqual("button");
  });

  it("renders another appointment when selected", () => {
    render(<AppointmentsDayView appointments={twoAppointments} />);
    const button = document.querySelectorAll("button")[1];
    act(() => button.click());
    expect(document.body.textContent).toContain("Jordan");
  });
});
