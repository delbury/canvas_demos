/**
 * log 调试等工具
 */

/**
 * 打印堆数组的树形结构图
 * @param {Array} heap 
 * 
 *          123123
 *         ╱      ╲
 *       12123   43123
 */
const logHeapTree = function (heap) {
  if (!heap.length) return null;

  let deep = Math.floor(Math.log2(heap.length) + 1); // 树的深度
  const eachItemWith = 4;
  const lastRowGap = 2;
  const totalWith = 2 ** (deep - 1) * (eachItemWith + lastRowGap) - lastRowGap;
  const resRows = [];
  const fillSymbol = ' ';
  // const leftSymbol = '╱';
  // const rightSymbol = '╲';

  for (let i = deep; i > 0; i--) {
    let stringArr = [];
    let dividerArr = [];
    const max = Math.min(2 ** i - 1, heap.length);
    for (let j = 2 ** (i - 1) - 1; j < max; j++) {
      let str = heap[j].toString();
      const pad = eachItemWith - str.length;
      const pStart = Math.ceil(pad / 2);

      str = str.padStart(pStart + str.length, fillSymbol);
      str = str.padEnd(pad - pStart + str.length, fillSymbol);

      stringArr.push(str); // 不同深度每项宽度相同

      if (j !== 0) {

        dividerArr.push('-'.repeat(str.length)); // 不同深度每项宽度相同
      }
    }

    // 每层的字符间隔不同
    const gapSymbol = fillSymbol;
    const k = 2 ** (i - 1);
    const gap = deep === i ? lastRowGap : Math.round((totalWith - k * eachItemWith) / k);
    const preGap = deep === i ? '' : gapSymbol.repeat(Math.ceil(gap / 2));

    resRows.unshift(preGap + stringArr.join(gapSymbol.repeat(gap)));
    if (dividerArr.length) {
      resRows.unshift(preGap + dividerArr.reduce((string, item, index) => {
        if (index === 0) {
          return string + item;
        } else if (index % 2 === 0) {
          return string + ' '.repeat(gap) + item;
        } else {
          return string + '-'.repeat(gap) + item;
        }
      }, ''));
    }
  }
  // return resRows.join('\n');
  resRows.unshift('*'.padStart(totalWith, '*'));
  resRows.push('*'.padStart(totalWith, '*'));
  console.log(resRows.join('\n'));
};

module.exports = {
  logHeapTree
};

// console.log(logHeapTree([1, 2, 3333, 4, 5555, 6, 7, 8, 9999, 10, 11, 12, 13, 1444, 15, 1666, 17, 18, 19, 200, 211]))