function groupAnimals(animals) {
    var arrayLuar = [[]];
    var count = 0;
    var animalSort = animals.sort();
    arrayLuar[0].push(animalSort[0])
    for (var i=1; i < animalSort.length;i++) {
        if(animalSort[i][0] === arrayLuar[count][0][0]) {
            arrayLuar[count].push(animalSort[i])
        } else {
            count++;
            arrayLuar[count] = [animalSort[i]]
        }
    }
    return arrayLuar// you can only write your code here!
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]