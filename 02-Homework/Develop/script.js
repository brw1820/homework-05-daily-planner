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
  hoursIndex = 0;
  hoursObject = [
    { twelveHours: "9AM", twentyFourHours: "9" },
    { twelveHours: "10AM", twentyFourHours: "10" },
    { twelveHours: "11AM", twentyFourHours: "11" },
    { twelveHours: "12PM", twentyFourHours: "12" },
    { twelveHours: "1PM", twentyFourHours: "13" },
    { twelveHours: "2PM", twentyFourHours: "14" },
    { twelveHours: "3PM", twentyFourHours: "15" },
    { twelveHours: "4PM", twentyFourHours: "16" },
    { twelveHours: "5PM", twentyFourHours: "17" },
    { twelveHours: "6PM", twentyFourHours: "18" },
    { twelveHours: "7PM", twentyFourHours: "19" },
    { twelveHours: "8PM", twentyFourHours: "20" },
    { twelveHours: "9PM", twentyFourHours: "21" },
    { twelveHours: "10PM", twentyFourHours: "22" },
    { twelveHours: "11PM", twentyFourHours: "23" },
    { twelveHours: "12AM", twentyFourHours: "24" },
  ];

function newTimeRow() {
    var newRow = $("<div>").addClass("row");
    var col1 = $("<div>")
      .addClass("col-sm-1 hour")
      .text(hoursObject[hoursIndex].twelveHours);
      console.log(hoursObject[hoursIndex].twelveHours);
    var col2 = $("<textarea>").addClass("col-sm-10");
    // console.log(col2);
    var col3 = $("<button>")
      .addClass("col-sm-1 saveBtn")
      .html("<i class='fas fa-save'></i>");
    newRow.append(col1);
    newRow.append(col2);
    newRow.append(col3);
    $(".container").append(newRow);
    hoursIndex++;
    // console.log(newTimeRow());
  if (hoursObject[hoursIndex].twentyFourHours === moment().format('H')){
    col2.addClass("present");
  }else if (hoursObject[hoursIndex].twentyFourHours > moment().format('H')){
    col2.addClass("future");
  }else {
    col2.addClass("past");
    console.log(hoursObject[hoursIndex].twentyFourHours);
  };
};

  $("#currentDay").text(moment().format('MMMM Do YYYY'));
  
  for (var i = 0; i < 17; i++) {
    newTimeRow();
  }

  
});


// classes found in .css folder
// jumbotron, description, time-block, .row, .hour, .past, .present, .future, .saveBtn, .saveBtn i:hover

//  //Create array for times
//  var hoursArray = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];
//  //   var hoursArrayIndex = 0;
//  //   console.log(hoursArrayIndex);
//  var calRowEl = $("<div>").addClass("row");
//  var eventEl = $("<div>").addClass("col-10 textarea time-sensitive"); //style?
//  var calHourColumnsEl = $("<div>").addClass("col-1 hour");
//  var timeBlockEl = $("<div>").addClass("container time-block");
//  var saveButtonColEl = $("<div>").addClass("col-1 display-icon saveBtn btn");
//  saveButtonColEl.addClass("i fas fa-lock");
//  //do I need to create <p> inside of event rows for text?
//  //**Function definitions**//
//  //Push time into rows
//  //For loop for array of hours
//  function scheduleApperance() {
//    for (var i = 0; i < hoursArray.length; i++) {
//      var calHours = hoursArray[i];
//      console.log(calHours); //WORKS
//      //Create calendar rows/columns w/ all other given CSS elements
//      //Append calendar rows to the "time table" styling
//      //Column for hours
//      $(calRowEl).append(calHourColumnsEl);
//      //Hour of day text inside column
//      $(calHourColumnsEl).text(calHours);
//      //Schedule events column
//      $(calRowEl).append(eventEl);
//      //The container
//      $(timeBlockEl).append(calRowEl);
//      $(".container").append(timeBlockEl);
//      //Save button
//      $(calRowEl).append(saveButtonColEl);
//    }
//  }
//  scheduleApperance();

//  function colorChange() {
//      var a
//  }

// //  function colochange() {
//     var colNine = document.querySelector("color-change");
//     // if colNine < time currenttime, then background color is red; && disable submit button
//     // else if colNine === currenttime, background color is grey; save to local storage hwen clicked
//     // else if colNine > current time, background color is green; save to local storage when clicked.

// // Are we creating <divs> to be dynamically or are we hard-coding everything.
