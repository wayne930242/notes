---
title: Leetcode 練習：2022-01-04
date: "2022-01-04"
category: Codeing
tags:
 - ruby
 - leetcode
---

## Complement of Base 10 Integer
[題號：1009](https://leetcode.com/problems/complement-of-base-10-integer/)

```ruby
def bitwise_complement(n)
  return 1 if n == 0
  bit = Math::log(n,2).floor + 1
  binary = ("1" * bit).to_i(2)
  binary ^ n
end
```