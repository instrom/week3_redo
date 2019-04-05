function pasanganTerbesar(num) {
    var numString = num.toString();
    var biggestNumber = 0;
    for (var i=0; i < numString.length; i++) {
        // console.log(numString[i])
        if(numString[i] + numString[i+1] > biggestNumber) {
            biggestNumber = numString[i] + numString [i+1]
        }
    }
    return biggestNumber
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99