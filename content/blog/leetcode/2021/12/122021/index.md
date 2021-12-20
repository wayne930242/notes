---
title: Leetcode 練習：2021-12-20
date: "2021-12-20"
category: Codeing
tags:
 - js
 - leetcode
---

## Remove Duplicates from Sorted List
[題號：83](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)

```js
var deleteDuplicates = function(head) {
  let current = head
  const result = new Set()
  while (current) {
    if(!result.has(current.val)) result.add(current.val)
    current = current.next
  }
  return [...result].reduceRight((next,val) => ({next, val}), null)
}
```

## Merge Sorted Array
[題號：88](https://leetcode.com/problems/merge-sorted-array/description/)

```js
var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let total = m + n - 1
  while (i >= 0 || j >= 0) {
    if (i >= 0 && j >= 0 && nums1[i] < nums2[j]) {
      nums1[total--] = nums2[j--]
    } else {
      if (i >= 0) {
        nums1[total--] = nums1[i--]
      }
      else {
        nums1[total--] = nums2[j--]
      }
    }
  }
} 
```

## Find Good Days to Rob the Bank
[題號：2100](https://leetcode.com/problems/find-good-days-to-rob-the-bank/description/)

```js
var goodDaysToRobBank = function (security, time) {
  const result = []
  for (var i = 0; i < security.length; i++){
    if (checkAB(security, i, time)) result.push(i)
  }
  return result
}

const checkAB = (security, index, time) => {
  if (
    index + time > security.length - 1 ||
    index - time < 0
  ) return false
  for (var i = index - time; i < index; i++) {
    console.log(i, security[i],security[i + 1])
    if (security[i] < security[i + 1]) return false
  }
  for (var i = index; i < index + time; i++) {
    console.log(i, security[i],security[i + 1])
    if (security[i] > security[i + 1]) return false
  }
  return true
}
```