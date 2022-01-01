---
title: Leetcode 練習：2022-01-01 
date: "2022-01-01"
category: Codeing
tags:
 - js
 - leetcode
---

## Burst Balloons
[題號：312](https://leetcode.com/problems/burst-balloons/)

首先，在 `nums` 的最前面和最後面都加上 `1`，並令長度為 $l$（原先的 `nums` 的長度只有 $l - 2$）。

```js
nums = [1, ...nums, 1]
const l = nums.length
```

為了方便討論，我們可以令對應到 `nums` 的矩陣 $n$ 寫成：

> $n = \begin{bmatrix} &n_0(= 1) &n_1 &... &n_{l-2} &n_{l-1} (= 1) \end{bmatrix}.$

為了方便討論，我們還用 $n^i_j$ 來表示 $\{ n_i,n_{i+1}, ... ,n_{j}\}$，$i\leq j$。

---

接著，令 `dp` 是一個 $l \times l$ 矩陣。要初始化這個矩陣，並且令所有的 $D_{ij} = 0$（方便後續計算），只需要：

```js
const dp = [...Array(l)].map(() => Array(l).fill(0))
```

就結果來說我們希望 `dp[i][j]`（$D_{ij}$）記錄了在 $n^i_j$ 中，明智地爆破氣球所能獲得的最多金幣。

如果這樣，$D_{1,l-2}$ 即為所求。

```js
return dp[1][l-2]
```

我們期待 $D$ 是一個上半矩陣（注意：我們不會計算出所有的量，這個矩陣可以當成我們的理論目標，但不會是我們最終計算出來的 `dp`）：

> $D = \begin{bmatrix}&D_{0,0}(=n_0) &D_{0,1} &... &D_{0,l-1} \\&0 &D_{1,1}(=n_1) &... &D_{1,l-1} \\&0 &0 &... &D_{2,l-1} \\&... &... &... &... \\&0 &0 &... &D_{l-1,l-1}(=n_{l-1})\end{bmatrix}.$

---

接下來就是要計算 $D^i_j$。

因為 $D_ij$ 是唯一的，我們可以假設一個函數 $M: \{n^i_j\} \rightarrow \N$ 使得

> $M(n^i_j) = D_{ij}$。

考慮任意的 $i,j$，對於所有介於 $i$ 和 $j$ 之間的 $k$，$n_k$ 會把 $n^i_j$ 分成兩段：

> $\{ \textcolor{green}{n_i, n_{i+1}, ..., n_{k-1}}, n_k, \textcolor{red}{n_{k+1}, ..., n_{j-1}, n_{j}} \}$。

前半部的爆破所獲錢幣最大值是 $M(n^i_{k-1})$，後半部的最大值是 $M(n^{k+1}_j)$，最後加上爆破 $k$ 所獲得的錢幣，因為前後都爆破了，左邊現在是 $n_{i-1}$，右邊是 $n_{j+1}$。

寫成式子即為：

> $M(n^i_j) = \max_{i\leq k \leq j}(\{ M(n^i_{k-1}) + M(n^{k+1}_j) + n_{i-1} \times n_k \times n_{j+1}\})$。

程式碼為：

```js
for (var k = i; k <= j; k++) {
  dp[i][j] = Math.max(
    dp[i][j],
    dp[i][k-1] + dp[k+1][j] +
      nums[i-1] * nums[k] * nums[j+1]
  )
}
```

---

對每個小於 `l - 1` （記得 `num` 實際上的長度只有 `l - 2`）的長度 `len` 以及 `i` 做迭代，給定 `len` 和 `i`，我們會有唯一的 $j$，`j = i + len - 1`。

---

我們最後的程式碼因此是：

```js
var maxCoins = function(nums) {
  if (nums.length === 0) return 0
  nums = [1, ...nums, 1]
  const l = nums.length
  
  const dp = [...Array(l)].map(() => Array(l).fill(0))
   
  for (var len = 1; len < l - 1; len++) {
    for (var i = 1; i + len - 1 < l - 1; i++) {
      const j = i + len - 1
      for (var k = i; k <= j; k++) {
        dp[i][j] = Math.max(
          dp[i][j],
          dp[i][k-1] + dp[k+1][j] + nums[i-1]*nums[k]*nums[j+1]
        )
      }
    }
  }
  
  return dp[1][l-2]
}
```