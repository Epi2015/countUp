divCount = function(countTo, countBy) {
  if(countBy <= countTo) {
    // return true;
    if (countTo % countBy === 0) {
      var quotient = countTo / countBy
      // return quotient;
      var result = 0;
      var countArray = [];
      for (i = 0; i < quotient; i++) {
        var result = result + countBy;
        countArray.push(result);
      }
        return countArray;

    }else{
        var quotient = (countTo / countBy);
        var quotient = Math.floor(quotient);
        // return quotient;
        var result = 0;
        var countArray = [];
        for (i = 0; i < quotient; i++) {
          var result = result + countBy;
          countArray.push(result);
        }
          return countArray;
    }

  }else {
    return false;
    alert("Make sure your divisor is less than your dividend");
  }
}
