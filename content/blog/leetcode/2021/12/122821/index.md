---
title: Leetcode 練習：2021-12-28
date: "2021-12-28"
category: Codeing
tags:
 - js
 - leetcode
---

## Best Time to Buy and Sell Stock
[題號：121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)

```js
var maxProfit = function(prices) {
  if (prices.length <= 1) return 0
  let result = 0
  const l = prices.length - 1
  let max = prices[l]
  for (var i = l - 1; i >= 0; i--) {
    if(prices[i] > max){
      max = prices[i]
    } else {
      result = result >= max - prices[i] ? result : max - prices[i]
    }
  }
  return result
}
```

## Valid Palindrome 
[題號：125](https://leetcode.com/problems/valid-palindrome/)

```js
var isPalindrome = function(s) {
  let l = 0
  let r = s.length - 1
  while(l < r) {
    if (s[l].match(/[0-9a-zA-Z]/)) {
      l++
      continue
    }
    if (s[r].match(/[0-9a-zA-Z]/)) {
      r--
      continue
    } 
    if (s[r].toUpperCase() !== s[l].toUpperCase()) return false
    l++
    r--
  } 
  return true
}
```

```js
var isPalindrome = function(s) {
  let l = 0
  let r = s.length - 1
  while(l < r) {
    if (
      (s.charCodeAt(l) < 48 || s.charCodeAt(l) > 57) &&
      (s.charCodeAt(l) < 97 || s.charCodeAt(l) > 122) &&
      (s.charCodeAt(l) < 65 || s.charCodeAt(l) > 90)
    )
    {
      l++
      continue
    }
    if (
      (s.charCodeAt(r) < 48 || s.charCodeAt(r) > 57) &&
      (s.charCodeAt(r) < 97 || s.charCodeAt(r) > 122) && 
      (s.charCodeAt(r) < 65 || s.charCodeAt(r) > 90)
    ) {
      r--
      continue
    } 
    if (s[r].toUpperCase() !== s[l].toUpperCase()) return false
    l++
    r--
  } 
  return true
}
```

## Middle of the Linked List
[題號：876](https://leetcode.com/problems/middle-of-the-linked-list/)

```js
var middleNode = function(head) {
  let slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
```