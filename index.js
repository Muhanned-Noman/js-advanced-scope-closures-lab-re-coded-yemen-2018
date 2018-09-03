function produceDrivingRange(blockRange){
  return function(firstValue, secondValue){
    let result = parseInt(secondValue) - parseInt(firstValue);
    let diff = result - blockRange;
    if(blockRange > result){
      return `within range by ${diff}`;
    }else{
      return `${diff} blocks out of range`;
    }
  };
};
