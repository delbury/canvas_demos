/**
 * 给定一个链表，如果它是有环链表，实现一个算法返回环路的开头节点。若环不存在，请返回 null。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。
 * 注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 *
 * 示例 1：
 * 3 -> 2 -> 0 -> 4
 *       ↖       ↙
 *         <----
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：tail connects to node index 1
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 * 示例 2：
 * 1 -> 2
 *  ↖ ↙
 *
 * 输入：head = [1,2], pos = 0
 * 输出：tail connects to node index 0
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 * 示例 3：
 * 1
 *
 * 输入：head = [1], pos = -1
 * 输出：no cycle
 * 解释：链表中没有环。
 *
 * 进阶：
 * 你是否可以不用额外空间解决此题？
 */

/**
 * 快慢指针
 *               b
 *            ------>
 *     a    ↗        ↘
 * -------->         ↙
 *          ↖      ↙
 *            -----
 *               c
 */
const detectCycle = function (head) {
  if (!head || !head.next) return null;
  let pslow = head;
  let pfast = head;
  do {
    pslow = pslow.next;
    pfast = pfast.next?.next;
    if (!pfast) return null;
  } while (pslow !== pfast);
  let p = head;
  while (p !== pslow) {
    p = p.next;
    pslow = pslow.next;
  }
  return p;
};

const { logAssert, createCircleLinkedListByArray, logLinkedListByArray } = require('../tools/LogTools.js');
const list = createCircleLinkedListByArray([3, 2, 0, -4], 1);
logLinkedListByArray(list);

// console.log(detectCycle(list));
