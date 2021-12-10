---
title: Leetcode 練習：2021-12-10 
date: "2021-12-10"
category: Codeing
tags:
 - js
 - leetcode
---

## Valid Parentheses
* 題號：20
* [連結](https://leetcode.com/problems/valid-parentheses/)

```js
// 從第一個開始找
const leftBracket = {
  "{": 1,
  "[": 2,
  "(": 3,
}

const rightBracket = {
  "}": 1,
  "]": 2,
  ")": 3,
}

var isValid = function(s) {
  let waiting = []
  
  for (let i = 0 ; i < s.length ; i++){
    if (leftBracket[s[i]]){
      waiting.push(leftBracket[s[i]])
      continue
    }
    
    if (rightBracket[s[i]] !== waiting[waiting.length -1]) return false
    waiting.pop()
  }
  
  return waiting.length === 0
}
```

```js
//  使用正則表達式找最小成對括號
var isValid = function(s) {
  let length = s.length 
  while (length > 0 && s.length) {
    s = s.replace(/\[\]|\{\}|\(\)/g, '')
    length -= 2
  }
  return s === ''
}
```

## Merge Two Sorted Lists
* 題號：21
* [連結](https://leetcode.com/problems/merge-two-sorted-lists/)

```js
var mergeTwoLists = function(list1, list2) {
  let result = []
  
  let head1 = list1
  let head2 = list2
  
  while (head1 || head2){
    if (head1 && head2) {
      if (head1.val <= head2.val){
        result.push(head1.val)
        head1 = head1.next
      } else {
        result.push(head2.val)
        head2 = head2.next
      }
      continue
    }
    if (head1) {
      result.push(head1.val)
      head1 = head1.next
    } else {
      result.push(head2.val)
      head2 = head2.next
    }
  }
  
  return result.reduceRight((next, val)=>({next, val}), null)
}
```

## Domino and Tromino Tiling
* 題號：790
* [連結](https://leetcode.com/problems/domino-and-tromino-tiling/)

```js
/*
觀察：令遞迴函數是 f：
1. n 區塊的最右邊，可以是 [2, 0] （與 [0, 2]），
或 1 個 [1, 1] 或一個 [2, 1] 或一個 [1, 2]。
2. 如果是 [2, 0]，左邊有 f(n - 2) 種排列。
3. 如果是 [1, 1]，左邊有 f(n - 1) 種排列。
4. 如果是 [1, 2]，下一個可以是 [2, 1] 或 [2, 0]：
  a. 如果是 [2, 1]，那有 f(n - 3) 種排列。
  b. 如果是 [2, 0]，它和 f(n - 1) 的 4 相同，叫它 X。
5a. 5b. 如果是 [2, 1]，和 4 一樣。

(*) f(n - 1) - f(n - 3) + f(n - 2) = 2 X

加總：f(n) = 2 f(n - 1) + 3 f(n - 3)
*/

let cheat = new Map([
  [1, 1],
  [2, 2],
  [3, 5],
])

const modulo = 1e9+7

var numTilings = function(n) {	
  
  const counter = (m) => {
    if (!cheat.get(m)) {
      cheat.set(m, 2 * counter(m - 1) + counter(m - 3))
    }
    return cheat.get(m) % modulo
  }
  return counter(n)
}
```