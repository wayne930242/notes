---
title: Leetcode 練習：2021-12-25
date: "2021-12-25"
category: Codeing
tags:
 - js
 - leetcode
---

## Basic Calculator II

[題號：227](https://leetcode.com/problems/basic-calculator-ii/)

```js
var calculate = function(s) {
  s += '+'
  let wait = []
  let num = 0 
  let sign = '+'
  for (var i = 0; i < s.length; i++) {
    if (s[i] === ' ') continue
    if (s[i].match(/[0-9]/)) num = 10 * num + Number(s[i])
    else {
      if (sign === "+") {
        wait.push(num)
      } else if (sign === "-") {
        wait.push(-num)
      } else if (sign === "*") {
        wait.push(wait.pop() * num)
      } else {
        wait.push(Math.trunc(wait.pop() / num))
      }
      sign = s[i]
      num = 0
    }
  }
  return wait.reduce((a,b)=>a+b) 
}
```