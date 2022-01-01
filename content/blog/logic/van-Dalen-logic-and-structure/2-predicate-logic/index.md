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

**〔定義 2.3.1 句項〕** $TERM$ 是有以下性質的最小集合 $X$：

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

**〔引理 2.3.3〕** 令 $A(t)$ 是句項的性質。若 $A(t)$ 在 $t$ 是常數或是變數時成立，並且 $A(t_1),A(t_2),...,A(t_n)\Rightarrow A(f(t_1),f(t_2),...,f(t_n))$ 對於所有函數符號 $f$，則 $A(t)$ 對所有 $t\in TERM$ 成立。

---

**〔引理 2.3.4〕** 令 $A(\phi)$ 是一個句式的性質，若

* $A(\phi)$，當 $\phi$ 是原子，
* $A(\phi), A(\psi) \Rightarrow \phi \Box \psi$，
* $A(\phi) \Rightarrow A(\neg \phi)$，
* $A(\phi) \Rightarrow$ 對於所有 $i$，$A((\forall x_i)\phi), A((\exists x_i) \phi)$，則 $A(\phi)$ 在所有 $\phi \in FORM$ 成立。

---

**$TERM$ 上的遞迴定義**：令 $H_0: Var\cup Const \rightarrow A$，$H_i : A^{a_i} \rightarrow A$，存在唯一的對應 $H$ 使得

* 對於所有常數或變數 $t$，$H(t) = H_0(t)$，
* $H(f_i(t_1,...,t_{a_i})) = H_i(H(t_1),...,H(t_{a_i}))$。

**$FORM$ 上的遞迴定義**：令

* $H_{at} = At \rightarrow A$，
* $H_{\Box} = A^2 \rightarrow A$，
* $H_{\neg} = A \rightarrow A$，
* $H_{\forall} = A \times \N \rightarrow A$，
* $H_{\exist} = A \times \N \rightarrow A$，

存在唯一的對應 $H$ 使得

* $H(\phi) = H_{at}(\phi)$，當 $\phi$ 是原子，
* $H(\phi\Box\psi) = H_{\Box}(H(\phi),H(\psi))$，
* $H(\neg \phi) = H_\neg (H(\phi))$，
* $H(\forall x_i \phi)= H_{\forall}(H(\phi), i)$，
* $H(\exist x_i \phi)= H_{\exist}(H(\phi), i)$。

---

**〔定義 2.3.6 〕** $t$ 的自由變數集合 $FV(t)$ 的定義為：

* $\begin{aligned} FV(x_i) &\coloneqq \{x_i\} \text{，} \\ FV(\overline{c}_i) &\coloneqq \empty \text{，} \end{aligned}$
* $FV(f(t_1,...,t_n))\coloneqq FV(t_1)\cup...\cup FV(t_n)$。

---

**〔定義 2.3.7〕** $\phi$ 的自由變數集合 $FV(\phi)$ 的定義為：

* $\begin{aligned} FV(P(t_1,...,t_n)) &\coloneqq FV(t_1)\cup ... \cup F(t_n) \text{，} \\ FV(t_1 = t_2) &\coloneqq FV(t_1)\cup FV(t_2) \text{，}\\ FV(\bot) = FV(P) &\coloneqq \empty \text{，} \end{aligned}$
* $\begin{aligned} FV(\phi\Box\psi) &\coloneqq FV(\phi) \cup FV(\psi) \text{，} \\ FV(\neg \phi) &\coloneqq FV(\phi) \text{，}\end{aligned}$
* $FV(\forall x_i \phi) = FV(\exist x_i \phi) \coloneqq FV(\phi) - \{x_i\}$。

---

**〔定義 2.3.8〕** 若 $FV(t) = \empty$ 或 $FV(\phi) = \empty$，則 $t$ 或 $\phi$ 稱之為封閉的。封閉句式稱之為語句。沒有量詞的句式稱之為開放的。$TERM_c$ 表示封閉句項的集合；$FORM$ 表示語句的集合。

---

**〔定義 2.3.9〕** 令 $s$ 和 $t$ 為句項，則 $s[t/x]$ 定義為：

* $\begin{aligned} y[t/x] &\coloneqq \begin{cases} y &\text{若 } y \not\equiv x \text{，}\\ t &\text{若 } y\equiv x \end{cases} \\ c[t/x] &\coloneqq c \text{，} \end{aligned}$，
* $f(t_1,...,t_p)[t/x] \coloneqq f(t_1[t/x],...,t_p[t/x])$。

---

**〔定義 2.3.10〕** $\phi[t/x]$ 定義為：

* $\begin{aligned} \bot[t/x] &\coloneqq \bot\text{，} \\ P[t/x] &\coloneqq P \text{ ，若 } P \text{是命題，} \\ P(t_1,...,t_p) &\coloneqq P(t_1[t/x],...,t_p(t/x)) \text{，} \end{aligned}$
* $\begin{aligned} (\phi\Box\psi)[t/x] &\coloneqq \phi[t/x] \Box \psi[t/x] \text{，}\\ (\neg\phi)[t/x] &\coloneqq \neg\phi[t/x] \text{，}\end{aligned}$
* $\begin{aligned}(\forall y \phi)[t/x] &\coloneqq \begin{cases} \forall y \phi [t/x] &\text{若} x\not\equiv y \\ \forall y\phi &\text{若} x\equiv y\end{cases} \\ (\exist y \phi)[t/x] &\coloneqq \begin{cases} \exist y \phi [t/x] &\text{若} x\not\equiv y \\ \exist y\phi &\text{若} x\equiv y\end{cases} \end{aligned}$

---

為了方便起見，我們以 $\text{\textdollar}$ 表示要替換的命題符號（0 元述詞符號）。

**〔定義 2.3.11〕** $\sigma[\phi/\text{\textdollar}]$ 定義為：

* $\sigma[\phi/\text{\textdollar}] \coloneqq \begin{cases} \sigma &\text{若 } \sigma \not \equiv \text{\textdollar} \\ \phi &\text{若 } \sigma \equiv \text{\textdollar} \end{cases} \text{ 對於原子} \sigma$，
* $\begin{aligned} (\sigma_1 \Box \sigma_2)[\phi/\text{\textdollar}] &\coloneqq \sigma_1[\phi/\text{\textdollar}] \Box \sigma_2[\phi/\text{\textdollar}] \\ (\neg \sigma)[\phi/\text{\textdollar}] &\coloneqq \neg \sigma[\phi/\text{\textdollar}] \\ (\forall y \sigma)[\phi/\text{\textdollar}] &\coloneqq \forall y.\sigma[\phi/\text{\textdollar}] \\ (\exist y \sigma [\phi / \text{\textdollar}]) &\coloneqq \exist y. \sigma [\phi/\text{\textdollar}] \end{aligned}$。

---

**〔定義 2.3.12〕** $t$ 對在 $\phi$ 的 $x$ 是自由的，若

1. $\phi$ 是原子，或
2. $\phi\coloneqq\phi_1\Box\phi_2$（或 $\phi\coloneqq\neg\phi_1$），並且 $t$ 對在 $\phi_1$ 和 $\phi_2$ （或 $\phi_1$）的 $x$ 是自由的，或
3. $\phi\coloneqq\forall y\psi$（或 $\phi\coloneqq\exist y\psi$），並且若 $x\in FV(\phi)$，則 $y\notin FV(t)$ 且 $t$ 對於在 $\phi$ 中的 $x$ 是自由的。

---

**〔引理 2.3.13〕** $t$ 對在 $\phi$ 的 $x$ 是自由的 $\Leftrightarrow$ $t$ 的在 $\phi[t/x]$ 中的變數不在量詞的範圍內。

> **證明**：對 $\phi$ 做歸納法。

---

**〔定義 2.3.14〕** $\phi$ 對在 $\sigma$ 的 $\text{\textdollar}$ 是自由的，若

1. $\sigma$ 是原子，或
2. $\sigma\coloneqq\sigma_1\Box\sigma_2$（或 $\sigma\coloneqq\neg\sigma_1$），並且 $\phi$ 對在 $\sigma_1$ 和 $\sigma_2$ （或 $\sigma_1$）的 $\text{\textdollar}$ 是自由的，或
3. $\sigma\coloneqq\forall y\gamma$（或 $\phi\coloneqq\exist y\gamma$），並且若 $\text{\textdollar}$ 出現在 $\sigma$ 中，則 $y\notin FV(\phi)$ 且 $\phi$ 對於在 $\gamma$ 中的 $\text{\textdollar}$ 是自由的。

---

**〔引理 2.3.15〕** $\phi$ 對在 $\sigma$ 的 $\text{\textdollar}$ 是自由的 $\Leftrightarrow$ $\phi$ 的在 $\sigma[\phi/\text{\textdollar}]$ 中的變數不在量詞的範圍內。

---

**〔定義 2.3.16〕** $\mathfrak{A}$ 的擴展語言 $L(\mathfrak{A})$ 是從語言 $L$，以 $\mathfrak{A}$ 的類似型，加上所有的 $\mathfrak{A}$ 的元素的常數符號。我們將屬於 $a \in \mathfrak{A}$ 的常數符號以 $\overline{a}$ 表示。

## 2.4 語義學

