Array.prototype.myFind = function (callbackFn, thisArg) {
  if (this == null) {
    throw new TypeError("Array.prototype.myFind called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const length = this.length;

  for (let i = 0; i < length; i++) {
    // find() skips empty slots (holes) — the callback never runs on them
    if (!(i in this)) continue;

    if (callbackFn.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }

  return undefined;
};
