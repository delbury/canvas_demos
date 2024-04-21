/**
 * 幂集。编写一种方法，返回某集合的所有子集。
 * 集合中不包含重复的元素。
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *  输入： nums = [1,2,3]
 *  输出：
 * [
 *   [3],
 *   [1],
 *   [2],
 *   [1,2,3],
 *   [1,3],
 *   [2,3],
 *   [1,2],
 *   []
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 位运算
const subsets = function (nums) {
  const res = [];
  const len = 2 ** nums.length - 1;
  for (let i = 0; i <= len; i++) {
    const item = [];
    i.toString(2)
      .padStart(nums.length, '0')
      .split('')
      .forEach((n, ind) => {
        if (n === '1') {
          item.push(nums[ind]);
        }
      });
    res.push(item);
  }
  return res;
};

const { log, logAssert, logAssertDisorder } = require('../tools/LogTools.js');
logAssertDisorder(subsets, [1, 2, 3], [[3], [1], [2], [1, 2, 3], [1, 3], [2, 3], [1, 2], []]);
