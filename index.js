function produceDrivingRange(blockRange){
  return function(firstValue, secondValue){
    let result = parseInt(secondValue) - parseInt(firstValue);
    let diff = result - blockRange;
    if(blockRange > result){
      return `within range by ${Math.abs(diff)}`;
    }else{
      return `${Math.abs(diff)} blocks out of range`;
    }
  };
};
