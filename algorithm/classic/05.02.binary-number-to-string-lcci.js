/**
 * 二进制数转字符串。
 * 给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。
 * 如果该数字无法精确地用32位以内的二进制表示，则打印“ERROR”。
 *
 * 示例1:
 *  输入：0.625
 *  输出："0.101"
 *
 * 示例2:
 *  输入：0.1
 *  输出："ERROR"
 *  提示：0.1无法被二进制准确表示
 *
 * 提示：
 * 32位包括输出中的 "0." 这两位。
 * 题目保证输入用例的小数位数最多只有 6 位
 */

const printBin = function (num) {
  let res = '0.';
  let sum = 0;
  let count = 0;
  while (count < 32) {
    count++;
    const temp = 2 ** -count;
    if (sum + temp > num) {
      res += '0';
    } else if (sum + temp < num) {
      res += 1;
      sum += temp;
    } else {
      res += 1;
      return res;
    }
  }
  return 'ERROR';
};

const { log, logAssert, logAssertDisorder } = require('../tools/LogTools.js');
logAssert(printBin, 0.625, '0.101');

logAssert(printBin, 0.1, 'ERROR');
