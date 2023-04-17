const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
  let curr = l;
  let prev = null;
  let res;

  if (curr.value === k && prev === null) {
    curr.value = curr.next.value;
    curr.next = curr.next.next;
  }

  while (curr.next !== null) {
    prev = curr;
    curr = curr.next;
    
    if (curr.value === k && curr.next !== null)  {
      curr.value = curr.next.value;
      curr.next = curr.next.next;
      return res = removeKFromList(l, k)
    }
  }

  if (curr.value === k && curr.next === null) {
    prev.next = null;
  } 
  return l;
}

module.exports = {
  removeKFromList
};
