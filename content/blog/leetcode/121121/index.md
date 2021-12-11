---
title: Leetcode 練習：2021-12-11 
date: "2021-12-11"
category: Codeing
tags:
 - js
 - leetcode
---

## Nth Magical Number
* 題號：878
* [連結](https://leetcode.com/problems/nth-magical-number/)

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
  
  if (M % m === 0) return n * m % modulo
  
  const mMinLcm = (M + m) / gcd - 2
  const lcmMod = n % (mMinLcm + 1)
  const lcm_in_n = Math.floor(n / (mMinLcm + 1))
  if (lcmMod === 0){ // n 在 lcm 上
    return lcm * lcm_in_n % modulo
  }
  
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