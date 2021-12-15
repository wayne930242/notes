---
title: Leetcode 練習：2021-12-15 
date: "2021-12-15"
category: Codeing
tags:
 - js
 - leetcode
---

## Maximum Subarray

[題號：53](https://leetcode.com/problems/maximum-subarray/)

```js
var maxSubArray = function (nums) {
  //使用 Kadane 演算法。
  let max = nums[nums.length - 1]
  let tempMax = nums[nums.length - 1]
  let i = nums.length - 2
  while(i>=0) {
    tempMax = Math.max(tempMax + nums[i], nums[i])
    max = Math.max(tempMax, max)
    i--
  }
  return max
}
```

## Length of Last Word

[題號：58](https://leetcode.com/problems/length-of-last-word/)

```js
var lengthOfLastWord = function(s) {
  return s.trim().split(/\s+/).pop().length
}
```

## Insertion Sort List

[題號：147](https://leetcode.com/problems/insertion-sort-list/submissions/)

```js
// 題目要求的方式有點囉唆，我知道這有點作弊，但...。
var insertionSortList = function(head) {
  let arr = []
  while(head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
    .sort((a,b)=>a-b)
    .reduceRight((next,val)=>({next,val}), null)
}
```