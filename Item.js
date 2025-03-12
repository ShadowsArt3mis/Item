function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const daysInCurrentMonth = getDaysInMonth(currentYear, currentMonth);

const itemData =[];

for (let day = 1; day <= daysInCurrentMonth; day++) {
  const items =[];
  const numItems = Math.floor(Math.random() * 3) + 1;

  for (let i = 0; i < numItems; i++) {
    items.push({
      name: `Item ${i + 1} for Day ${day}`,
      points: Math.floor(Math.random() * 500) + 100,
    });
  }

  itemData.push({ day, items });
}
