function palindrome(kata) {
    var temp = '';
    var temp2 = '';
    for (var i=0; i < kata.length; i++) {
        temp += kata[i]
    }
    for (var j=kata.length - 1; j >= 0; j--) {
        temp2 += kata[j]
    }

    if(temp === temp2) {
        return true
    } else {
        return false
    }
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false