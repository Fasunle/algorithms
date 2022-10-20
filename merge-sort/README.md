# Merge Sort Algorithm

This is a `sorting algorithm` which uses `divide-and-conquer approach`. Essentially, Large array are recursively divided into smaller sub-arrays until a base case is hited (a sub-array with one item). The result is then combined/`merged` in a final step.

The first step is to split the array into equal halves and this new array is then conquered by recursively splitting the array until each sun-array has only one item (Naturally, a single item array is sorted!). This result in `O(logn) time complexity`

In the sencond step, the sorted sub-arrays are the combined in a linear time i.e `O(n) time complexity`.

Overall time complexity will be `O(nlogn) time complexity`.
