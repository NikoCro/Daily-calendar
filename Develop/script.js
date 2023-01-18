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

display time()

function setBlockColour() {
  const timeblocks = $(".time-block");
  //create for loop to assign colour
  for (let index = 0; index < timeblocks.length; index++) {
    const currentTimeblock = $("#" + timeblocks[index].id);

    if (currentTimeblock.data("hour") == time) {
      currentTimeblock.addClass("present");
    } else if (currentTimeblock.data("hour") < time) {
      currentTimeblock.addClass("past");
    } else if (currentTimeblock.data("hour") > time) {
      currentTimeblock.addClass("future");
    }
  }
}

function displayTime() {
  setBlockColour();
}

$(".saveBtn").click(function () {
  let hour = this.parentElement.dataset.hour;
  let textValue = this.parentElement.children[1].value;
  localStorage.setItem([hour], textValue);
});
