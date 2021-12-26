---
title: Leetcode 練習：2021-12-26
date: "2021-12-26"
category: Codeing
tags:
 - js
 - leetcode
---

## K Closest Points to Origin
[題號：973](https://leetcode.com/problems/k-closest-points-to-origin/)

```js
var kClosest = function(points, k) {
  points = points.sort((a, b) => a[0]**2 - b[0]**2 + a[1]**2 - b[1]**2)
  points.length = k
  return points
}
```

```js
var kClosest = function(points, k) {
  let start = 0
  let end = points.length - 1
  
  while (true) {
    left = start + 1
    right = end
    const pivot = start
    
    while (left<=right) {
      if (sq(points[left]) > sq(points[pivot]) &&
          sq(points[right]) < sq(points[pivot]) ) {
        swap(left, right, points)
      }     
      if (sq(points[left]) <= sq(points[pivot])) {
        left++
      }
      if (sq(points[right]) >= sq(points[pivot])) {
        right--
      }
    }
    swap(right, pivot, points)
    if (right === k-1) {
      points.length = k
      return points
    }
    if (right < k-1) start = right + 1
    else end = right - 1
  }
}

const swap = (i,j,points) => {
  [points[i], points[j]] = [points[j], points[i]]
} 

const sq = (a) => a[0]**2 + a[1]**2
```