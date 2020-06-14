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
$(document).ready(function() {
hours = [9,10,11,12,1,2,3,4,5];
hoursIndex = 0;
hoursObject = [ {"twelveHours": "9AM", "twentyFourHours":  0900},
{"twelveHours": "10AM", "twentyFourHours":  1000},
{"twelveHours": "11AM", "twentyFourHours":  1100},
{"twelveHours": "12PM", "twentyFourHours":  1200},
{"twelveHours": "1PM", "twentyFourHours":  1300},
{"twelveHours": "2PM", "twentyFourHours":  1400},
{"twelveHours": "3PM", "twentyFourHours":  1500},
{"twelveHours": "4PM", "twentyFourHours":  1600},
{"twelveHours": "5PM", "twentyFourHours":  1700},

]

// var currentTime = moment(moment));

var newRow = $("<div>").addClass("row");
$(".container").append(newRow);



function newTimeRow ()    {
    var col1 = $("<div>").addClass("col-1 hour").text(hoursObject[i].twelveHours);
    var col2 = $("<text area>").addClass("col-10 past present future");
    var col3 = $("<button>").addClass("col-1 saveBtn").html("<i class='fas fa-save'></i>");
    $(".row").append(col1);
    $(".row").append(col2);
    $(".row").append(col3);
    hoursIndex++;
    console.log(newTimeRow());
}


for (var i = 0; i < 9; i++)   {
    newTimeRow;
}

})





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