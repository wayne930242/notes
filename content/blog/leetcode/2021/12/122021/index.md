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
  let result = head
  while (head && head.next) {
    if(head.next.val === head.val) head.next = head.next.next
    else head = head.next
  }
  return result
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
    if (security[i] < security[i + 1]) return false
  }
  for (var i = index; i < index + time; i++) {
    if (security[i] > security[i + 1]) return false
  }
  return true
}
```

## Minimum Absolute Difference
[題號：1200](https://leetcode.com/problems/minimum-absolute-difference/description/)

```js
var minimumAbsDifference = function(arr) {
  let mn = Infinity
  const result = []
  arr = arr.sort((a,b) => a-b)
  for (var i = 0; i < arr.length; i++){
    if (arr[i+1] - arr[i] <= mn) {
      mn = arr[i+1] - arr[i]
      if (!result[mn]) { result[mn] = [[arr[i], arr[i+1]]] }
      else { result[mn].push([arr[i],arr[i+1]]) }
    } 
  }

  return result[mn]
}
```