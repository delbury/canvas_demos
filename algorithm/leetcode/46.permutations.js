/**
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。
 * 你可以 按任意顺序 返回答案。
 *
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 *
 * 示例 2：
 * 输入：nums = [0,1]
 * 输出：[[0,1],[1,0]]
 *
 * 示例 3：
 * 输入：nums = [1]
 * 输出：[[1]]
 *
 * 提示：
 * 1 <= nums.length <= 6
 * -10 <= nums[i] <= 10
 * nums 中的所有整数 互不相同
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  const res = [];
  const fn = (set, index) => {
    if (set.has(index)) return;
    set.add(index);
    if (set.size === nums.length) {
      res.push([...set].map((i) => nums[i]));
      return;
    }
    nums.forEach((_, i) => fn(new Set(set), i));
  };
  nums.forEach((_, i) => fn(new Set(), i));
  return res;
};

const { log, logAssert, logAssertDisorder } = require('../tools/LogTools.js');
logAssert(
  permute,
  [1, 2, 3],
  [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ]
);
