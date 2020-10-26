// Re-arrange linked list.
  // Input: 2 -> 4 -> 6 -> 8 -> 10 -> 12 -> null
  // Output: 2 -> 12 -> 4 -> 10 -> 6 -> 8 -> null 

  function reOrder(head) {
      if(!head && !head.nextElement) {
          return;
      }

      // find mid.
      let slow= head;
      let fast= head;

      while(slow!==null && fast!==null) {
          slow= slow.nextElement;
          fast= fast.nextElement.nextElement;
      }

      // reverse SecondHalf
      let headOfSeconHalf= reverseLinkedList(slow);
      let headOfFirstHalf= head;

      while (headOfFirstHalf!==null && headOfSeconHalf!==null) {
          let temp= headOfFirstHalf.nextElement;
          headOfFirstHalf.nextElement= headOfSeconHalf;
          headOfFirstHalf= temp;

          temp= headOfSeconHalf.nextElement;
          headOfSeconHalf.nextElement= headOfFirstHalf;
          headOfSeconHalf= temp;
      }

      // set last element to null.

      if (headOfFirstHalf!==null) {
          headOfFirstHalf.nextElement=null;
      }
  }
