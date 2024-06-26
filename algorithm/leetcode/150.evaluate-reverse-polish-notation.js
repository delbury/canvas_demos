/**
 * 根据 逆波兰表示法，求表达式的值。有效的算符包括+、-、*、/。
 * 每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 注意两个整数之间的除法只保留整数部分。
 * 可以保证给定的逆波兰表达式总是有效的。
 * 换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 *
 * 示例1：
 * 输入：tokens = ["2","1","+","3","*"]
 * 输出：9
 * 解释：该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9
 *
 * 示例2：
 * 输入：tokens = ["4","13","5","/","+"]
 * 输出：6
 * 解释：该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6
 *
 * 示例3：
 * 输入：tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
 * 输出：22
 * 解释：该算式转化为常见的中缀算术表达式为：
 * ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 *
 * 提示：
 * 1 <= tokens.length <= 104
 * tokens[i] 是一个算符（"+"、"-"、"*" 或 "/"），或是在范围 [-200, 200] 内的一个整数
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  // 栈
  const reg = /^[+*\/\-]$/;
  const stack = [];
  for (const t of tokens) {
    if (reg.test(t)) {
      const v2 = +stack.pop();
      const v1 = +stack.pop();
      let val;
      switch (t) {
        case '+':
          val = v1 + v2;
          break;
        case '-':
          val = v1 - v2;
          break;
        case '*':
          val = v1 * v2;
          break;
        case '/':
          val = Math.trunc(v1 / v2);
          break;
      }
      stack.push(val);
    } else {
      stack.push(t);
    }
  }
  return stack[0];
};

const { log, logAssert, logAssertDisorder } = require('../tools/LogTools.js');
logAssert(evalRPN, ['2', '1', '+', '3', '*'], 9);
logAssert(evalRPN, ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], 22);
