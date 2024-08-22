// Code your solution in this file!
function returnFirstTwoDrivers(arrayOfDrivers) {
  return arrayOfDrivers.slice(0, 2);
}

function returnLastTwoDrivers(arrayOfDrivers) {
  return arrayOfDrivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return (fare) => fare * multiplier;
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectorFunction) {
  return selectorFunction(arrayOfDrivers);
}

// Example usage:
const drivers = ["Alice", "Bob", "Charlie", "David"];

const firstTwo = selectDifferentDrivers(drivers, selectingDrivers[0]);
const lastTwo = selectDifferentDrivers(drivers, selectingDrivers[1]);
const doubledFares = drivers.map(fareDoubler);
const tripledFares = drivers.map(fareTripler);

console.log(firstTwo); 
console.log(lastTwo); 
console.log(doubledFares); 
console.log(tripledFares); 
