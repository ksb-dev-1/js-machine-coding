// Array.includes(searchElement, fromIndex)

Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
  if (this == null) {
    throw new TypeError(
      "Array.prototype.myIncludes called on null or undefined",
    );
  }

  const length = Math.min(
    Math.max(Math.floor(Number(this.length)) || 0, 0),
    Number.MAX_SAFE_INTEGER,
  );

  if (length === 0) return false;

  let startIndex = Math.trunc(Number(fromIndex)) || 0;

  if (startIndex < 0) {
    startIndex = Math.max(length + startIndex, 0);
  }

  for (let i = startIndex; i < length; i++) {
    if (
      this[i] === searchElement ||
      (Number.isNaN(this[i]) && Number.isNaN(searchElement))
    ) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3, 3.5));
