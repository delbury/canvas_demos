/**
 * 给出 N 名运动员的成绩，找出他们的相对名次并授予前三名对应的奖牌。
 * 前三名运动员将会被分别授予 “金牌”，“银牌” 和“ 铜牌”（"Gold Medal", "Silver Medal", "Bronze Medal"）。
 * (注：分数越高的选手，排名越靠前。)
 * 
 * 示例 1:
 * 输入: [5, 4, 3, 2, 1]
 * 输出: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
 * 解释: 前三名运动员的成绩为前三高的，因此将会分别被授予 “金牌”，“银牌”和“铜牌” ("Gold Medal", "Silver Medal" and "Bronze Medal").
 * 余下的两名运动员，我们只需要通过他们的成绩计算将其相对名次即可。
 * 
 * 提示:
 * N 是一个正整数并且不会超过 10000。
 * 所有运动员的成绩都不相同。
 * 
 * @param {number[]} score
 * @return {string[]}
 */

// 1. hash
var findRelativeRanks = function(score) {
  score = score.map((s, i) => [s, i]);
  score.sort((a, b) => b[0] - a[0]);
  for(let i = 0; i < score.length; i++) {
    const ind = score[i][1];
    if(i === 0) score[ind][0] = 'Gold Medal';
    else if(i === 1) score[ind][0] = 'Silver Medal';
    else if(i === 2) score[ind][0] = 'Bronze Medal';
    else score[ind][0] = i + 1 + ''; 
  }
  return score.map(s => s[0]);
};


const { logAssert } = require('./tools/LogTools.js');
logAssert(findRelativeRanks, [5, 4, 3, 2, 1], ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]);
logAssert(findRelativeRanks, [10, 3, 8, 9, 4], ["Gold Medal","5","Bronze Medal","Silver Medal","4"]);