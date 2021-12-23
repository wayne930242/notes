---
title: Leetcode 練習：2021-12-17 
date: "2021-12-17"
category: Codeing
tags:
 - js
 - leetcode
---

## Sqrt(x)
[題號：69](https://leetcode.com/problems/sqrtx/)

```js
var mySqrt = function (x) {
  if (x <= 1) return x
  let min = 1
  let max = x
  while (min <= max) {
    const current = Math.floor((max + min)/2)
    if (current**2 === x) return current
    if (current**2 > x) {
      max = current - 1
    } else {
      min = current + 1
    }
  }
  return min - 1
}
```

## Climbing Stairs
[題號：70](https://leetcode.com/problems/climbing-stairs/submissions/)

```js
var climbStairs = function (n) {
  const map = new Map([
    [1, 1],
    [2, 2],
    [3, 3],
  ])

  const step = (k) => {
    if (!map.has(k)) map.set(k, step(k - 1) + step(k - 2))
    return map.get(k)
  }
  return step(n)
}
