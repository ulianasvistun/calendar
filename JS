const monthNames = [
  "JANUARY","FEBRUARY","MARCH","APRIL",
  "MAY","JUNE","JULY","AUGUST",
  "SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"
];

const monthImages = [
  "images/january.jpg",
  "images/february.jpg",
  "images/march.jpg",
  "images/april.jpg",
  "images/may.jpg",
  "images/june.jpg",
  "images/july.jpg",
  "images/august.jpg",
  "images/september.jpg",
  "images/october.jpg",
  "images/november.jpg",
  "images/december.jpg"
];

let currentDate = new Date();

function renderCalendar() {
  const content = document.getElementById("calendarContent");
  content.classList.remove("fade");
  void content.offsetWidth;
  content.classList.add("fade");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  document.getElementById("calendar").style.backgroundImage =
    `url(${monthImages[month]})`;

  document.getElementById("monthTitle").textContent = monthNames[month];

  const daysGrid = document.getElementById("daysGrid");
  daysGrid.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay() || 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  for (let i = 1; i < firstDay; i++) {
    daysGrid.appendChild(document.createElement("div"));
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const day = document.createElement("div");
    day.className = "day";
    day.textContent = d;

    if (
      d === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      day.classList.add("today");
    }

    daysGrid.appendChild(day);
  }
}

document.getElementById("prev").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
};

document.getElementById("next").onclick = () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
};

document.getElementById("todayBtn").onclick = () => {
  currentDate = new Date();
  renderCalendar();
};

renderCalendar();
