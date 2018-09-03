function produceDrivingRange(blockRange){
  return function(firstValue, secondValue){
    let result = parseInt(secondValue) - parseInt(firstValue);

    if(blockRange < result){
      return `within range by ${result}`;
    }else{
      return `${result} blocks out of range`;
    }
  }
}
