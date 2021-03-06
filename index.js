const longestConsecutiveLength = (nums) => {
  let length = nums.length;
  if (length === 0) return 0;
  let map = {};
  let max = 0;
  let start = 0;
  let end = 0;
  let num = 0;
  for (let i = 0; i < length; i++) {
    num = nums[i];
    if (map[num]) continue;
    start = map[num - 1] ? map[num - 1].start : num;
    end = map[num + 1] ? map[num + 1].end : num;
    map[num] = { start: num, end: num };
    map[start].end = end;
    map[end].start = start;
    max = Math.max(end - start + 1, max);
  }
  return max;
};

let nums = [100, 4, 200, 1, 3, 2];
console.log("Input = [" + nums + "]\n");
console.log("-----------------Result--------------------");
console.log("Output = " + longestConsecutiveLength(nums));
console.log("-------------------------------------------");
