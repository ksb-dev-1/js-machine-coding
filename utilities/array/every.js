Array.prototype.myEvery = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myEvery called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    // every() skips empty slots (holes) in sparse arrays
    if (!(i in this)) continue;

    if (!callbackFn.call(thisArg, this[i], i, this)) {
      return false;
    }
  }

  // No element failed the test.
  // Note: an empty array (or all-holes array) returns true — vacuously.
  return true;
};
