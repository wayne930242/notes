---
title: Leetcode 練習：2022-01-03
date: "2022-01-03"
category: Codeing
tags:
 - ruby
 - leetcode
---

## Find the Town Judge 
[題號：997](https://leetcode.com/problems/find-the-town-judge/)

```ruby
def find_judge(n, trust)
  return 1 if n == 1
  people = Array.new(n, 0)
  trust.each do |truster, trustee|
    people[trustee - 1] += 1
    people[truster - 1] = -1.0/0.0 # -Infinity
  end
  people.index(n-1) ? people.index(n-1) + 1 : -1
end
```
