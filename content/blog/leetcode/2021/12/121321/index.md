---
title: Leetcode 練習：2021-12-13
date: "2021-12-13"
category: Codeing
tags:
 - js
 - leetcode
---

## Remove Duplicates from Sorted Array

[題號：26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)

```js
var removeDuplicates = function(nums) {
  const set = new Set(nums)
  nums.splice(0, nums.length, ...set)
  return nums.length
}
```

## Remove Element
[題號：27](https://leetcode.com/problems/remove-element/)

```js
var removeElement = function(nums, val) {
  return nums.splice(0, nums.length, 
    ...nums.filter((value) => value !== val)
  ).length
}
```

## Consecutive Characters
[題號：1446](https://leetcode.com/problems/consecutive-characters/)

```js
var maxPower = function(s) {
  let result = 0

  for (let i = 0, r = 1 ; i < s.length ; i++){
    if(s[i] === s[i+1]) {
      r++
    } else {
      result = Math.max(result, r) // 在這邊才回傳，增加效率。
      r = 1
    }
    current = s[i]
  }
  
  return result
}
```