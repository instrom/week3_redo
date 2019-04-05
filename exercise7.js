function hitungJumlahKata(kalimat) {
    var kalimatPotong = kalimat.split(' ')
    return kalimatPotong.length
    // console.log(kalimatPotong)
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5