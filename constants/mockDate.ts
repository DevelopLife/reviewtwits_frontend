const today = new Date();
const calander = [];
for (let i = 1; i < 30; i++) {
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + i
  )
    .toLocaleDateString()
    .split('.');
  date.push((Math.random() * 10).toString());

  calander.push(date);
}

const mockDateData = calander.map(([year, month, date, space, value]) => ({
  year,
  month,
  date: `${month}.${date.trim()}`,
  값: value,
}));

export default mockDateData;
