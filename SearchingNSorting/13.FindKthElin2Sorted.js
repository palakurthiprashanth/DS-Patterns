function findKth(arr1, arr2, k) {
    let sorted= [];
    let l1= arr1.length;
    let l2= arr2.length;
    let i= 0;
    let j= 0;

    while(i<l1 && j<l2) {
        if (arr1[i] < arr2[j]) {
            sorted.push(arr1[i]);
            i++
        }else {
            sorted.push(arr2[j]);
            j++;
        }
    }
    while(i <l1) {
        sorted.push(arr1[i]);
        i++;
    }
    while(j<l2) {
        sorted.push(arr2[j]);
        j++;
    }
    return sorted[k-1];
}

let a= [2, 3, 6, 7, 9]; 
let b= [1, 4, 8, 10]; 
console.log(findKth(a, b, 5));// 6

//TC: O(n);
//SC: O(m+n)
