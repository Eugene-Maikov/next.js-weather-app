export const getCurrentData = () => {
  const currentData = new Date().toLocaleDateString("ru-RU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return currentData
};
// Формат вывода даты