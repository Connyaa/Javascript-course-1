// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
// PROBLEM:
// We work for a company building a smart home thermometer.
// Our most recent task is this:
// "Given an array of tempertaures of one day,
// calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1, Understanding the problem
// - What is temp amplitude?
// Answer: Difference between highest and lowest temp
//  - How to compute the max and min temperatures?
//  - What's a sensor error? And what to do?

// 2, Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1, Understanding the problem
// - With 2 arrays, should we implement functionality twice?
// Answer: NO! Just merge two arrays

// 2, Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    
    // C, FIX THE Bug
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  
  // B, FIND THE Bug
  console.log(measurement);
  console.table(measurement);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A, IDENTIFY THE Bug
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

*/
