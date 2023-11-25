# Beauty Salon Appointments App

From the book **Mastering React Test-Driven Development** by Packt Publishing

## Getting Started

To build the app for manual testing, use `npm run build` and open the index.html file in a browser.

To run the unit tests, just use `npm test`


##todo
Complete the Appointment component by displaying the following fields on the page. You should use a table HTML element to give the data some visual structure. This shouldn’t affect how you write your tests. The fields that should be displayed are the following:
Customer last name, using the lastName field
Customer telephone number, using the phoneNumber field
Stylist name, using the stylist field
Salon service, using the service field
Appointment notes, using the notes field
Add a heading to Appointment to make it clear which appointment time is being viewed.
There is some repeated sample data. We’ve used sample data in our tests, and we also have sampleAppointments in src/sampleData.js, which we used to manually test our application. Do you think it is worth drying this up? If so, why? If not, why not?