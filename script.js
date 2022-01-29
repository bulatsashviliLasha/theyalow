const date = new Date().toDateString().split(" ");
const day = date[2];
const month = date[1];
console.log(day, month);

const setMonth = document.getElementById("month");
setMonth.innerHTML = month;
const setDay = document.getElementById("day");
setDay.innerHTML = day;
