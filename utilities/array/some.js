Array.prototype.mySome = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.mySome called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    // some() skips empty slots (holes) in sparse arrays
    if (!(i in this)) continue;

    if (callbackFn.call(thisArg, this[i], i, this)) {
      return true;
    }
  }
  return false;
};
