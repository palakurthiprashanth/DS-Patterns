/**
We can use the Fast & Slow pointers method similar to Middle of the LinkedList to find the middle node of the LinkedList.
Once we have the middle of the LinkedList, we will reverse the second half.
Then, we will compare the first half with the reversed second half to see if the LinkedList represents a palindrome.
Finally, we will reverse the second half of the LinkedList again to revert and bring the LinkedList back to its original form.
**/


// Palindrome without extra space.

 function isPalindrome(head) {
     if (head === null || head.nextElement === null) {
         return true;
     }

     //find middle.
     let slow= head;
     let fast= head;

     while (slow && fast && fast.nextElement!==null) {
         slow= slow.nextElement;
         fast= fast.nextElement.nextElement;
     }

     //reverse secondhalf.
     let headOfSeconHalf= reverseLinkedList(slow);
     copyOfSecondHalf= headOfSeconHalf; // to revert.

     // compare first and secondHalf.

     while(head!==null && headOfSeconHalf!==null) {
         if (head.data !== headOfSeconHalf.data) {
             break; // not palindrome.
         }
         head= head.nextElement;
         headOfSeconHalf= headOfSeconHalf.nextElement;
     }

     reverseLinkedList(copyOfSecondHalf); // reverting.

     if (head === null && headOfSeconHalf === null) {
         return true;
     }

     return false;
 }

 function reverseLinkedList(slow) {
     let currentNode= slow;
     let prev= null;

     while (currentNode!==null) {
         let next= currentNode.nextElement;
         currentNode.nextElement= prev;
         prev= currentNode;
         currentNode= next;
     }
     return prev;
 }
