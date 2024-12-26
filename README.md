# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug: an infinite loop caused by incorrectly using the `useEffect` hook.

## The Bug

The `bug.js` file contains a component that uses `useEffect` to increment a counter.  However, the dependency array is empty (`[]`), meaning the effect runs after every render.  Inside the effect, `setCount(count + 1)` updates the count, causing a re-render, which triggers the effect again, leading to an infinite loop. 

## The Solution

The `bugSolution.js` file demonstrates the correct way to use `useEffect` to avoid this problem. By adding `count` as a dependency, the effect only runs when the `count` changes, resolving the infinite loop issue. 
