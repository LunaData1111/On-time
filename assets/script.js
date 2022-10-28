var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

$("#hour-7 .description").val(localStorage.getItem("hour-9"));
$("#hour-8 .description").val(localStorage.getItem("hour-10"));
$("#hour-9 .description").val(localStorage.getItem("hour-11"));
$("#hour-10 .description").val(localStorage.getItem("hour-12"));
$("#hour-11 .description").val(localStorage.getItem("hour-13"));
$("#hour-12 .description").val(localStorage.getItem("hour-14"));
$("#hour-13 .description").val(localStorage.getItem("hour-15"));
$("#hour-14 .description").val(localStorage.getItem("hour-16"));
$("#hour-15 .description").val(localStorage.getItem("hour-17"));

$(".saveBtn").on("click", function () {
  var textvalue = $(this).siblings(".description").val();
  var hour = $(this).parent().attr("id");

  localStorage.setItem(hour, textvalue);
});
