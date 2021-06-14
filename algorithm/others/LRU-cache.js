/**
 * 设计LRU缓存结构，该结构在构造时确定大小，假设大小为K，并有如下两个功能
 * set(key, value)：将记录(key, value)插入该结构
 * get(key)：返回key对应的value值
 * [要求]
 * set和get方法的时间复杂度为O(1)
 * 某个key的set或get操作一旦发生，认为这个key的记录成了最常使用的。
 * 当缓存的大小超过K时，移除最不经常使用的记录，即set或get最久远的。
 * 若opt=1，接下来两个整数x, y，表示set(x, y)
 * 若opt=2，接下来一个整数x，表示get(x)，若x未出现过或已被移除，则返回-1
 * 对于每个操作2，输出一个答案
 * 
 * 示例1
 * 输入：
 * [[1,1,1],[1,2,2],[1,3,2],[2,1],[1,4,4],[2,2]],3
 * 复制
 * 返回值：
 * [1,-1]
 * 复制
 * 说明：
 * 第一次操作后：最常使用的记录为("1", 1)
 * 第二次操作后：最常使用的记录为("2", 2)，("1", 1)变为最不常用的
 * 第三次操作后：最常使用的记录为("3", 2)，("1", 1)还是最不常用的
 * 第四次操作后：最常用的记录为("1", 1)，("2", 2)变为最不常用的
 * 第五次操作后：大小超过了3，所以移除此时最不常使用的记录("2", 2)，加入记录("4", 4)，
 * 并且为最常使用的记录，然后("3", 2)变为最不常使用的记录
 */

/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
function LRU(operators, k) {
  // write code here
  const cache = new Map();
  const res = [];
  for(const opt of operators) {
    switch(opt[0]) {
      // set
      case 1:
        if(cache.has(opt[1])) {
          cache.delete(opt[1]);
          cache.set(opt[1], opt[2]);
        } else if(cache.size < k) {
          cache.set(opt[1], opt[2]);
        } else {
          cache.delete(cache.keys().next().value);
          cache.set(opt[1], opt[2]);
        }
        break;
      
      // get
      case 2:
        if(cache.has(opt[1])) {
          const t = cache.get(opt[1]);
          res.push(t);
          cache.delete(opt[1]);
          cache.set(opt[1], t);
        } else {
          res.push(-1);
        }
        break;

      default: break;
    }
  }
  return res;
}
module.exports = {
  LRU : LRU
};