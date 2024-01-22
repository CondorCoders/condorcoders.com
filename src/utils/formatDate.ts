export const formatDate = (date: Date | number) => {
  return Intl.DateTimeFormat("en-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
};
