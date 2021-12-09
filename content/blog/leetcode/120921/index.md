---
title: Leetcode 練習：2021-12-09 
date: "2021-12-09"
category: Codeing
tags:
 - js
 - leetcode
---

# Roman to Integer
* 題號：13
* [連結](https://leetcode.com/problems/roman-to-integer/)

```js
const mapping = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

var romanToInt = function(s) {
  let sum = 0
  let lastNum = 0
  for (let i = 0; i < s.length; i++) {
    const num = mapping[s[i]]
    sum += lastNum >= num ?
      num :
      num - 2 * lastNum
    lastNum = num
  }
  return sum
};
```

# Longest Common Prefix
* 題號：14
* [連結](https://leetcode.com/problems/longest-common-prefix/)

```js
var longestCommonPrefix = function(strs) {
  if (strs[0].length === 0) return ''
  const [first, ...rest] = strs
  const restArr = rest.map(str => str.split(''))
  let last = first[0]
  let avail = ''
  for (let i = 0; i < strs[0].length; i++) {
    for (const arr of restArr) {
      if (arr[0] !== last) return avail
      arr.shift()
    }
    if (i === strs[0].length) return first
    last = first[i + 1]
    avail += first[i]
  }
  return first
};
```

# Jump Game III
* 題號：1306
* [連結](https://leetcode.com/problems/jump-game-iii/)

```js
var canReach = function(arr, start) {
  let been = new Set() // Set 的 has 方法是 O(1) 的計算
  let result = false
  const jump = (i) => {
    if (arr[i] === 0) return result = true
    if (result === true) return
    if (been.has(i)) return
    been.add(i)

    let tryJump = i + arr[i]
    if (tryJump < arr.length &&
      !been.has(tryJump)) {
      jump(tryJump);
    }

    tryJump = i - arr[i]
    if (tryJump >= 0 &&
      !been.has(tryJump)) {
      jump(tryJump)
    }
  }

  jump(start)
  return result
}
```
