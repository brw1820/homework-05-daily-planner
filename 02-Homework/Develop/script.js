// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is   in local storage
// WHEN I refresh the page
// THEN the saved events persist
$(document).ready(function () {
    
$("#currentDay").text(moment().format('MMMM Do YYYY'));

  hoursArray = [
    { twelveHoursInput: "9AM", twentyFourInput: "9" },
    { twelveHoursInput: "10AM", twentyFourInput: "10" },
    { twelveHoursInput: "11AM", twentyFoursInput: "11" },
    { twelveHoursInput: "12PM", twentyFourInput: "12" },
    { twelveHoursInput: "1PM", twentyFourInput: "13" },
    { twelveHoursInput: "2PM", twentyFourInput: "14" },
    { twelveHoursInput: "3PM", twentyFourInput: "15" },
    { twelveHoursInput: "4PM", twentyFourInput: "16" },
    { twelveHoursInput: "5PM", twentyFourInput: "17" },
    { twelveHoursInput: "6PM", twentyFourInput: "18" },
    { twelveHoursInput: "7PM", twentyFourInput: "19" },
    { twelveHoursInput: "8PM", twentyFourInput: "20" },
    { twelveHoursInput: "9PM", twentyFourInput: "21" },
    { twelveHoursInput: "10PM", twentyFourInput: "22" },
    { twelveHoursInput: "11PM", twentyFourInput: "23" },
    { twelveHoursInput: "12AM", twentyFourInput: "24" },
  ];
hours = 0;

function newPlannerTimeRow() {
    var newRow = $("<div>").addClass("row");
    var col1 = $("<div>")
      .addClass("col-sm-1 hour")
      .text(hoursArray[hours].twelveHoursInput);
    //   console.log(hoursArray[hours].twelveHoursInput);
    var col2 = $("<textarea>").addClass("col-sm-10");
    // console.log(col2);
    var col3 = $("<button>").attr("data-time",hoursArray[hours].twentyFourInput)
      .addClass("col-sm-1 saveBtn")
      .html("<i class='fas fa-save'></i>");
    newRow.append(col1);
    newRow.append(col2);
    newRow.append(col3);
    $(".container").append(newRow);
  if (hoursArray[hours].twentyFourInput > moment().format('H')){
    col2.addClass("future");
    // console.log here
  } else if (hoursArray[hours].twentyFourInput < moment().format('H')){
    col2.addClass("past");
} else {
    col2.addClass("present");
    
  };
hours++;;}


  
  for (var i = 0; i < hoursArray.length; i++) {
    newPlannerTimeRow();
  }

  itemsArray=[];
$(".container").on("click", ".saveBtn", function(event) {
    event.preventDefault();
    console.log($(this));
    // var userData = $(this).val();
    localStorage.setItem("data-time", this);
    var finalData = JSON.parse(localStorage.getItem("data-time"));
    console.log(finalData);
    
    // localStorage.setItem("userData", "value")
    // var userData = JSON.stringify($(this));
    // console.log(userData);


//   new variable for input after "click" event listener.
// Once the save button is clicked, it will save userData
// Figure out how to grab the time slot
// 






//     var userData = ???.val
//     ????.push
// }this....sibling....
})

});

// //  function colochange() {
//     var colNine = document.querySelector("color-change");
//     // if colNine < time currenttime, then background color is red; && disable submit button
//     // else if colNine === currenttime, background color is grey; save to local storage hwen clicked
//     // else if colNine > current time, background color is green; save to local storage when clicked.

// // Are we creating <divs> to be dynamically or are we hard-coding everything.


// localStorage is an object / key-value pair