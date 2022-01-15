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
> 2. 函數 $F_i$ 是全定義（total）的，亦即，由所有的自變元所定義的。

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
> 0 元關係是 $A^{\empty} = \{\empty\}$（從 $\empty$ 到 $\empty$ 的所有函數的集合）的子集合，$\{\empty\}$ 和 $\empty$，序數的 $0$ 和 $1$，可以看成真值，用來扮演命題詮釋的角色。
> 
> 由於 0 元函數的定義域只有單一元素（$A^{\empty}$），也允許我們用値域 $A$ 來定義它們。
>
> $A$ 是 $\mathfrak{A}$ 的宇集（universe），我們寫作 $A = |\mathfrak{A}|$。

---

## 2.3 類似型的語言

**〔字母〕**

1. 述詞符號：$P_1$、$P_2$、……、$P_n$、$\doteq$
3. 函數符號：$f_1$、$f_2$、……、$f_m$
5. 常數符號：$\overline{c}_i$，$i\in I$
6. 變元：$x_0$、$x_1$、$x_2$、……
7. 連接詞：$\vee$、$\wedge$、$\rightarrow$、$\neg$、$\leftrightarrow$、$\bot$、$\forall$、$\exist$
8. 輔助符號：$($、$)$

---

**〔定義 2.3.1 句項〕** $TERM$ 是有以下性質的最小集合 $X$：

1. $\overline{c}_i\in X (i\in I)$（$\overline{c}_i\in Const$）且 $x_i \in X (i\in N)$（$x_i\in Var$）。
2. $t_1,...,t_{a_i} \in X \Rightarrow f_i(t_1,...,t_{a_i}) \in X (1 \leq i \leq m)$。

---

**〔定義 2.3.2〕** $FORM$ 是有以下性質的最小集合 $X$：

1. 原子：
   * $\bot\in X$
   * $r_i=0\Rightarrow P_i\in X$
   * $t_1,...,t_{r_i}\in TERM \Rightarrow P(t_1,...,t_{r_i}) \in X$
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

**〔引理 2.3.3〕** 令 $A(t)$ 是句項的性質。若 $A(t)$ 在 $t$ 是常數或是變元時成立，並且 $A(t_1),A(t_2),...,A(t_n)\Rightarrow A(f(t_1),f(t_2),...,f(t_n))$ 對於所有函數符號 $f$，則 $A(t)$ 對所有 $t\in TERM$ 成立。

---

**〔引理 2.3.4〕** 令 $A(\phi)$ 是一個句式的性質，若

* $A(\phi)$，當 $\phi$ 是原子，
* $A(\phi), A(\psi) \Rightarrow \phi \Box \psi$，
* $A(\phi) \Rightarrow A(\neg \phi)$，
* $A(\phi) \Rightarrow$ 對於所有 $i$，$A((\forall x_i)\phi), A((\exists x_i) \phi)$，

則 $A(\phi)$ 在所有 $\phi \in FORM$ 成立。

---

**$TERM$ 上的遞迴定義**：令 $H_0: Var\cup Const \rightarrow A$，$H_i : A^{a_i} \rightarrow A$，存在唯一的對應 $H$ 使得

* 對於所有常數或變元 $t$，$H(t) = H_0(t)$，
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

**〔定義 2.3.6 〕** $t$ 的自由變元集合 $FV(t)$ 的定義為：

* $\begin{aligned} FV(x_i) &\coloneqq \{x_i\} \text{，} \\ FV(\overline{c}_i) &\coloneqq \empty \text{，} \end{aligned}$
* $FV(f(t_1,...,t_n))\coloneqq FV(t_1)\cup...\cup FV(t_n)$。

---

**〔定義 2.3.7〕** $\phi$ 的自由變元集合 $FV(\phi)$ 的定義為：

* $\begin{aligned} FV(P(t_1,...,t_n)) &\coloneqq FV(t_1)\cup ... \cup F(t_n) \text{，} \\ FV(t_1 = t_2) &\coloneqq FV(t_1)\cup FV(t_2) \text{，}\\ FV(\bot) = FV(P) &\coloneqq \empty \text{，} \end{aligned}$
* $\begin{aligned} FV(\phi\Box\psi) &\coloneqq FV(\phi) \cup FV(\psi) \text{，} \\ FV(\neg \phi) &\coloneqq FV(\phi) \text{，}\end{aligned}$
* $FV(\forall x_i \phi) = FV(\exist x_i \phi) \coloneqq FV(\phi) - \{x_i\}$。

---

**〔定義 2.3.8〕** 若 $FV(t) = \empty$ 或 $FV(\phi) = \empty$，則 $t$ 或 $\phi$ 稱之為封閉的（closed）。封閉句式（closed formula）稱之為語句（sentence）。沒有量詞的句式稱之為開放的（open）。$TERM_c$ 表示封閉句項的集合；$SENT$ 表示語句的集合。

---

**〔定義 2.3.9〕** 令 $s$ 和 $t$ 為句項，則 $s[t/x]$ 定義為：

* $\begin{aligned} y[t/x] &\coloneqq \begin{cases} y &\text{若 } y \not\equiv x \text{，}\\ t &\text{若 } y\equiv x \end{cases} \\ c[t/x] &\coloneqq c \text{，} \end{aligned}$，
* $f(t_1,...,t_p)[t/x] \coloneqq f(t_1[t/x],...,t_p[t/x])$。

---

**〔定義 2.3.10〕** $\phi[t/x]$ 定義為：

* $\begin{aligned} \bot[t/x] &\coloneqq \bot\text{，} \\ P[t/x] &\coloneqq P \text{ ，若 } P \text{是命題，} \\ P[t_1,...,t_p] &\coloneqq P(t_1[t/x],...,t_p(t/x)) \text{，} \end{aligned}$
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
3. $\phi\coloneqq\forall y\psi$（或 $\phi\coloneqq\exist y\psi$），並且若 $x\in FV(\phi)$，則 $y\notin FV(t)$ 且 $t$ 對於在 $\psi$ 中的 $x$ 是自由的。

---

**〔引理 2.3.13〕** $t$ 對在 $\phi$ 的 $x$ 是自由的 $\Leftrightarrow$ $t$ 的在 $\phi[t/x]$ 中的變元不在量詞的範圍內，亦即，$t$ 在 $\phi[t/x]$ 中是自由的。

> **證明**：對 $\phi$ 做歸納法。

---

**〔定義 2.3.14〕** $\phi$ 對在 $\sigma$ 的 $\text{\textdollar}$ 是自由的，若

1. $\sigma$ 是原子，或
2. $\sigma\coloneqq\sigma_1\Box\sigma_2$（或 $\sigma\coloneqq\neg\sigma_1$），並且 $\phi$ 對在 $\sigma_1$ 和 $\sigma_2$ （或 $\sigma_1$）的 $\text{\textdollar}$ 是自由的，或
3. $\sigma\coloneqq\forall y\gamma$（或 $\phi\coloneqq\exist y\gamma$），並且若 $\text{\textdollar}$ 出現在 $\sigma$ 中，則 $y\notin FV(\phi)$ 且 $\phi$ 對於在 $\gamma$ 中的 $\text{\textdollar}$ 是自由的。

---

**〔引理 2.3.15〕** $\phi$ 對在 $\sigma$ 的 $\text{\textdollar}$ 是自由的 $\Leftrightarrow$ $\phi$ 的在 $\sigma[\phi/\text{\textdollar}]$ 中的變元不在量詞的範圍內，亦即，$\phi$ 的所有變元在 $\sigma[\phi/\text{\textdollar}]$ 中是自由的。

---

**〔定義 2.3.16〕** $\mathfrak{A}$ 的擴展語言 $L(\mathfrak{A})$ 是從語言 $L$，由 $\mathfrak{A}$ 的類似型，加上所有 $\mathfrak{A}$ 的常數符號元素。我們將常數符號（$a \in \mathfrak{A}$）以 $\overline{a}$ 表示。

## 2.4 語義學

**一個例子**

考慮結構 $\mathfrak{A} = (\Z , <,+,-,0)$。

語言 $L$ 有以下字母：

* 述詞符號：$\doteq$、$L$。
* 函數符號：$P$、$M$。
* 常數符號：$\overline{0}$。

$L(\mathfrak{A})$ 對所有的 $m \in\Z$ 有常數符號 $\overline{m}$。

$L(\mathfrak{A})$ 的封閉形式可以這樣詮釋：

| $t$            | $t^\mathfrak{A}$                      |
| -------------- | ------------------------------------- |
| $\overline{m}$ | $m$                                   |
| $P(t_1,t_2)$   | $t^\mathfrak{A}_1 + t^\mathfrak{A}_2$ |
| $M(t)$         | $- t^\mathfrak{A}$                    |

接著我們詮釋 $L(\mathfrak{A})$ 的語句，透過指派 $0$ 或 $1$ 之一的真值：

$\begin{aligned}
v(\bot) &= 0\\
v(t \doteq s) &= \begin{cases} 1 \text{ 若 } t^\mathfrak{A} = s^\mathfrak{A} \\ 0 \text{ 其他} \end{cases} \\
v(L(t,s)) &= \begin{cases} 1 \text{ 若 } t^\mathfrak{A} < s^\mathfrak{A} \\ 0 \text{ 其他} \end{cases} \\
v(\phi\Box\psi) &\text{ 如 1.2.1} \\
v(\neg\psi) &\text{ 如 1.2.1} \\
v(\forall x\phi) &= \min\{v(\phi[\overline{n}/x]) | n\in \Z \} \\
v(\exist x\phi) &= \max\{v(\phi[\overline{n}/x]) | n\in \Z \}
\end{aligned}$

> **說明**：
> 
> 1. $v$ 將由 $\mathfrak{A}$ 唯一決定，我們可以 $\llbracket \phi \rrbracket _\mathfrak{A}$ 代表 $v_\mathfrak{A}(\phi)$。
> 2. 我們也可以將 $t^\mathfrak{A}$ 寫成 $\llbracket t \rrbracket _\mathfrak{A}$。 

---

**普遍化：**

給定類似型 $\lang r_1,...,r_n ; a_1,...,a_m ; |I| \rang$，考慮 $\mathfrak{A} = \lang A, R_1,...,R_n, F_1,...,F_m, \{ c_i | i\in I \} \rang$。

相應的語言 $L$ 有述詞符號 $\overline{R}_1, ..., \overline{R}_n$，函數符號 $\overline{F}_1, ..., \overline{F}_m$，以及常數符號 $\overline{c}_i$。

$L(\mathfrak{A})$ 對所有 $a \in | \mathfrak{A}|$ 有常數符號 $\overline{a}$。

**〔定義 2.4.1〕** $L(\mathfrak{A})$ 在 $\mathfrak{A}$ 的封閉形式的一個詮釋是一個對應 $(.)^\mathfrak{A}: TERM_c \rightarrow |\mathfrak{A}|$ 使得：

1. $\begin{aligned}\overline{c_i}^\mathfrak{A}&= c_i &(\llbracket \overline{c_i} \rrbracket_\mathfrak{A})\\\overline{a}^\mathfrak{A}&= a &(\llbracket \overline{a} \rrbracket_\mathfrak{A})\end{aligned}$
2. $\begin{aligned} &(\overline{F}_i(t_1,...,t_p))^\mathfrak{A} = F_i(t_1^\mathfrak{A},...,t_p^\mathfrak{A})) \text{，當 } p = a_i \\ &\text{（}\llbracket F_i(t_1,...t_p)\rrbracket_\mathfrak{A} = \overline{F_i}(\llbracket t_1\rrbracket_\mathfrak{A},...,\llbracket t_p\rrbracket_\mathfrak{A})\text{）}\end{aligned}$

---

**〔定義 2.4.2〕** $L(\mathfrak{A})$ 在 $\mathfrak{A}$ 的語句 $\phi$ 的一個詮釋是一個對應 $\llbracket.\rrbracket_\mathfrak{A}: SENT \rightarrow \{ 0,1\}$ 使得：

1. $\begin{aligned} \llbracket \bot \rrbracket_\mathfrak{A} &\coloneqq 0 \\ \llbracket \overline{R} \rrbracket_\mathfrak{A} &\coloneqq R \text{ (即 1 或 0)} \end{aligned}$
2. $\begin{aligned} \llbracket \overline{R}_i(t_1,...,t_p) \rrbracket_\mathfrak{A} &\coloneqq \begin{cases} 1 \text{ 若 } \lang t_1^\mathfrak{A} , ..., t_p^\mathfrak{A} \rang \in R_i \text{ ，當 } p = r_i \\ 0 \text{ 其他} \end{cases} \\ \llbracket t_1 = t_2 \rrbracket_\mathfrak{A} &\coloneqq \begin{cases} 1 \text{ 若 } t_1^\mathfrak{A} = t_2^\mathfrak{A}\\ 0 \text{ 其他} \end{cases} \end{aligned}$
3. $\begin{aligned}\llbracket \phi \wedge \psi\rrbracket_\mathfrak{A} &\coloneqq \min\{\llbracket\phi \rrbracket_\mathfrak{A}, \llbracket\psi \rrbracket_\mathfrak{A}\} \\ \llbracket \phi \vee \psi\rrbracket_\mathfrak{A} &\coloneqq \max\{\llbracket\phi \rrbracket_\mathfrak{A}, \llbracket\psi \rrbracket_\mathfrak{A}\} \\ \llbracket \phi \rightarrow \psi\rrbracket_\mathfrak{A} &\coloneqq \max\{1- \llbracket\phi \rrbracket_\mathfrak{A}, \llbracket\psi \rrbracket_\mathfrak{A}\} \\ \llbracket \phi \leftrightarrow \psi\rrbracket_\mathfrak{A} &\coloneqq 1 - | \llbracket\phi \rrbracket_\mathfrak{A} - \llbracket\psi \rrbracket_\mathfrak{A} | \\ \llbracket \neg \phi \rrbracket_\mathfrak{A} &\coloneqq 1- \llbracket\phi \rrbracket_\mathfrak{A} \end{aligned}$
4. $\begin{aligned}\llbracket \forall x \phi \rrbracket_\mathfrak{A} &\coloneqq \min\{\llbracket\phi [\overline{a}/x] \rrbracket_\mathfrak{A} | a\in \mathfrak{A} \} \\ \llbracket \forall x \phi \rrbracket_\mathfrak{A} &\coloneqq \max \{\llbracket\phi [\overline{a}/x] \rrbracket_\mathfrak{A} | a\in \mathfrak{A} \} \end{aligned}$

> **說明**：除了賦值寫法以外，我們也可以這樣寫：
> 
> 1. 用 $\mathfrak{A}\vDash\phi$ 表示 $\llbracket\phi\rrbracket_\mathfrak{A}$。
> 2. 用 $\mathfrak{A} \vDash\phi$ 表示 $\phi$ 在 $\mathfrak{A}$ 中為真、有效。
>
> $\vDash$ 稱為滿足關係（satisfaction relation）。這個寫法也可以用在命題邏輯，用 $v\vDash\phi$ 表示 $\llbracket\phi\rrbracket_v = 1$。

---

**〔定義 2.4.3〕** 令 $FV(\phi) = \{ z_1,...,z_k \}$，則 $Cl(\phi) \coloneqq \forall z_1...z_k \phi$ 是 $\phi$ 的全稱閉包（universal closure）（假設變元 $z_i$ 的順序以某方式固定下來）。

---

**〔定義 2.4.4〕**

1. $\mathfrak{A}\vDash\phi \Leftrightarrow \mathfrak{A} \vDash Cl(\phi)$，
2. $\vDash\phi\Leftrightarrow\text{對於所有（合適類似型的） } \mathfrak{A} \text{，} \mathfrak{A} \vDash\phi$，
3. $\mathfrak{A}\vDash\Gamma \Leftrightarrow\text{對於所有 } \psi\in\Gamma\text{，} \mathfrak{A}\vDash\psi$，
4. $\Gamma\vDash\phi\Leftrightarrow (\mathfrak{A}\vDash\Gamma\Rightarrow\mathfrak{A}\vDash\phi)$，這裡的 $\Gamma\cup\{\phi\}$ 由語句組成。

---

**〔定義 2.4.4.5〕**

1. 若 $\mathfrak{A}\vDash\sigma$，我們說 $\mathfrak{A}$ 是 $\sigma$ 的一個模型（model）。
2. 若 $\mathfrak{A}\vDash\Gamma$，我們說 $\mathfrak{A}$ 是 $\Gamma$ 的一個模型。
3. 若 $\vDash\phi$，我們說 $\phi$ 為真。
4. 若 $\Gamma\vDash\phi$，亦即，$\phi$ 在 $\Gamma$ 的所有模型都成立，我們說 $\phi$ 是 $\Gamma$ 的語義學後果（semantic consequence）。
5. 令 $\phi$ 是有自由變元 $FV(\phi) = \{z_1,...,z_k\}$ 的句式，若 $\mathfrak{A}\vDash\phi[\overline{a}_1,...,\overline{a}_k / z_1,...,z_k]$，我們說 $\phi$ 被 $a_1,...,a_k \in \mathfrak{A}$ 所滿足。
6. 若存在能夠滿足 $\phi$ （$FV(\phi) = \{z_1,...,z_k\}$）的 $a_1,...,a_k\in\mathfrak{A}$，我們說 $\phi$ 在 $\mathfrak{A}$ 是可滿足的（satisfiable）。

> **說明**：$\phi$ 是可滿足的 $\Leftrightarrow \mathfrak{A}\vDash\exist z_1...z_k\phi$。

---

**〔引理 2.4.5〕** 當限制在語句上，則

1. $\mathfrak{A}\vDash\phi\wedge\psi\Leftrightarrow\mathfrak{A}\vDash\phi$ 且 $\mathfrak{A}\vDash\psi$，
2. $\mathfrak{A}\vDash\phi\vee\psi\Leftrightarrow\mathfrak{A}\vDash\phi$ 或 $\mathfrak{A}\vDash\psi$，
3. $\mathfrak{A}\vDash\neg\phi\Leftrightarrow\mathfrak{A}\nvDash\phi$，
4. $\mathfrak{A}\vDash\phi\rightarrow\psi\Leftrightarrow(\mathfrak{A}\vDash\phi\Rightarrow\mathfrak{A}\vDash\phi)$，
5. $\mathfrak{A}\vDash\phi\leftrightarrow\psi\Leftrightarrow(\mathfrak{A}\vDash\phi\Leftrightarrow\mathfrak{A}\vDash\phi)$，
6. $\mathfrak{A}\vDash\forall x\phi\Leftrightarrow\mathfrak{A}\vDash\phi[\overline{a}/x]$，對於所有 $a\in|\mathfrak{A}|$，
7. $\mathfrak{A}\vDash\exist x\phi\Leftrightarrow\mathfrak{A}\vDash\phi[\overline{a}/x]$，對於一些 $a\in|\mathfrak{A}|$，

> **說明：**
> 
> 1. 0 元關係是 $A^\empty = \{\empty\}$ 的子集合，也就是 $\empty$ 或 $\{\empty\}$，序數的 $0$ 或 $1$。因此，$\llbracket\overline{P}\rrbracket_\mathfrak{A}=P$，$P$ 是真值。
> 2. 考慮對應到 $A^k$ 的子集合的有 $k$ 個自由變元的句式 $\phi$ 以及 $FV(\phi)=\{z_1,...,z_k\}$，我們可以令 $\llbracket\phi\rrbracket_\mathfrak{A}=\{\lang a_1,...,a_k\rang | \mathfrak{A}\vDash \phi(\overline{a}_1,...,\overline{a}_k)\}$。

## 2.5 述詞邏輯的一些簡單性質

**〔定理 2.5.1〕**

1. $\vDash\neg\forall x\phi\leftrightarrow\exist x\neg\phi$，
2. $\vDash\neg\exist x\phi\leftrightarrow\forall x\neg\phi$，
3. $\vDash\forall x\phi\leftrightarrow\neg\exist\neg x\phi$，
4. $\vDash\exist x\phi\leftrightarrow\neg\forall \neg x\phi$。

---

**〔定理 2.5.2〕**

1. $\vDash\forall x \forall y \phi\leftrightarrow\forall y\forall x \phi$，
1. $\vDash\exist x \exist y \phi\leftrightarrow\exist y\exist x \phi$，
1. $\vDash\forall x \phi\leftrightarrow \phi$，若 $x \notin FV(\phi)$，
1. $\vDash\exist x \phi\leftrightarrow \phi$，若 $x \notin FV(\phi)$。

---

**〔定理 2.5.3〕**

1. $\vDash \forall x(\phi \wedge \psi) \leftrightarrow \forall x\phi\wedge\forall x\phi$，
1. $\vDash \exist x(\phi \vee \psi) \leftrightarrow \exist x\phi\vee\exist x\phi$，
3. $\vDash\forall x(\phi(x)\vee\psi)\leftrightarrow\forall x\phi(x)\vee\psi$，若 $x \notin FV(\psi)$，
4. $\vDash\exist x(\phi(x)\wedge\psi)\leftrightarrow\exist x\phi(x)\wedge\psi$，若 $x \notin FV(\psi)$。

> **注意**：$\forall x(\phi(x)\vee\psi(x))\rightarrow\forall x\phi(x) \vee \forall x \phi(x)$ 和 $\exist x\phi(x)\wedge\exist x \psi(x)\rightarrow\exist x (\phi(x) \wedge \phi(x))$ 並不為真。

---

**〔引理 2.5.4〕**

1. 令 $x$ 和 $y$ 是使得 $x\notin FV(r)$ 的相異變元，則 $(t[s/x])[r/y] = (t[r/y])[s[r/y]/x]$，
2. 令 $x$ 和 $y$ 是使得 $x\notin FV(r)$ 的相異變元，則 $(\phi[t/x])[s/y] = (\phi[s/y])[t[s/y]/x]$，
3. 令 $\psi$ 對在 $\phi$ 中的 $\text{\textdollar}$ 是自由的，並且 $t$ 對 $\phi$ 和 $\psi$ 中的 $x$ 是自由的，則 $(\phi[\psi/\text{\textdollar}])[t/x] = (\phi[t/x])[\psi [t/x]/\text{\textdollar}]$。
4. 令 $\phi, \psi$ 對在 $\sigma$ 中的 $\text{\textdollar}_1, \text{\textdollar}_2$ 是自由的，令 $\psi$ 對在 $\phi$ 中的 $\text{\textdollar}_2$ 是自由的，並且 $\text{\textdollar}_1$ 未在 $\psi$ 中出現，則 $(\sigma[\phi/\text{\textdollar}_1])[\psi/\text{\textdollar}_2] = (\sigma[\psi/\text{\textdollar}_2])[\phi[\psi/\text{\textdollar}_2]/\text{\textdollar}_1]$。

> **說明**：$x\notin FV(r) \Rightarrow r[s[r/y]/x] = r$。 

---

**〔系理 2.5.5〕**

1. 若 $z \notin FV(t)$，則 $t[\overline{a}/x] = (t[z/x])[\overline{a}/z]$，
2. 若 $z \notin FV(\phi)$ 且 $z$ 對在 $\phi$ 的 $x$ 是自由的，則 $(\phi[\overline{a}/x])= (\phi[z/x])[\overline{a}/z]$。

---

**〔定理 2.5.6 約束變元的變換〕** 若 $x,y$ 對 $\phi$ 中的 $z$ 是自由的，並且 $x, y \notin FV(\phi)$，則 $\vDash \exist x\phi[x/z]\leftrightarrow\exist y\phi[y/z]$，且 $\vDash \forall x\phi[x/z]\leftrightarrow\forall y\phi[y/z]$。

> **證明**：對於任意符合條件的 $x$ 與 $y$，$\mathfrak{A}\vDash\exists x\phi [x/z]\Leftrightarrow$ 對於某 $a$，使得 $\mathfrak{A}\vDash(\phi[x/z])[\overline{a}/x]\Leftrightarrow$ 對於某些 $a$，使得 $\mathfrak{A}\vDash\phi[\overline{a}/z] \Leftrightarrow$ 對於某些 $a$，使得 $\mathfrak{A}\vDash(\phi[y/z])[\overline{a}/y]\Leftrightarrow\mathfrak{A}\vDash\exist y\phi[y/z]$。

---

**〔系理 2.5.7〕** 所有句式都等同於一個其中沒有變元既是自由的又是拘束的句式。

---

**〔定理 2.5.8 替代定理〕**

1. $\vDash t_1=t_2\rightarrow s[t_1/x]=s[t_2/x]$，
2. $\vDash t_1=t_2\rightarrow \phi[t_1/x]=\phi[t_2/x]$， 
3. $\vDash (\phi\leftrightarrow\psi)\rightarrow(\sigma[\phi/\text{\textdollar}] \leftrightarrow\sigma[\psi/\text{\textdollar}] )$。

---

**〔系理 2.5.9〕** 

1. $\llbracket s[t/x]\rrbracket = \llbracket s[\overline{\llbracket t \rrbracket} /x] \rrbracket$，
1. $\llbracket \phi[t/x]\rrbracket = \llbracket \phi[\overline{\llbracket t \rrbracket} /x] \rrbracket$。

> **證明**：$\llbracket\overline{\llbracket t\rrbracket}\rrbracket = \llbracket t\rrbracket$，那麼 $\mathfrak{A}\vDash \overline{\llbracket t \rrbracket} = t$，接著應用替代定理。
---

**〔定義 2.5.10〕** 一個句式 $\phi$ 符合前束標準形式（in prenex normal form），意思是 $\phi$ 是由一串量詞（可以為空）接著一個（無量詞的）開放句式組成。我們也稱這種 $\phi$ 為前束句式（prenex formula）。

---

**〔定理 2.5.11〕** 對於每個句式 $\phi$，都存在前束句式 $\psi$ 使得 $\vDash\phi\leftrightarrow\psi$。

> **證明**：應用〔定理 2.5.6〕，我們可以為所有分別約束的變元挑選相異的變元符號。

---

**〔定義 2.5.12〕** 若 $P$ 是一個一元述詞符號，則 $(\forall x\in P)\phi\coloneqq\forall x(P(x)\rightarrow\phi)$，$(\exist x\in P)\phi\coloneqq\exist x(P(x)\wedge\phi)$。

---

**｛定義 2.5.13〕** $Sub^+$ 和 $Sub^-$ 同時定義如下：

* $\begin{aligned}Sub^+(\phi) &= \{\phi\} \\ Sub^-(\phi) &= \empty \end{aligned}$，對於原子 $\phi$
* $\begin{aligned}Sub^+(\phi_1\Box\phi_2) &= Sub^+(\phi_1) \cup Sub^+(\phi_2) \cup \{\phi_1\Box\phi_2\} \\ Sub^-(\phi_1\Box\phi_2) &= Sub^-(\phi_1) \cup Sub^-(\phi_2) \end{aligned}$，對於 $\Box\in\{\wedge, \vee\}$
* $\begin{aligned}Sub^+(\phi_1\rightarrow\phi_2) &= Sub^-(\phi_1) \cup Sub^+(\phi_2) \cup \{\phi_1\rightarrow\phi_2\} \\ Sub^-(\phi_1\rightarrow\phi_2) &= Sub^+(\phi_1) \cup Sub^-(\phi_2) \end{aligned}$
* $\begin{aligned}Sub^+(Qx.\phi) &= Sub^+(\phi)\cup\{Qx.\phi\}\\ Sub^-(Qx.\phi) &= Sub^-(\phi) \end{aligned}$，對於 $Q\in\{\forall, \exist\}$。
* 若 $\phi\in Sub^+(\psi)$，則我們說 $\phi$ 在 $\psi$ 中正出現（occurs positively）。
* 若 $\phi\in Sub^-(\psi)$，則我們說 $\phi$ 在 $\psi$ 中負出現（occurs positively）。

---

**〔定理 2.5.14〕** 令 $\phi$（$\psi$）不在 $\sigma$ 中負出現（正出現），則：

1. $\llbracket \phi_1 \rrbracket\leq \llbracket\phi_2\rrbracket\Rightarrow\llbracket\sigma[\phi_1/\phi]\rrbracket \leq\llbracket\sigma[\phi_2/\phi]\rrbracket$
2. $\llbracket \psi_1 \rrbracket\leq \llbracket\psi_2\rrbracket\Rightarrow\llbracket\sigma[\psi_1/\psi]\rrbracket \geq\llbracket\sigma[\psi_2/\psi]\rrbracket$
3. $\mathfrak{A}\vDash(\phi_1\rightarrow\phi_2)\rightarrow(\sigma[\phi_1/\phi]\rightarrow\sigma[\phi_2/\phi])$
4. $\mathfrak{A}\vDash(\psi_1\rightarrow\psi_2)\rightarrow(\sigma[\psi_2/\psi]\rightarrow\sigma[\psi_1/\psi])$

---

## 2.6 同一關係

同一關係的公理（除了 $I_4$ 是一個公理架構（axiom schema））：

$\begin{aligned}
I_1 \quad &\forall x(x=x)\\
I_2 \quad &\forall xy (x=y\rightarrow y=x)\\
I_3 \quad &\forall xyz(x=y\wedge y=z \rightarrow x=z)\\
I_4 \quad 
   &\forall x_1...x_ny_1...y_n(\displaystyle{\bigwedge_{i\leq n}x_i=y_i\rightarrow t(x_1,...,x_n) = t(y_1,...,y_n)}) \\
   &\forall x_1...x_ny_1...y_n(\displaystyle{\bigwedge_{i\leq n}x_i=y_i\rightarrow (\phi(x_1,...,x_n) \rightarrow \phi(y_1,...,y_n))})
\end{aligned}$

> **說明：** $I_1$ 到 $I_3$ 指出同一關係是等同關係，而 $I_4$ 說明同一關係是其他所有（可定義的）關係的一個同餘關係（congurence）。

---

## 2.7 範例

* 同一關係的語言。類似型 $\lang-;-;0\rang$
* 偏序的語言。類似型 $\lang2;-;0\rang$
* 群的語言。類似型 $\lang-;2,1;1\rang$
* 投影幾何平面語言。類似型 $\lang2;-;0\rang$
  * $\Pi(x) \coloneqq \exist y(xIy)$（$x$ 是一個點）。$\Alpha(y) \coloneqq \exist x (xIy)$（$y$ 是一條線）。
  * $\gamma_0: \forall x(\Pi(x)\leftrightarrow\neg\Alpha(x))$
  * $\gamma_1: \forall xy(\Pi(x)\wedge\Pi(y)\rightarrow\exist z(xIz\wedge yIz))$
  * $\gamma_2: \forall xy(\Alpha(u)\wedge\Alpha(v)\rightarrow\exist x(xIv\wedge xIu))$
  * $\gamma_3: \forall xyuv(xIu \wedge yIu \wedge xIv \wedge yIv \rightarrow x=y \vee u=v)$
  * $\gamma_4: \exist x_0x_1x_2x_3u_0u_1u_2u_3(\bigwedge x_iIu_i \wedge \displaystyle{\bigwedge_{j=i-1(mod3)}x_iIu_j} \wedge \bigwedge_{\substack{j\not ={i-1(mod3)} \\ i\not {=j}}} \neg x_iIu_j )$
* 帶單元的環的語言。類似型 $\lang-;2,2,1;2\rang$
* 代數的語言。類似型 $\lang -;2,2,1;1\rang$
* （無向）圖的語言。類似型 $\lang2;-;0\rang$

## 2.8 自然演繹法

### 演繹規則

**引入規則**：

$
\begin{matrix}
&\phi \quad \psi &\enspace _{(\wedge I)} \\\hline
&\phi \wedge \psi 
\end{matrix}
$

---

$
\begin{matrix}
&[\phi]\\
&{...}\\
&\psi &\enspace _{(\rightarrow I)} \\ \hline
&\phi \rightarrow \psi
\end{matrix}
$

**移出規則**：

$
\begin{matrix}
&\phi \wedge \psi &\enspace _{(\wedge E)} \\\hline
&\phi 
\end{matrix}
$

---

$
\begin{matrix}
&\phi \wedge \psi &\enspace _{(\wedge E)} \\\hline
&\psi 
\end{matrix}
$

---

$
\begin{matrix}
&\phi \quad \phi \rightarrow \psi &\enspace _{(\rightarrow E)} \\\hline
&\psi 
\end{matrix}
$

**矛盾規則**：

$
\begin{aligned}
&\bot &\enspace _{(\bot)} \\\hline
&\phi
\end{aligned}
$

---

$
\begin{aligned}
[\neg &\phi]\\
&...\\
&\bot &\enspace _{(RAA)} \\ \hline
&\phi
\end{aligned}
$

**全稱引入與移出規則**：（新增）

$
\begin{matrix}
&\phi(x) &\enspace _{(\forall I)}\\\hline
&\forall x \phi(x)
\end{matrix}
$

$
\begin{matrix}
&\forall x\phi(x) &\enspace _{(\forall E)}\\\hline
&\phi(t)
\end{matrix}
$

---

**〔定義 2.8.1 （Tarski）〕** 令 $\Gamma$ 是一個句式集合，$\sigma$ 是一個句式，$\{ x_{i_1}, x_{i_2},... \}=\bigcup\{FV(\phi)|\phi\in\Gamma\cup\{\sigma\}\}$。若 $\mathbf{a}$ 是 $|\mathfrak{A}|$ 元素的（可重複）序列 $(a_1, a_2, ...)$，若 $\Gamma(\mathbf{a})$ 是從 $\Gamma$ 透過將所有在 $\Gamma$ 中的句式 $x_i$ 替換為 $\overline{a}_j(j\leq 1)$ 而來（對於 $\Gamma =\{ \psi\}$，寫成 $\psi(\mathbf{a})$）。我們定義：

$
\begin{aligned}
(i)\quad &\mathfrak{A}\vDash\Gamma(\mathbf{a}) &\text{ 對於所有 }\phi\in\Gamma(\mathbf{a}) \text{，}\mathfrak{A}\vDash\psi \\
(ii)\quad &\Gamma\vDash\sigma &\text{ 對於所有 }\mathfrak{A}, \mathbf{a}\text{，}\mathfrak{A}\vDash\Gamma(\mathbf{a})\Rightarrow\mathfrak{A}\vDash\sigma(\mathbf{a}) 
\end{aligned}
$

限制在語句的情況下，這個定義可以簡化為：

$
\begin{aligned}
(i)\quad &\Gamma\vDash\sigma &\text{ 對於所有 }\mathfrak{A}\text{，}\mathfrak{A}\vDash\Gamma\Rightarrow\mathfrak{A}\vDash\sigma\\
(ii)\quad &\vDash \sigma &\text{ 對於 }\Gamma = \empty
\end{aligned}
$

---

**〔引理 2.8.2 健全性〕** $\Gamma\vdash\sigma\Rightarrow\Gamma\vDash\sigma$。

> **證明** 只有 $(\forall I)$ 和 $(\forall E)$ 規則的證明是新的。
> 
> #### $(\forall I)$
> 
> 歸納法假設：令 $D$ 是在 $\Gamma$ 中的假設，並且 $x$ 在 $\Gamma$ 中是非自由的（$x$ 是有被約束的），且 $\Gamma\vDash\phi(x)$。令 $\mathbf{a}=(a_1, \mathbf{a}')$。
> 
> 對於所有 $a_1$ 及 $\mathbf{a}'$，$\mathfrak{A}\vDash\Gamma(\mathbf{a}')\Rightarrow\mathfrak{A}\vDash\phi(\overline{a_1})(\mathbf{a}')$，那麼
> 
> 對於所有 $\mathbf{a}'$，$\mathfrak{A}\vDash\Gamma(\mathfrak{a}')\Rightarrow$ 對於所有 $a_1$，$(\mathfrak{A}\vDash(\phi(\overline{a}_1))(\mathbf{a}')$，那麼
> 
> 對於所有 $\mathbf{a}'$，$\mathfrak{A}\vDash\Gamma(\mathfrak{a}')\Rightarrow\mathfrak{A}\vDash(\forall x\phi(x))(\mathbf{a}')$。
>
> #### $(\forall E)$
> 
> 歸納法假設：令 $D$ 是在 $\Gamma$ 中的假設，且 $\Gamma\vDash\forall x\phi(x)$。
> 
> 令 $\mathfrak{A}\vDash\Gamma(\mathbf{a})$，那麼 $\mathfrak{A}\vDash\phi(t[\mathbf{a}/\mathbf{z}])(\mathbf{a})$，$\mathbf{z}$ 是在 $\phi$ 中出現的變數的（有限）數列，那麼
> 
> $\mathfrak{A}\vDash(\phi[\mathbf{a}/\mathbf{z}])[t[\mathbf{a}/\mathbf{z}]/x]$，那麼，根據〔引理 2.5.4〕，
> 
> $\mathfrak{A}\vDash(\phi[t/x])[\mathbf{a}/\mathbf{z}]$，即 $\mathfrak\vDash(\phi(t))(\mathbf{a})$。

---

**〔定理 2.8.3〕** 令 $x$ 是未出現在 $\Gamma$ 或 $\phi$ 之中的變數。

1. $\Gamma\vdash\phi\Rightarrow\Gamma[x/c]\vdash\phi[x/c]$。
2. 若 $c$ 並未出現在 $\Gamma$ 中，則 $\Gamma\vdash\phi(c)\Rightarrow\Gamma\vdash\forall x\phi(x)$。

## 2.9 加入存在量詞

我們將 $\exist x\phi(x)$ 作為 $\neg\forall x \neg \phi(x)$ 的縮寫引入。

**〔引理 2.9.1〕** 

1. $\phi(t)\vdash\exists x\phi(x)$，當 $t$ 對於在 $\phi$ 的 $x$ 是自由的，
2. $\Gamma,\phi(x)\vdash\psi\Rightarrow\Gamma,\exist x\phi(x)\vdash\psi$，若 $x$ 在 $\psi$ 或任何 $\Gamma$ 中的句式是自由的。

**存在引入與移出規則**：

$
\begin{matrix}
&\phi(x) &\enspace _{(\exist I)}\\\hline
&\exist x \phi(x)
\end{matrix}
$

$
\begin{matrix}
&\begin{matrix} \\ \\ \exist x\phi(x) \end{matrix} \quad \begin{matrix} [\phi] \\ ... \\ \psi\end{matrix} &\begin{matrix} \\ \\ \enspace _{(\exist E)}\end{matrix}\\\hline
&\psi
\end{matrix}
$

**〔定理 2.9.2〕** 考慮有所有語言的和所有連接詞規則的述詞邏輯，$\vdash\exist x\phi(x)\leftrightarrow\neg\forall x\neg\phi(x)$。

---

**總結** 對存在與全稱量詞規則的更精確的寫法，是透過取代來表述：

$
\begin{matrix}
&\phi &\enspace _{(\forall I)}\\\hline
&\forall x \phi
\end{matrix}
$

$
\begin{matrix}
&\forall x\phi &\enspace _{(\forall E)}\\\hline
&\phi[t/x]
\end{matrix}
$

$
\begin{matrix}
&\phi [t/x] &\enspace _{(\exist I)}\\\hline
&\exist x \phi
\end{matrix}
$

$
\begin{matrix}
&\begin{matrix} \\ \\ \exist x\phi \end{matrix} \quad \begin{matrix} [\phi] \\ ... \\ \psi\end{matrix} &\begin{matrix} \\ \\ \enspace _{(\exist E)}\end{matrix}\\\hline
&\psi
\end{matrix}
$

## 2.10 自然演繹法與同一關係

公理 $I_1 - I_4$ ：

$\begin{aligned}
I_1 \quad &\forall x(x=x)\\
I_2 \quad &\forall xy (x=y\rightarrow y=x)\\
I_3 \quad &\forall xyz(x=y\wedge x=z \rightarrow x=z)\\
I_4 \quad 
   &\forall x_1...x_ny_1...y_n(\displaystyle{\bigwedge_{i\leq n}x_i=y_i\rightarrow t(x_1,...,x_n) = t(y_1,...,y_n)}) \\
   &\forall x_1...x_ny_1...y_n(\displaystyle{\bigwedge_{i\leq n}x_i=y_i\rightarrow (\phi(x_1,...,x_n) \rightarrow \phi(y_1,...,y_n))})
\end{aligned}$

對應的自然演繹法形式：

$
\begin{matrix}
& &\enspace_{(RI_1)}\\\hline
&x = x
\end{matrix}
$

$
\begin{matrix}
&x=y &\enspace_{(RI_2)}\\\hline
&y=x
\end{matrix}
$

$
\begin{matrix}
&x=y \quad y=z &\enspace_{(RI_3)}\\\hline
&x=z
\end{matrix}
$

$
\begin{matrix}
&x_1=y_1,...,x_n=y_n  &\enspace_{(RI_4)}\\\hline
&t(x_1,...,x_n) = t(x_1,...,x_n)
\end{matrix}
$

$
\begin{matrix}
&x_1=y_1,...,x_n=y_n \quad \phi(x_1,...,x_n) &\enspace_{(RI_4)}\\\hline
&\phi(y_1,...,y_n)
\end{matrix}
$

---

**〔引理 2.10.1〕** $\vdash I_i$，對於 $i=1,2,3,4$。

---

**〔引理 2.10.2〕** 令 $L$ 是類似型 $\lang r_1,...,r_n;a_1,...,a_m;k\rang$。給定下述兩條規則，$I_4$ 是可演繹的：

1. $\begin{matrix} &x_1=y_1,...,x_{r_i}=y_{r_i} \quad P_1(x_1,...,x_{r_i}) &\enspace_{(i\leq n)}\\\hline &P_1(y_1,...,y_{r_i}) \end{matrix}$
2. $\begin{matrix} &x_1=y_1,...,x_{a_j}=y_{a_j} &\enspace_{(j\leq m)}\\\hline &f_j(x_1,...,x_{a_j}) = f_j(y_1,...,y_{a_j}) \end{matrix}$

> **證明：**
> 
> （$I_4-1$）歸納法，假設 $x=y\vdash s(x)=s(y)$，令 $t(x) = f(s(x))$，證明 $x=y\vdash t(x)=t(y)$。
> 
> （$I_4-2$）歸納法，證明 $\overrightarrow{x}=\overrightarrow{y}\Rightarrow\phi(\overrightarrow{x})=\phi(\overrightarrow{y})$。
> 
> 分成四個狀況討論：(1) $\phi$ 是原子、(2) $\phi = \sigma \rightarrow\pi$、(3) $\phi = \sigma\wedge\pi$、(4) $\phi = \forall x\psi(z,\overrightarrow{x})$。
