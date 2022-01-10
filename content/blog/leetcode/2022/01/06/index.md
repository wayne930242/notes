---
title: Leetcode 練習：2022-01-06 
date: "2022-01-06"
category: Codeing
tags:
 - js
 - leetcode
---

## Car Pooling
[題號：1094](https://leetcode.com/problems/car-pooling/)

```js
var carPooling = function(trips, capacity) {
  const arr = []
  for (const [numPassengers, from, to] of trips) {
    for (var i = from; i < to; i++) {
      if ((arr[i] || 0) + numPassengers > capacity) {
        return false
      }
      
      arr[i] = (arr[i] || 0) + numPassengers
    }
  }
  return true
}
```