var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
// These are the time frames that the client may use to arrange their schedule.
$("#hour-7 .description").val(localStorage.getItem("hour-7"));
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
// Here we have the save button and saving to local storage
$(".saveBtn").on("click", function () {
  var textvalue = $(this).siblings(".description").val()
  var hour = $(this).parent().attr("id")

  localStorage.setItem(hour, textvalue);
});

$("#clear-search").on("click", function () {
  localStorage.clear();
  location.reload();
});
