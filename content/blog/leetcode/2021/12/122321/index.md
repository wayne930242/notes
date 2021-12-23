---
title: Leetcode 練習：2021-12-23
date: "2021-12-23"
category: Codeing
tags:
 - js
 - leetcode
---

## Convert Sorted Array to Binary Search Tree
[題號：108](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)

```js
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null
  const mid = Math.floor(nums.length / 2)
  return {
    val: nums[mid],
    left: sortedArrayToBST(nums.slice(0, mid)),
    right: sortedArrayToBST(nums.slice(mid + 1)),
  }
}
```

## Balanced Binary Tree
[題號：110](https://leetcode.com/problems/balanced-binary-tree/)

```js
var isBalanced = function(root) {
  const deep = (root) => {
    if (root === null) return 0
    const leftDeep = deep(root.left)
    const rightDeep = deep(root.right)
    if (Math.abs(leftDeep - rightDeep) > 1) return Infinity
    return Math.max(leftDeep, rightDeep) + 1 
  }
  return deep(root) < Infinity
}
```

## Course Schedule II
[題號：210](https://leetcode.com/problems/course-schedule-ii/)

```js
var findOrder = function(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0)  
  const graph = new Array(numCourses).fill([]) 
  // graph 的每個點都放從 a 點 out 到 b 的邊。
  // indegree 放每個 b 點的 in-degree。
  
  const result = []

  for (const [a, b] of prerequisites) {
    graph[a] = [...graph[a], b]
		indegree[b] += 1
  }
  
  // 以下進行拓樸排序：
  const queue = []
  // 用不需要先修課的節點加入來初始化佇列：
  for (const i in indegree) {
		if (indegree[i] === 0) queue.push(i)
	}
  while(queue.length){
		const node = queue.shift()
		result.unshift(node)
		for (const n of graph[node]){
			indegree[n] -= 1
			if (indegree[n] === 0) queue.push(n)
		}
	}

  if (!indegree.every(i => i===0)) return [] // 沒辦法成功做出排序。
	return result 
}
```
