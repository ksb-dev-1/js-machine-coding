/*

array.forEach(function(currentValue, index, arr), thisArg)


Parameter      | Belongs To | Position | Required | Description                                | Example / Default
---------------|------------|----------|----------|--------------------------------------------|---------------------------
callbackFn     | forEach    | 1st arg  | Yes      | Function to run for each element           | function(v,i,a){}
thisArg        | forEach    | 2nd arg  | No       | Value used as `this` inside callbackFn     | undefined (default)
currentValue   | callbackFn | 1st param| Yes      | The value of the current element           | "apple"
index          | callbackFn | 2nd param| No       | The index of the current element           | 0, 1, 2
array          | callbackFn | 3rd param| No       | The array forEach was called on            | ["apple","banana"]

*/

Array.prototype.myForEach = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.forEach called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const array = Object(this); // coerce array-likes/strings into an indexable object
  const length = Math.min(
    Math.max(Number(array.length) || 0, 0),
    Number.MAX_SAFE_INTEGER,
  );

  for (let i = 0; i < length; i++) {
    // skip holes in sparse arrays
    if (i in array) {
      callbackFn.call(thisArg, array[i], i, array);
    }
  }
};

// ==================================================================
// retun an object containing the email and index of the first approve aubmission whose email is already appeared earlier in the array

/*
const applicants = [
  { id: 1, name: "Maya", experience: 2, available: true },
  { id: 2, name: "Noah", experience: 5, available: false },
  { id: 3, name: "Priya", experience: 4, available: true },
  { id: 4, name: "Eli", experience: 7, available: true },
];

function firstAvailable(applicants) {
  for (let i = 0; i < applicants.length; i++) {
    const { name, available, experience } = applicants[i];

    if (available && experience >= 3) {
      return { name, index: i };
    }
  }
  return -1;
}

console.log(firstAvailable(applicants));
*/

// ==================================================================
// retun an object containing the email and index of the first approve aubmission whose email is already appeared earlier in the array

/*
const submissions = [
  { id: 1, email: "maya@example.com", approved: true },
  { id: 2, email: "noah@example.com", approved: true },
  { id: 3, email: "maya@example.com", approved: false },
  { id: 4, email: "priya@example.com", approved: true },
  { id: 5, email: "noah@example.com", approved: true },
];

function firstApproved(submissions) {
  const map = new Map();

  for (let i = 0; i < submissions.length; i++) {
    const { email, approved } = submissions[i];
    if (map.has(email) && approved) {
      return { email, index: i };
    }
    map.set(email, i);
  }
}

console.log(firstApproved(submissions));
*/

// ==================================================================

// const arr = [4, 7, 1, 9, 3];
// const target = 10;

// function twoSum(arr, target) {
//   const map = new Map();

//   for (let i = 0; i < arr.length; i++) {
//     const remainder = target - arr[i];

//     if (map.has(remainder)) {
//       return [map.get(remainder), i];
//     }
//     map.set(arr[i], i);
//   }
//   return [];
// }

// console.log(twoSum(arr, target));
