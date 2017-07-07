function chunkArrayInGroups(arr, size) {
  // Break it up.
  if (size > arr.length){return arr;} 
  var twoD = [];
  var itemsLeft = arr.length;
  var chunks = arr.length % size === 0 ? 
                     arr.length / size : Math.floor(arr.length / size) + 1;
  
  for (var i = 0; i < chunks; i++){
    var oneD = [];
    for (var j = 0; j < size; j++){
      if(itemsLeft > 0){
      oneD.push(arr[i * size + j]);
        itemsLeft--;
      }
    }
    twoD.push(oneD);
  } 
  return twoD;
}

chunkArrayInGroups([1, 2,3,4], 3);
