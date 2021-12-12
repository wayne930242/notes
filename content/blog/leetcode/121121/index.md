---
title: Leetcode 練習：2021-12-11 
date: "2021-12-11"
category: Codeing
tags:
 - js
 - leetcode
---

## Nth Magical Number

[題號：878](https://leetcode.com/problems/nth-magical-number/)

```js
const modulo = 1e9 + 7

var nthMagicalNumber = function(n, a, b) {
  const getGcd = (p, q) => {
    if (!q) return p
    return getGcd(q, p % q)
  }
  const gcd = getGcd(a, b) //最大公因數
  const lcm = a * b / gcd //最小公倍數
  const m = Math.min(a, b)
  const M = Math.max(a, b) //m <= M <= lcm 
  
  if (M % m === 0) return n * m % modulo // m 整除 M
  
  // 接下來就是要判斷 n 在哪個位置上。
  // 一個觀察：在一個 lcm 中，M 和 m 出現的頻率是固定的。

  const mMinLcm = (M + m) / gcd - 2
  // 在 lcm 裡面，總共的 m 和 M 的項數
  const lcmMod = n % (mMinLcm + 1)
  // n 在 lcm 中的項數
  const lcm_in_n = Math.floor(n / (mMinLcm + 1))
  // lcm 出現的次數

  if (lcmMod === 0){ // n 在 lcm 上
    return lcm * lcm_in_n % modulo
  }

  // 下面用迴圈來排列 m 和 M 的位置。
  // 可能有數學更好的寫法。但 O(A+B) 計算目前看起來可以接受。 
  let result = 0
  let mi = 0
  let Mi = 0
  while(mi + Mi < lcmMod){
    if((mi + 1) * m < (Mi + 1) * M){
      result = (mi + 1) * m
      mi++
    } else {
      result = (Mi + 1) * M
      Mi++
    }
  }
  
  return (result + lcm_in_n * lcm) % modulo
}
```