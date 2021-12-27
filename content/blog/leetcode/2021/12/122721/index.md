---
title: Leetcode 練習：2021-12-27
date: "2021-12-27"
category: Codeing
tags:
 - js
 - leetcode
---

## Pascal's Triangle
[題號：118](https://leetcode.com/problems/pascals-triangle/)

```js
var generate = function(numRows) {
  if (numRows === 0) return []
  if (numRows === 1) return [[1]]
  const arr = [[1]]
  for (var i = 1; i < numRows; i++) {
    arr[i] = new Array(i+1).fill(1)
    // 也可以用迭代建立這個陣列，應該比較省記憶體。
    for (var j = 1; j < arr.length - 1; j++) {
      arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
 }
  return arr
}
```

## Pascal's Triangle II
[題號：119](https://leetcode.com/problems/pascals-triangle-ii/)

令 $r = rowIndex$，第 $i$ 項的係數是 $C^{r}_i = C^{r}_{r-i} =  \frac{r - i + 1}{i} C^{r}_{i-1}$。

```js
var getRow = function(rowIndex) {
  if(rowIndex === 0) return [1]
  const arr = []
  arr[0] = arr[rowIndex] = 1
  let l = 1
  const mid = Math.ceil(rowIndex / 2)
  while (l <= mid) {
    arr[l] = arr[rowIndex - l] = arr[l-1] * (rowIndex - l + 1) / l
    l++
  }
  return arr
}
```

## Number Complement
[題號：476](https://leetcode.com/problems/number-complement/)

令 $n = num$，$num$ 的最大位數為 $b$，欲求結果為 $a$，有 $n + a = 2^b - 1$ 。

```js
var findComplement = function(num) {
  const bit = Math.floor(Math.log2(num)) + 1
  return 2 ** (bit) - 1 - num
}
```

bitwise

```js
var findComplement = function(num) {
  return ~num & ((1 << num.toString(2).length) - 1)
}
```