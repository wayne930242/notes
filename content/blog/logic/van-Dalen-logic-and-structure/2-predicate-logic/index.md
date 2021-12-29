---
title: 2. 述詞邏輯 
date: "2021-12-29"
category: Logic
tags:
 - philosophy
 - reading
---

> Dirk van Dalen, *Logic and Structure, 4th*.

## 2.1 量詞（quantifiers）

$\forall$ 和 $\exist$。

## 2.2 結構 

**〔定義 2.2.1 結構〕** 結構是一個序列 $\lang A,R_1,...,R_n,F_1,...,F_m,\{c_i|i\in I\} \rang$，其中 $A$ 是一個非空集合。$R_1,...,R_n$ 是在 $A$ 上的關係，$F_1,...,F_n$ 是在 $A$ 上的函數，$c_i (i\in I)$ 是在 $A$ 上的元素（常數）。

> **說明**：
> 
> 1. 慣例上，結構由歌德文字所標示：$\mathfrak{A}$、$\mathfrak{B}$、……、$\mathfrak{Z}$。
> 2. 函數 $F_i$ 是全定義（total）的，亦即，由所有的自變數所定義的。

---

**〔定義 2.2.2 類似型（similarity type）〕** 結構 $\mathfrak{A}=\lang A,R_1,...,R_n,F_1,...,F_m,\{c_i|i\in I\}\rang$ 的類似型是序列 $\lang\gamma_1,...,\gamma_n;a_1,...,a_m;\kappa\rang$，這裡的 $R_i\sube A^{r_i}$，$F_j: A^{a_j}\rightarrow A$，$\kappa = |\{c_i|i\in I\}|$（$car(I)$）。

> **說明**：
> 
> * $\lang\R,+,\cdot,^{-1},0,1\rang$ 的類似型是 $\lang \text{--},2,2,1;2\rang$。
> * $\lang\N,<\rang$ 的類似型是 $\lang 2;\text{--};0\rang$。
>
> 這些結構裡面都包含一個特殊的一元關係：等同關係（同一關係）。由於所有數學結構都有等同關係，因此在類似型中會加以省略。因此，我們直接假定所有結構中都有等同關係。
> 
> 0 元關係與函數是 $A^{\empty} = \{\empty\}$ 的子集合，$\{\empty\}$ 和 $\empty$，$0$ 和 $1$，可以看成真值，用來扮演命題詮釋的角色。
> 
> 由於 0 元關係的定義域是單一的（從 $A^{\empty}$ 對應到 $A$），我們也可以允許用値域 $A$ 來定義它們。
>
> $A$ 是 $\mathfrak{A}$ 的宇集合（universe），寫作 $A = |\mathfrak{A}|$。

---

