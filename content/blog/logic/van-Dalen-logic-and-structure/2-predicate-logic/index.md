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

* $\forall$：全稱量詞。
* $\exist$：存在量詞。

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
> 如果 $R\sube A$，$R$ 是一個一元關係，我們稱之為性質，或一元關係（unary relation）。
> 
> 這些結構裡面都包含一個特殊的二元關係：等同關係（同一關係）。由於所有數學結構都有等同關係，因此在類似型中會加以省略。因此，我們直接假定所有結構中都有等同關係。
> 
> 0 元關係是 $A^{\empty} = \{\empty\}$ 的子集合，$\{\empty\}$ 和 $\empty$，$0$ 和 $1$，可以看成真值，用來扮演命題詮釋的角色。
> 
> 由於 0 元函數的定義域是單一的（從 $A^{\empty}$ 對應到 $A$），我們也可以允許用値域 $A$ 來定義它們。
>
> $A$ 是 $\mathfrak{A}$ 的宇集合（universe），寫作 $A = |\mathfrak{A}|$。

---

## 2.3 類似型的語言

**〔字母〕**

1. 述詞符號：$P_1$、$P_2$、……、$P_n$、$\doteq$
3. 函數符號：$f_1$、$f_2$、……、$f_m$
5. 常數符號：$\overline{c}_i$，$i\in I$
6. 變數：$x_0$、$x_1$、$x_2$、……
7. 連接詞：$\vee$、$\wedge$、$\rightarrow$、$\neg$、$\leftrightarrow$、$\bot$、$\forall$、$\exist$
8. 輔助符號：$($、$)$

---

**〔定義 2.3.1 詞項〕** $TERM$ 是有以下性質的最小集合 $X$：

1. $\overline{c}_i\in X (c\in I)$ 且 $x_i \in X (i\in N)$。
2. $t_1,...,t_{a_i} \in X \Rightarrow f_i(t_1,...,t_{a_i}) \in X (1 \leq i \leq m)$。

---

**〔定義 2.3.2〕** $FORM$ 是有以下性質的最小集合 $X$：

1. 原子：
   * $\bot\in X$
   * $r_i=0\Rightarrow P_i\in X$
   * $t_1,...,t_{r_i}\in TERM \Rightarrow P(t_1,...,t_{r_i})$
   * $t_1,t_2\in TERM \Rightarrow t_1=t_2\in X$
2. $\phi,\psi\in X \Rightarrow (\phi\Box\psi)\in X$，這裡的 $\Box\in\{\wedge,\vee,\rightarrow,\leftrightarrow\}$
3. $\phi\in X\Rightarrow(\neg\phi)\in X$
4. $\phi\in X\Rightarrow((\forall x_i)\phi), ((\exist x_i)\phi)\in X$

> **說明**：
>
> 原子 (1) 包括了 0 元述詞符號，可以稱為命題符號（proposition symbol）。0 元述詞可以詮釋成 0 元關係，如 0 或 1。
> 
> $\phi$ 稱之為 $((\exist x_i)\phi)$ 和 $((\exist x_i)\phi)$ 的規模（scope）。

---

**〔定理 2.3.3 歸納法〕** 令 $A(t)$ 是詞項的性質。若 $A(t)$ 在 $t$ 是常數或是變數時成立，並且 $A(t_1),A(t_2),...,A(t_n)\Rightarrow A(f(t_1),f(t_2),...,f(t_n))$ 對於所有函數符號 $f$，則 $A(t)$ 對所有 $t\in TERM$ 成立。

---