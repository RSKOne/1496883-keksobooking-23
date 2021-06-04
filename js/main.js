//Random intager function

const randomInt = (minInt, maxInt) => {
  if (minInt < 0 || maxInt <= minInt) {
    alert('Oops! Something went wrong! Allowed only positive value & max value must be bigger or equal to min value!');
  } else {
    minInt = Math.ceil(minInt);
    maxInt = Math.floor(maxInt);
    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
  }
};

console.log(randomInt(0,10));


//Random coordinate function with digit control after decimal point

const randomCoordinate = (minInt, maxInt, afterComma) => {
  if (minInt < 0 || maxInt <= minInt) {
    alert('Oops! Something went wrong! Allowed only positive value & max value must be bigger or equal to min value!');
  } else {
    minInt = Math.ceil(minInt);
    maxInt = Math.floor(maxInt);
    return (Math.random() * (maxInt - minInt + 1) + minInt).toFixed(afterComma);
  }
};

console.log(randomCoordinate(0,10,2));
