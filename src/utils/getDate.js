export const getDate = () => {
  const currentDate = new Date()
    .toLocaleString("en-US", { timeZone: "UTC" })
    .slice(0, 9)
    .split("/");
  const day = currentDate[1];
  const month = currentDate[0];
  const year = currentDate[2];
  let daysArray = [];
  const monthsArray = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];
  for (let i = 1; i <= monthsArray[month - 1].days; i++) {
    daysArray.push(i);
  }
  return {month: monthsArray[month -1].name,days: daysArray }
};


