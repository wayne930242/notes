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

## Merge Two Sorted Lists
* 題號：21
* [連結](https://leetcode.com/problems/merge-two-sorted-lists/)

```js
var mergeTwoLists = function(list1, list2) {
  let result = []
  let waiting = null
  
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

```