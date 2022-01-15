---
title: 3. 完備性與其他應用 
date: "2022-01-15"
category: Logic
tags:
 - philosophy
 - reading
---

> Dirk van Dalen, *Logic and Structure, 4th*.

## 3.1 完備性定理

兩個重要工具：

**〔引理 3.1.1（模型存在引理）〕** 若 $\Gamma$ 是一個一致語句集，則 $\Gamma$ 有一個模型。

**〔引理 3.1.2〕** 令 $L$ 的基數為 $\kappa$。若 $\Gamma$ 是一個一致語句集，則 $\Gamma$ 有一個基數 $\leq\kappa$ 的模型。

需要證明的：

**〔定理 3.1.3（完備性定理）〕** $\Gamma\vdash\phi\Leftrightarrow\Gamma\vDash\phi$。

---

**〔定義 3.1.4〕**

1. 一個定理 $T$ 是一個具 $T\vdash\phi\Rightarrow\phi\in T$ 性質的語句集合（即定理是演繹封閉的），
2. 一個使得 $T = \{ \phi|\Gamma\vdash\phi \}$ 的 $\Gamma$ 是定理 $T$ 的公理集合，裡面的元素稱之為公理，
3. $T$ 是一個 Henkin 定理，若每個 $\exist x\phi(x)$，都存在常數 $c$ 使得 $\exist x\phi(x)\rightarrow\phi(c)\in T$，這樣的 $c$ 稱作 $\exist x\phi(x)$ 的目擊（witness）。

---

**〔定義 3.1.5〕** 令 $T$ 和 $T'$ 分別是語言 $L$ 和 $L'$ 的定理：

1. $T'$ 是 $T$ 的擴展（extension），若 $T\sube T'$。
2. $T'$ 是 $T$ 的保守擴展（conservative extension），若 $T'\cap L=T$。

---

**〔定義 3.1.6〕** 令 $T$ 是 $L$ 的定理。語言 $L^*$ 來自 $L$ 為每個語句 $\exist x\phi(x)$ 加上目擊的常數 $c_\phi$。$T^*$ 是一個有公理集合 $T\cup\{\exist x\phi(x)\rightarrow\phi(c_\phi)|\exist x\phi(x) \text{ 是封閉的，且有目擊 }c_\phi\}$ 的定理。

---

**〔引理 3.1.7〕** $T^*$ 是 $T$ 的保守擴展。

> **證明**：令 $\exist x\phi(x)\rightarrow\phi(c)$ 是一個新公理，$\Gamma$ 是 $T$ 的公理集合，假設 $\Gamma,\exist x\phi(x)\rightarrow\phi(c)\vdash\psi$ 且 $c$ 不在 $\psi$ 中出現，以推論規則證明 $\Gamma\vdash\psi$。再透過歸納法證明，若 $\psi\in T^*$ 且 $\psi\in L$，則 $\psi\in T$。

---

**〔引理 3.1.8〕** 定義 $T_0\coloneqq T ; T_{n+1}=(T_n)^*$，定義 $T_\omega\coloneqq\cup\{T_n|n\geq 0\}$。則 $T_\omega$ 是一個 Henkin 定理，並且是 $T$ 上的保守擴展。

**〔系理 3.1.8.1〕** 若 $T$ 是一致的，則 $T_\omega$ 是一致的。

> **證明**：若 $T_\omega\vdash\bot$，則因保守性 $T\vdash\bot$。

---

**〔引理 3.1.9（Lindenbaum）〕** 每個一致定理都包含在最大一致定理中。

> **證明**：考慮 $T$ 是一致定理，令定理 $A$ 是 $T$ 所有的一致擴展 $T_i$ 的集合，有偏序的包含關係。令 $\{T_i|i\in I\}$ 是任意一個鏈，由於 $T'=\bigcup T_i$（可簡單看出 $T'$ 是一致的）是任何 $T_i$ 的上界，因此根據 Zorn 引理，$A$ 有最大元素 $T_m$。這個 $T_m$ 即包含 $T$ 的最大一致集合。

---

**〔引理 3.1.10〕** Henkin 定理在同一個語言中的擴展依然是 Henkin 定理。

---

**〔引理 3.1.11（模型存在引理）〕** 若 $\Gamma$ 是一致的，則 $\Gamma$ 有模型。

> **證明**
> 
> 令 $T = \{\sigma|\Gamma\vdash\sigma\}$ 是一個定理，$T$ 的模型就會是 $\Gamma$ 的模型。令 $T_m$ 是 $T$ 的最大一致 Henkin 擴展，語言 $L_m$。
>
> 建立模型 $\mathfrak{A}$ 如下：
> 
> 1. $A=\{t\in L_m| t\text{ 是封閉的}\}$。
> 2. 為每個 $\overline{f}$ 函數符號，定義 $\hat{f}: A^k\rightarrow A$ 為 $\hat{f}(t_1,...,t_k)\coloneqq \overline{f}(t_1,...,t_k)$。
> 3. 為每個述詞符號 $\overline{P}$，定義 $\hat{P}\sube A^p$ 為 $\lang t_1,...,t_p\rang\in\hat P\Leftrightarrow T_m\vdash \overline P(t_1,...,t_p)$。
> 4. 為每個常數 $\overline c$ 定義 $\hat c\coloneqq\overline c$。
> 
> 接著證明 $\backsim$（$\coloneqq t\backsim s \Leftrightarrow T_m\vdash t=s$）符合公理 $I_1-I_4$。
> 
> 最後，證明 $\mathfrak{A}$ 是 $T$ 的一個模型：
> 
> 1. 證明對於 $t\in A$，$\mathfrak{A}\vDash\phi(t)\Leftrightarrow\mathfrak{A}\vDash\phi(\overline{[t]})$。
> 2. 