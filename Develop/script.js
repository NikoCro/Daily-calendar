// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const dayjsDate = dayjs().format("dddd, MMMM D, YYYY");
currentDate.text(dayjsDate);

const displayHour = $("#hour");
const displayMinute = $("#minutes");

const headerTime = dayjs();
const headerDate = displayHour.html(headerTime.$H);
displayMinute.html(headerTime.$m);

const time = dayjs().format("HH");
