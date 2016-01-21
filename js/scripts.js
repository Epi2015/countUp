divCount = function(countTo, countBy) {
  if(countBy <= countTo) {
      var quotient = Math.floor(countTo / countBy);
      var result = 0;
      var countArray = [];
      for (i = 0; i < quotient; i++) {
        var result = result + countBy;
        countArray.push(" " + result);
      }
        return countArray;
  }else {
    return false;
    alert("Make sure your divisor is less than your dividend");
  }
}

$(document).ready(function(){
  $("form#numberEnter").submit(function(event) {

  var countTo = parseInt($("input#countTo").val());
  var countBy = parseInt($("input#countBy").val());

  var finalResult = divCount(countTo, countBy);

  $(".calculated").text(finalResult);

  event.preventDefault();

  });
});
