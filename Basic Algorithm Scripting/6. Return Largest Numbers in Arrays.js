function largestOfFour(arr) {

  var newArray = [];

  for (var i in arr) {
    var tmp = 0;

    for (var num in arr[i]) {
      if (arr[i] [num] > tmp) {
        tmp = arr[i] [num];
      }
    }
    newArray[i] = tmp;

  }
  return newArray;

}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
