const today = new Date();
const at = (hours) => today.setHours(hours, 0);
export const sampleAppointments = [
  { startsAt: at(9), customer: { firstName: "Charlie" } },
  { startsAt: at(10), customer: { firstName: "Agatha" } },
  { startsAt: at(11), customer: { firstName: "Frederick" } },
  { startsAt: at(12), customer: { firstName: "Ralph" } },
  { startsAt: at(13), customer: { firstName: "James" } },
  { startsAt: at(14), customer: { firstName: "William" } },
  { startsAt: at(15), customer: { firstName: "Archibald" } },
  { startsAt: at(16), customer: { firstName: "Reginald" } },
  { startsAt: at(17), customer: { firstName: "Lawrence" } },
];
