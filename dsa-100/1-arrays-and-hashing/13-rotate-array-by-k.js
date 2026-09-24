var rotate = function (nums, k) {
  k = k % nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

function reverse(nums, start, end) {
  while (start < end) {
    let temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// const nums = [1, 2, 3, 4, 5, 6, 7];
// const k = 3;

// const nums = [-1, -100, 3, 99];
// const k = 2;

const nums = [1, 2];
const k = 3;

console.log(rotate(nums, k));
