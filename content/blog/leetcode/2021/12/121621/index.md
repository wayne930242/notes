---
title: Leetcode 練習：2021-12-16 
date: "2021-12-16"
category: Codeing
tags:
 - js
 - leetcode
---

## Plus One
[題號：66](https://leetcode.com/problems/plus-one/description/)

```js
var plusOne = function(digits) {
  return String(BigInt(digits.join(''))+1n).split('')
}
```

## 
[題號：]()

```js
var addBinary = function(a, b) {
  let c = 0
  let M = Math.max(a.length, b.length)
  let i = 0
  let result = ''
  while (c || i < M) {
    const ai = a[a.length - 1 - i]
      ? Number(a[a.length - 1 - i])
      : 0
    const bi = b[b.length - 1 - i]
      ? Number(b[b.length - 1 - i])
      : 0
    result = (ai + bi + c) % 2 + result
    c = Math.floor((ai + bi + c) / 2)
    i++
  }
  return result
}
```

## Minimum Height Trees
[題號：310](https://leetcode.com/problems/minimum-height-trees/)

```js
var findMinHeightTrees = function (n, edges) {
  if (n === 1) return [0]
  if (n === 2) return edges[0]

  //建立一個用來記憶每個數字出現的次數的物件，map。
  //value 代表與 index 相連的點。
  //之後就不管本來的 edges，只處理 map 就好。
  const map = []
  for (var i = 0; i < n - 1; i++) {
    if (typeof map[edges[i][0]] === 'undefined') map[edges[i][0]] = []
    if (typeof map[edges[i][1]] === 'undefined') map[edges[i][1]] = []
    map[[edges[i][0]]].push(edges[i][1])
    map[[edges[i][1]]].push(edges[i][0])
  }

  let end = []
  for (var i = 0; i < map.length; i++){
    if(map[i].length === 1) end.push(i)
  }
  //建立邊緣點陣列。

  while (n > 2) {
    const newEnds = []
    for (var i = 0; i < end.length; i++){
      const mapLast = map[end[i]].pop() //從最後開始移除來減少計算複雜度。
      map[mapLast].splice(map[mapLast].indexOf(end[i]), 1) //把 map 裡面的 value 更新。
      if (map[mapLast].length === 1) {
        newEnds.push(mapLast)
      }
    }
    n -= end.length
    end = newEnds
  }

  return end
}
```
