export const formatDate = (date: number) => {
  const timezoneDate = new Date(date);
  timezoneDate.setMinutes(
    timezoneDate.getMinutes() + timezoneDate.getTimezoneOffset()
  );

  const formatedDate = Intl.DateTimeFormat("en-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(timezoneDate);

  return `${formatedDate} (GMT-5)`;
};
