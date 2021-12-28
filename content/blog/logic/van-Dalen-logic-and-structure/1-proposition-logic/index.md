---
title: 1. 命題邏輯 
date: "2021-12-26"
category: Logic
tags:
 - philosophy
 - reading
---

## 1.1 命題與連接詞

**〔定義 1.1.1 字母〕** 命題邏輯由以下字母構成：

1. 命題符號（proposition symbols）：$p_0$、$p_1$、$p_2$ ……，
2. 連接詞（connectives）：$\wedge$、$\vee$、$\rightarrow$、$\neg$、$\leftrightarrow$、$\bot$，
3. 輔助符號（auxiliary symbols）：$($、$)$。

---

**〔定義 1.1.2 構式規則（formation rule）〕** 命題集合 $PROP$ 是最小的滿足以下性質的集合 *X*：

1. $p_i(i\in \mathbb{N})\in X$、$\bot\in X$，
2. $\phi, \psi \in X \Rightarrow (\phi \wedge \psi), (\phi \vee \psi), (\phi \rightarrow \psi), (\phi \leftrightarrow \psi) \in X$，或縮寫成 $(\phi \Box \psi \in X)$，
3. $\phi \in X \Rightarrow (\neg \phi) \in X$。

---

**〔定理 1.1.3 歸納法原理〕** 令 $A$ 是一個性質，則 $A(\phi)$ 對所有的 $\phi \in PROP$ 成立，若：

1. $A(p_i)$，對於所有 $i$，以及 $A(\bot)$，
2. $A(\phi), A(\psi) \Rightarrow A((\phi \Box \psi))$，
3. $A(\phi) \Rightarrow A((\neg\phi))$。

> **說明**：我們將定理 1.1.3 的應用稱之為「以在 $\phi$ 上的歸納法證明」。

---

**〔定義 1.1.4 構式序列〕** $\langle \phi_i \rangle (i \leq n \in \mathbb{N})$ 稱為 $\phi$ 的構式序列（formation sequence），若對於所有 $i$：

1. $\phi_i$ 是原子語句，或
2. 存在 $j, k < i$ 使得 $\phi_i = (\phi_j \Box \phi_k)$，或
3. 存在 $j < i$ 使得 $\phi_i = (\neg \phi_j)$。

> **性質**：
> 1. 所有命題都有偶數數量的括號。
> 2. 所有命題都有構式序列。
> 3. $PROP$ 是一個所有表述都有構式序列的集合（**〔定理 1.1.5〕**）。

---

**〔定理 1.1.6 遞迴定義〕** 給定 $H_\Box: A^2 \rightarrow A$、$H_\neg: A^2 \rightarrow A$ 和 $H_{at}: A \rightarrow A$ 的由運算子自然定義的函數，存在唯一的函數 $F: PROP \rightarrow A$ 使得：

* $F(\phi) = H_{at}(\phi)$，對於原子語句 $\phi$，
* $F((\phi \Box \psi)) = H_\Box (F(\phi), F(\psi))$，
* $F((\neg \phi)) = H_\neg(F(\phi))$。

> **證明**：以歸納法證明唯一性與存在性（取一個關係集合的聯集，並證明這個聯集也是一個函數）。

---

**〔定義 1.1.7 子句式〕** 子句式的集合 $Sub(\phi)$ 遞迴定義如下：

* $Sub(\phi) = \{ \phi \}$ 對於原子語句 $\phi$，
* $Sub(\phi_1 \Box \phi_2) = Sub(\phi_1) \cup Sub(\phi_2) \cup \{ \phi_1 \Box \phi_2 \}$，
* $Sub(\neg \phi) = Sub(\phi) \cup \{\neg \phi\}$。

> **說明**：
> 1. 根據 **〔定理 1.1.6〕**，子句式集合是良好定義的。
> 2. 若 $\psi \in Sub(\phi)$，可以寫作 $\psi \prec \phi$。

---

**〔定義 1.1.8 秩上的歸納法原理（Induction on rank-Principle）〕** 若 $\forall r(\psi) < r(\phi) [A(\psi)] \Rightarrow A(\phi)$，則 $\forall \phi \in PROP[A(\phi)]$，其中 $r$ 遞迴定義如下：

* $r(\phi) = 0$，對於原子語句 $\phi$，
* 若 $\phi = \psi_1 \Box \psi_2$，則 $r(\phi) = max(\psi_1, \psi_2) + 1$，
* 若 $\phi = \neg \psi$，則 $r(\phi) = r(\psi) + 1$。

## 1.2 語義學

**〔定義 1.2.1 賦值（valuation）〕** $v: PROP \rightarrow \{0,1\}$ 是一個賦值，若：

* $v(\phi \wedge \psi) = min(v(\phi), v(\psi))$，
* $v(\phi \vee \psi = max(v(\phi), v(\psi))$，
* $v(\phi \rightarrow \psi) = 0 \Leftrightarrow v(\phi) = 1$ 且 $v(\psi) = 0$，
* $v(\phi \leftrightarrow \psi) = 1 \Leftrightarrow v(\phi) = v(\psi)$，
* $v(\neg \phi) = 1 - v(\phi)$，
* $v(\bot) = 0$。

---

**〔定理 1.2.2 賦值唯一性〕** 若 $v$ 是從原子語句到 $\{0,1\}$ 的滿足 $v(\bot) = 0$ 的函數，則存在唯一的賦值 $\llbracket . \rrbracket_v$ 使得對於所有原子語句 $\phi$，$\llbracket \phi \rrbracket_v = v(\phi)$。

---

**〔引理 1.2.3 真值函數〕** 若對於所有在 $\phi$ 中出現的 $p_i$，$v(p_i) - v'(p_i)$，則 $\llbracket \phi \rrbracket_v = \llbracket \phi \rrbracket_{v'}$。

---

**〔定義 1.2.4 恆真句（tautology）〕**

1. $\phi$ 是一個恆真句，若且唯若，對於所有賦值 $v$，$\llbracket \phi \rrbracket_v = 1$。
2. 簡寫成 $\models \phi$。
3. 令 $\Gamma$ 是一個命題集合，$\Gamma \models \phi$，若且唯若，對於所有使得 $\forall \psi \in \Gamma [\llbracket \psi \rrbracket_v = 1]$ 的賦值 $v$，$\llbracket \phi \rrbracket_v = 1$。

---

**〔定義 1.2.5 替代〕** $\phi [\psi / p_i]$，代表以 $\psi$ 替代在 $\phi$ 中出現的所有原子語句 $p_i$。

> **說明**：可以更嚴謹地以遞迴定義。

---

**〔定理 1.2.6 替代定理〕** 若 $\models \phi_1 \leftrightarrow \phi_2$，則 $\psi[\phi_1/p] \leftrightarrow \psi[\phi_2/p]$，$p$ 是一個原子語句。
 
> **性質〔引理 1.2.7〕**：
> 
> 1. $\llbracket \phi_1 \leftrightarrow \phi_2 \rrbracket_v \leq \llbracket \psi[\phi_1 / p] \leftrightarrow \psi [ \phi_2/p] \rrbracket_v$。
> 2. $\models (\phi_1 \leftrightarrow \phi_2) \rightarrow (\psi[\phi_1/p] \leftrightarrow \phi[\phi_2 / p])$。

## 1.3 命題邏輯的一些性質

**〔定理 1.3.1〕** 以下命題為恆真句：

1. 結合性（associativity）：
   * $(\phi \vee \psi) \vee \sigma \leftrightarrow \phi \vee (\psi \vee \sigma)$
   * $(\phi \wedge \psi) \wedge \sigma \leftrightarrow \phi \wedge (\psi \wedge \sigma)$
2. 交換性（commutativity）：
   * $\phi \vee \psi \leftrightarrow \psi \vee \phi$
   * $\phi \wedge \psi \leftrightarrow \psi \wedge \phi$
3. 分配性（distributivity）：
   * $\phi \vee (\psi \wedge \sigma) \leftrightarrow (\phi \vee \psi) \wedge (\phi \vee \sigma)$
   * $\phi \wedge (\psi \vee \sigma) \leftrightarrow (\phi \wedge \psi) \vee (\phi \wedge \sigma)$
4. 迪・摩根律（De Morgan’s laws）：
   * $\neg (\phi \vee \psi) \leftrightarrow \neg \phi \wedge \neg \psi$
   * $\neg (\phi \wedge \psi) \leftrightarrow \neg \phi \vee \neg \psi$
5. 冪等性（idempotency）：
   * $\phi \vee \phi \leftrightarrow \phi$
   * $\phi \wedge \phi \leftrightarrow \phi$
6. 雙重否定律（double negation law）：
   * $\neg \neg \phi \leftrightarrow \phi$

---

**〔引理 1.3.2〕** 若 $\models \phi \rightarrow \psi$，則 $\models \phi \wedge \psi \leftrightarrow \phi$ 且 $\models \phi \vee \psi \leftrightarrow \psi$。

---

**〔引理 1.3.3〕**

1. $\models \phi \Leftrightarrow \models \phi \wedge \psi \leftrightarrow \psi$
2. $\models \phi \Leftrightarrow \models \neg \phi \vee \psi \leftrightarrow \psi$
3. $\models \bot \vee \psi \leftrightarrow \phi$
4. $\models \top \wedge \psi \leftrightarrow \phi$

---

**〔定理 1.3.4〕**

1. $\models (\phi \leftrightarrow \psi) \leftrightarrow (\phi \rightarrow \psi) \wedge (\psi \rightarrow \phi)$
2. $\models (\phi \rightarrow \psi) \leftrightarrow (\neg \phi \vee \psi)$
3. $\models (\phi \vee \psi) \leftrightarrow (\neg \phi \rightarrow \psi)$
4. $\models \phi \vee \psi \leftrightarrow \neg (\neg \phi \wedge \neg \psi)$
5. $\models \phi \wedge \psi \leftrightarrow \neg (\neg \phi \vee \neg \psi)$
6. $\models \neg \phi \leftrightarrow \phi \rightarrow \bot$
7. $\models \top \leftrightarrow \phi \wedge \neg \phi$

---

我們將 $\models \phi \leftrightarrow \psi$ 簡寫成 $\phi \approx \psi$。

---

**〔引理 1.3.5〕** $\approx$ 是一個等同關係（equivalence relation）。

---

Sheffer stroke： $\phi | \psi = \neg (\phi \wedge \psi)$ 

---

**〔定理 1.3.6〕** 對於任何一個由賦值所定義的 $n$ 列連接詞 $\text{\textdollar}$，存在一個只包含 $p_1$、……、$p_n$、$\vee$ 和 $\neg$ 的命題 $\gamma$，使得 $\models \gamma \leftrightarrow \text{\textdollar}(p_1, ..., p_n)$。

> 證明：透過歸納法。定義 $\text{\textdollar}_1$ 與 $\text{\textdollar}_2$ 使得
> 
> * $\text{\textdollar}_1(p_2,...,p_{n+1}) = \text{\textdollar}(\bot, p_2, ..., p_{n+1})$ 且
> * $\text{\textdollar}_2(p_2,...,p_{n+1}) = \text{\textdollar}(\top, p_2, ..., p_{n+1})$。
> 
> 假設 $\models \text{\textdollar}_i (p_2, ..., p_{n+1}) \leftrightarrow \sigma_i$。
> 
> 將 $\gamma$ 定義為 $(p_1 \rightarrow \sigma_2) \wedge (\neg p_1 \rightarrow \sigma_1)$，並證明 $\models \text{\textdollar}(p_1,... ,p_{n+1}) \leftrightarrow \gamma$。

---

**〔定義 1.3.7〕** 

* $\displaystyle\bigwedge_{i \leq 0} \phi_i = \phi_0$
* $\displaystyle\bigwedge_{i \leq n+1} \phi_i = \bigwedge_{i \leq n} \phi_i \wedge \phi_{n+1}$
* $\displaystyle\bigvee_{i \leq 0} \phi_i = \phi_0$
* $\displaystyle\bigvee_{i \leq n+1} \phi_i = \bigvee_{i \leq n} \phi_i \vee \phi_{n+1}$

---

**〔定義 1.3.8：連言與選言標準式〕**

* 若 $\phi = \bigwedge \bigvee \phi_{ij}$，其中 $\phi_{ij}$ 都是原子語句或是原子語句加上 $\neg$ ，$\phi$ 稱為一個連言標準式（conjunctive normal form）。
* 若 $\phi = \bigvee \bigwedge \phi_{ij}$，其中 $\phi_{ij}$ 都是原子語句或是原子語句加上 $\neg$ ，$\phi$ 稱為一個選言標準式（disjunctive normal form）。

---

**〔定理 1.3.9〕** 對於任何 $\phi$，存在連言標準式 $\phi^{\wedge}$ 和選言標準式 $\phi^{\vee}$，使得 $\phi \approx \phi^{\wedge} \approx \phi^{\vee}$。

---

**〔定義 1.3.10〕** 輔助對應（auxiliary mapping）$^\ast: PROP \rightarrow PROP$ 遞迴定義如下：

* $\phi^{\ast} = \neg \phi$，其中 $\phi$ 是原子語句，
* $(\phi \wedge \psi)^{\ast} = \phi^{\ast} \vee \psi^{\ast}$，
* $(\phi \vee \psi)^{\ast} = \phi^{\ast} \wedge \psi^{\ast}$，
* $(\neg \phi)^{\ast} = \neg \phi^{\ast}$。

---

**〔引理 1.3.11〕** $\llbracket\phi^\ast\rrbracket=\llbracket\neg\phi\rrbracket$。

> **性質**：
> 
> * $\phi^\ast\approx\neg\phi$（**〔系理 1.3.12〕**）

---

**〔定義 1.3.13〕** 對偶對應（duality mapping）$^d: PROP \rightarrow PROP$ 遞迴定義如下：

* $\phi^d = \phi$，其中 $\phi$ 是原子語句，
* $(\phi \wedge \psi)^d = \phi^d \vee \psi^d$，
* $(\phi \vee \psi)^d = \phi^d \wedge \psi^d$，
* $(\neg \phi)^d = \neg \phi^d$。

---

**〔定理 1.3.14 對偶定理〕** $\phi \approx \phi \Leftrightarrow \phi^d \approx \psi^d$。

## 1.4 自然演繹法

### 演繹規則

**引入規則**：

$
\begin{aligned}
\phi &\quad \psi \enspace _{(\wedge I)} \\\hline
\phi &\wedge \psi 
\end{aligned}
$

---

$
\begin{aligned}
&[\phi]\\
&...\\
&\psi \enspace _{(\rightarrow I)} \\ \hline
\phi &\rightarrow \psi
\end{aligned}
$

**移出規則**：

$
\begin{aligned}
\phi &\wedge \psi \enspace _{(\wedge E)} \\\hline
&\phi 
\end{aligned}
$

---

$
\begin{aligned}
\phi &\wedge \psi \enspace _{(\wedge E)} \\\hline
&\psi 
\end{aligned}
$

---

$
\begin{aligned}
\phi &\quad \phi \rightarrow \psi \enspace _{(\rightarrow E)} \\\hline
&\psi 
\end{aligned}
$

---

$
\begin{aligned}
&\bot \enspace _{(\bot)} \\\hline
&\phi
\end{aligned}
$

---

$
\begin{aligned}
[\neg &\phi]\\
&...\\
&\bot \enspace _{(RAA)} \\ \hline
&\phi
\end{aligned}
$

---

**〔定義 1.4.1〕** 演繹集合（the set of derivations）是滿足下列性質的最小集合：

(1) 對於所有 $\phi\in PROP$，單一元素樹 $\phi \in X$。

(2 $\wedge$)

若 $\begin{matrix}D\\ \phi\end{matrix} \ , \begin{matrix}D'\\ \phi'\end{matrix} \in X$，則 $\begin{matrix} \begin{matrix}D\\ \phi\end{matrix} \quad \begin{matrix}D'\\ \phi'\end{matrix} \\ \hline \phi \wedge \phi' \end{matrix} \in X$。

若 $\begin{matrix} D \\ \phi \wedge \psi \end{matrix} \in X$，則 $\begin{aligned} &D \\ \phi &\wedge \psi \\ \hline &\phi \end{aligned}, \begin{aligned} &D \\ \phi &\wedge \psi \\ \hline &\psi \end{aligned} \in X$。

(2 $\rightarrow$)

若 $\begin{matrix}\phi \\ D \\ \psi\end{matrix} \in X$，則 $\begin{matrix} [\phi] \\ D \\ \psi \\ \hline \phi \rightarrow \phi \end{matrix} \in X$。

若 $\begin{matrix} D \\ \phi \end{matrix},\begin{matrix} D' \\ \phi \rightarrow \psi \end{matrix}  \in X$，則 $\begin{matrix}  \begin{matrix} D \\ \phi \end{matrix} \quad \begin{matrix} D' \\ \phi \rightarrow \psi \end{matrix} \\ \hline \psi \end{matrix} \in X$。

(2 $\bot$)

若 $\begin{matrix} D \\ \bot \end{matrix} \in X$，則 $\begin{matrix} D \\ \bot \\ \hline \phi \end{matrix} \in X$。

若 $\begin{matrix} \neg \phi \\ D \\ \bot \end{matrix} \in X$，則 $\begin{matrix} [\neg\phi] \\ D \\ \bot \\ \hline \phi \end{matrix} \in X$。

---

**〔定義 1.4.2〕** $\Gamma \vdash \phi$ 的意思是「可以以 $\Gamma$（一個命題集合）的命題作為假設演繹出 $\phi$」。

---

**〔引理 1.4.3〕**

1. 若 $\phi \in \Gamma$，則 $\phi \vdash \Gamma$，
2. $\Gamma \vdash \phi, \Gamma' \vdash \psi \Rightarrow \Gamma \cup \Gamma' \vdash \phi \wedge \psi$，
3. $\Gamma \vdash \phi \wedge \psi \Rightarrow \Gamma \vdash  \phi$ 且 $\Gamma \vdash \psi$，
4. $\Gamma \cup \{\phi\} \vdash \psi \Rightarrow \Gamma \vdash \phi \rightarrow \psi$，
5. $\Gamma \vdash \phi, \Gamma' \vdash \phi \rightarrow \psi \Rightarrow \Gamma \cup \Gamma' \vdash \psi$。
6. $\Gamma \vdash \bot \Rightarrow \Gamma \vdash \phi$。
7. $\Gamma \cup \{ \neg \phi \} \vdash\bot \Rightarrow \Gamma\vdash\phi$。

---

**〔定理 1.4.4〕**

1. $\vdash \phi\rightarrow(\psi\rightarrow\phi)$，
1. $\vdash \phi\rightarrow(\neg\phi\rightarrow\psi)$，
1. $\vdash (\phi\rightarrow\psi)\rightarrow[(\psi\rightarrow\sigma)\rightarrow(\phi\rightarrow\sigma)]$，
1. $\vdash (\phi\leftrightarrow\psi)\rightarrow(\neg\psi\rightarrow\neg\phi)$，
1. $\vdash \neg\neg\phi\leftrightarrow\phi$，
1. $\vdash [\phi\rightarrow(\psi\rightarrow\sigma)]\leftrightarrow(\phi\wedge\psi\rightarrow\sigma)$，
1. $\vdash \bot\leftrightarrow(\phi\wedge\neg\phi)$。

---

## 1.5 完備性

**〔定理 1.5.1 健全性〕** $\Gamma \vdash \phi \Rightarrow \Gamma \vDash \phi$。

> **證明：** 以歸納法證明。

---

**〔定義 1.5.2 （語法的）一致性〕** 若 $\Gamma\nvdash\bot$，則我們說 $\Gamma$ 是一致的。

---

**〔引理 1.5.3〕** 以下三個條件是等同的：

1. $\Gamma$ 是一致的，
2. 不存在 $\phi$ 使得 $\Gamma\vdash\phi$ 且 $\Gamma\vdash\neg\phi$。
3. 存在一個 $\phi$ 使得 $\Gamma\nvdash\phi$。

---

**〔引理 1.5.4〕** 若存在賦值 $v$ 使得，對於所有 $\psi\in\Gamma$，$\llbracket\psi\rrbracket_v = 1$，則 $\Gamma$ 是一致的。

---

**〔引理 1.5.5〕〕**

1. $\Gamma\cup\{\neg\phi\}$ 是不一致的 $\Rightarrow$ $\Gamma\vdash\phi$。
2. $\Gamma\cup\{\phi\}$ 是不一致的 $\Rightarrow$ $\Gamma\vdash\neg\phi$。

---

**〔定義 1.5.6〕** 一個集合 $\Gamma$ 是最大一致的（maximally consistent），若且唯若

1. $\Gamma$ 是一致的，
2. $\Gamma \sube \Gamma'$ 且 $\Gamma'$ 是一致的 $\Rightarrow \Gamma = \Gamma'$。

---

**〔引理 1.5.7〕** 對於任何一致的集合 $\Gamma$，存在一個包含 $\Gamma$ 的最大一致集合 $\Gamma^*$。

> **證明**：
> 
> 令
> 
> $\begin{aligned}\Gamma_0 &= \Gamma\\\Gamma_{n+1}&=\begin{cases}\Gamma_n\cup\{\phi_n\} &\text{若 }\Gamma\text{ 是一致的，}\\\Gamma_n &\text{其他。}\end{cases}\\\Gamma^*&=\bigcup\{\Gamma_n | n \geq 0 \}\end{aligned}$ 。
> 
> 顯然，$\Gamma \sube \Gamma^*$。可以證明 $\Gamma^*$ 是一個最大一致集合。

---

**〔引理 1.5.8〕** 若 $\Gamma$ 是最大一致的，則 $\Gamma$ 是演繹封閉的。

---

**〔引理 1.5.9〕** 若 $\Gamma$ 是最大一致的，則

1. 對於所有 $\phi$，要嘛 $\phi\in\Gamma$，要嘛 $\neg\phi\in\Gamma$，
2. $\phi,\psi,\phi\rightarrow\psi\in\Gamma \Leftrightarrow (\phi\in\Gamma\Rightarrow\psi\in\Gamma)$。

> **證明**：透過〔引理 1.5.5〕與〔引理 1.5.8〕。

---

**〔系理 1.5.10〕** 若 $\Gamma$ 是最大一致的，則 $\phi\in\Gamma\Leftrightarrow\neg\phi\notin\Gamma$ 且 $\neg\phi\in\Gamma\Leftrightarrow\phi\notin\Gamma$。

---

**〔引理 1.5.11 存在性定理〕** 若 $\Gamma$ 是一致的，則存在賦值 $v$ 使得，對於所有 $\psi\in\Gamma$，$\llbracket\psi\rrbracket_v = 1$。

> **證明**：考慮 $\Gamma^*$（〔引理 1.5.7〕）。
> 
> 定義 $v$：$v(p_i)=\begin{cases}1 &\text{若 }p_i\in\Gamma^*\text{，}\\0&\text{其他。}&\end{cases}$，將 $v$ 拓展到 $\llbracket \enspace \rrbracket_v$。
> 
> 再以歸納法證明 $\llbracket\phi\rrbracket_v = 1 \Leftrightarrow \phi \in \Gamma^*$（需要〔引理 1.5.8〕與〔引理 1.5.9〕）。

---

**〔系理 1.5.12〕** $\Gamma\nvdash\phi\Leftrightarrow$ 存在賦值 $v$ 使得，對於所有 $\psi\in\Gamma$，$\llbracket\psi\rrbracket_v = 1$ 並且 $\llbracket\phi\rrbracket_v = 0$ 。

> **證明**：$\Gamma\nvdash\phi\Leftrightarrow\Gamma\cup\{\neg\phi\}$ 是一致的 $\Leftrightarrow$ 存在賦值 $v$ 使得，對於所有 $\psi\in\Gamma\cup\{\neg\phi\}$，$\llbracket\psi\rrbracket_v = 1$。

---

**〔定理 1.5.13 完備性定理〕** $\Gamma\vdash\phi\Leftrightarrow\Gamma\vDash\phi$。

> **證明**：根據〔定理 1.5.1〕，$\Rightarrow$ 成立。
>
> 若 $\Gamma\nvdash\phi$，根據〔系理 1.5.12〕，$\Gamma\nvDash\phi$。