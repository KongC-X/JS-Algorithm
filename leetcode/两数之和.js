/**
 * @description 几乎所有的求和问题，都可以转化为求差问题
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    // 用一个对象模拟 map, 以 nums[i]为 key , 索引 i 为值
    const diffs = {};
    // 缓存数组长度
    const len = nums.length;
    // 遍历数组
    for(let i = 0; i < len; i++) {
        // 判断当前值对应的 target 差值是否存在（是否已遍历过）
        if(diffs[target - nums[i]] !== undefined) {
            // 若有对应差值，那么就是我们要的答案
            return [diffs[target - nums[i]], i]
        }
        // 若没有对应差值，则记录当前值
        diffs[num[i]] = i;
    }
}

// 我们可以在遍历数组的过程中，增加一个 Map 来记录已经遍历过的数字及其对应的索引值。
// 然后每遍历到一个新数字的时候，都回到 Map 里去查询 targetNum 与该数的差值是否已经在前面的数字中出现过了。
// 用 Map 实现
const twoSumMap = function(nums, target) {
    const map = new Map();
    const len = nums.length;
    for(let i = 0; i < len; i++) {
        if(map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i];
        }
        map.set(nums[i], i);
    }
}

// 来看看 chatGPT 是怎么优化上面我们写的代码的
const twoSumMapGPT = function(nums, target) {
    // 创建一个 Map 对象来存储数组元素及其索引
    const map = new Map();
    // 使用 for-of 循环代替 for 循环。这样可以避免手动维护计数器和数组项访问，从而减少代码复杂度和错误率。
    for (const [i, num] of nums.entries()) {
      // 计算当前元素与目标值的差值
      const complement = target - num;
      // 如果差值已经存在于 Map 中，则返回它们的索引
      if (map.has(complement)) {
        return [map.get(complement), i];
      }
      // 将当前元素及其索引存入 Map 中
      map.set(num, i);
    }
  };
  