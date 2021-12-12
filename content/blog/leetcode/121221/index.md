---
title: Leetcode 練習：2021-12-12 
date: "2021-12-10"
category: Codeing
tags:
 - js
 - leetcode
---

## Partition Equal Subset Sum

[連結](https://leetcode.com/problems/partition-equal-subset-sum/)

```js
var canPartition = function(nums) {
  const total = nums.reduce((sum, num) => sum + num, 0)

  if (total % 2 !== 0) return false
  if (nums.length === 1) return false

  const memo = new Set([total / 2])
  //只記錄其中一個陣列的加總來減少計算。set 的 has 方法是 O(1) 的計算。
  
  const testFunc = (i) => {
    if (memo.has(0) || i > nums.length - 1) return memo.has(0)
    
    let newMemo = []
    memo.forEach((key) => {
      if(key - nums[i] >= 0 || memo.has(-1)) return newMemo.push(key - nums[i])
      return memo.add(-1)
    })
    newMemo.forEach((value) => {
      if(!memo.has(value)) memo.add(value)
    })
    
    testFunc(i + 1)
    return memo.has(0)
  }
  
  return testFunc(0)
}
```