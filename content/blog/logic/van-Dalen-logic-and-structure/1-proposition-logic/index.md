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

---

**〔定理 1.2.6 替代定理〕** 若 $\models \phi_1 \leftrightarrow \phi_2$，則 $\psi[\phi_1/p] \leftrightarrow \psi[\phi_2/p]$，$p$ 是一個原子語句。

> **說明**：可以更嚴謹地以遞迴定義。
> 
> **性質〔引理 1.2.7〕**，可以由歸納法證明：
> 
> 1. $\llbracket \phi_1 \leftrightarrow \phi_2 \rrbracket_v \leq \llbracket \psi[\phi_1 / p] \leftrightarrow \psi [ \phi_2/p] \rrbracket_v$。
> 2. $\models (\phi_1 \leftrightarrow \phi_2) \rightarrow (\psi[\phi_1/p] \leftrightarrow \phi[\phi_2 / p])$。
