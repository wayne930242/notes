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

首先，在 `nums` 的最前面和最後面都加上 `1`，並令其長度為 $l$（原先的 `nums` 的長度只有 $l - 2$）。

```js
nums = [1, ...nums, 1]
const l = nums.length
```

為了方便討論，我們可以令對應到 `nums` 的矩陣 $\lang n_j \rang$ 為：

> $\lang n_{j} \rang = \begin{bmatrix} n_0(= 1) &n_1 &... &n_{l-2} &n_{l-1} (= 1) \end{bmatrix}.$

並且以 $n^i_j$ 來表示數列 $\lang n_i,n_{i+1}, ... ,n_{j} \rang$，$i\leq j$。

---

接著，令 `dp` 對應到一個 $l \times l$ 矩陣 $D$（事實上，這個 `dp` 在程式的意義上就是矩陣）。要初始化這個矩陣，並且令所有的 $D_{ij} = 0$（方便後續計算），只需要：

```js
const dp = [...Array(l)].map(() => Array(l).fill(0))
```

即：

```js
// 偽代碼
const dp = [
  [0,0, ..., 0],
  [0,0, ..., 0],
  ...
  [0,0, ..., 0]
]
```

就結果來說我們希望 `dp[i][j]`（$D_{ij}$）記錄了在考慮 $n^i_j$ 這個數列時，也就是考慮準備要先爆破第 $i$ 個到第 $j$ 個間的氣球時，明智地爆破這些氣球所能獲得的最多金幣。

如果這樣，$D_{1,l-2}$ 即為所求。

我們期待 $D$ 是一個上半矩陣，並且在邊緣的地方都為 0（注意：我們不會計算出所有的量，這個矩陣可以當成我們的理論目標，但**不會是**我們最終計算出來的 `dp`）：

> $D = \begin{bmatrix}D_{0,0}(=0) &D_{0,1}(=0) &... &D_{0,l-1}(=0) \\0 &D_{1,1}(=n_0n_1n_2) &... &D_{1,l-1}(=0) \\0 &0 &... &D_{2,l-1}(=0) \\... &... &... &... \\0 &0 &... &D_{l-1,l-1}(=0)\end{bmatrix}.$

---

接下來就是要計算 $D_{ij}$。

因為 $D_{ij}$ 是唯一的，我們可以假設一個函數 $M: \{ 0, ...,l-1 \} \times \{ 0, ...,l-1 \} \rightarrow \N$ 使得

> $M(i,j) = D_{ij}$。

考慮任意的 $i<k<j$。對於所有介於 $i$ 和 $j$ 之間的 $k$，當做是我們最後才要來爆破 $k$，$n_k$ 會把 $n^i_j$ 分成兩段：

> $\lang \textcolor{green}{n_i, n_{i+1}, ..., n_{k-1}}, n_k, \textcolor{red}{n_{k+1}, ..., n_{j-1}, n_{j}} \rang$。

前半部的爆破所獲錢幣最大值是 $M(i,k-1)$，後半部的最大值是 $M(k+1,j)$，最後加上爆破 $k$ 所獲得的錢幣，因為這兩段都爆破了，還未爆破的左邊現在是 $n_{i-1}$，右邊則是 $n_{j+1}$。

但在邊緣的案例上，譬如，$k=i<j$ 的時候，上面的圖示就不管用了。但在邊緣的案例上，我們其實只需要考慮爆破其中一邊就好，也就是我們可以希望 $M(i, i-1) = 0$，但因為 $D$ 是一個上半矩陣（這就是我們為何一開始要把 `dp` 填滿 0）這件事情會是對的。同理，$i<k=j$ 和 $i=k=j$ 的狀況也是如此。

寫成式子即為：

> $M(i,j) = \max_{i\leq k \leq j}(\{ M(i,k-1) + M(k+1,j) + n_{i-1} \times n_k \times n_{j+1} \})$。

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

接下來就是考慮迭代範圍：

1. 對每個小於 `l - 1` （記得 `nums` 實際上的長度只有 `l - 2`）的長度 `len` 以及 `i` 做迭代。
2. 當給定 `len` 和 `i`，我們會有唯一的 `j`，使得 `j = i + len - 1`。

```js
for (var len = 1; len < l - 1; len++) {
  for (var i = 1; i + len - 1 < l - 1; i++) {
    ......
  }
}
```
---

我們最後的程式碼因此是：

```js
var maxCoins = function(nums) {
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