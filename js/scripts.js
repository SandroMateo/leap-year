function isLeapYear(year) {
  if((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputYear = parseInt($("#inputBar").val());
    if(inputYear < 0) {
      $("#output").text("Invalid input!");
    }
    else {
      var output = isLeapYear(inputYear);
      if (output) {
        $("#output").text("This is a leap year!");
      } else {
        $("#output").text("This is not a leap year!");
      }
    }
  });
});
