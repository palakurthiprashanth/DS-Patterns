1) Do inorder traversal of first tree and store the traversal in one temp array arr1[]. This step takes O(m) time.
2) Do inorder traversal of second tree and store the traversal in another temp array arr2[]. This step takes O(n) time.
3) The arrays created in step 1 and 2 are sorted arrays. Merge the two sorted arrays into one array of size m + n. This step takes O(m+n) time.
4) Construct a balanced tree from the merged array using the technique discussed without sorting as it is already sorted
https://github.com/palakurthiprashanth/DS-Patterns/blob/main/Trees/9.ConstructBalancedBSTFromArray.js
