---
title: Leetcode 練習：2022-01-02
date: "2022-01-02"
category: Codeing
tags:
 - js
 - leetcode
---

## Pairs of Songs With Total Durations Divisible by 60
[題號：1010](https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/)

```js
var numPairsDivisibleBy60 = function(time) {
  const record = []
  // index 放 [t%60]，值放數量
  let result = 0
  let mod = 0
  
  for (const t of time) {
    mod = t % 60
    result += record[(60 - mod) % 60]
      ? record[(60 - mod) % 60]
      : 0 

    // 如果有一個 [t%60] 加到 record，會額外增加相符數字個配對，
    // 也就是增加 record[60 - t%60] 個配對，
    // 但考慮 t 為 0 的情況，我們應該寫成增加 record[(60 - t%60)%60] 個配對。
    
    record[mod] = record[mod]
      ? record[mod] + 1
      : 1
  }
  
  return result
}
```