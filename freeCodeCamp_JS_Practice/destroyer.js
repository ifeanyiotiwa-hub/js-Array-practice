function destroyer(arr) {
    
    let [newArray, ...others ] = arguments;

    // console.log(others)
    let arrHold = newArray.filter(e => others.indexOf(e) === -1 )
    return arrHold;
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))