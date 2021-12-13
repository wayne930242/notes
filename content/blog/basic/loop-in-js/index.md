---
title: JS 的迴圈優化筆記
date: "2021-12-13"
category: Codeing
tags:
 - js
---

關於如何微優化迴圈（在不優先考慮可讀性的條件下，也就是說，通常不會在前端工作環境中需要考慮）：

1. 在陣列較大的時候，迴圈的執行速度：負向 `while` > 正向 `while` = `for` >> `for of` > `forEach`。
2. 在陣列較小的時候，`forEach` 是最快的。
3. 在 `for` 迴圈中，使用 `var` 來宣告 index 値要比用 `let` 更好。在其他情況下，`const` 要比 `let` 好，再來要比 `var` 好。
4. 盡量減少在 `for` 條件上進行的屬性查閱和新變數宣告。