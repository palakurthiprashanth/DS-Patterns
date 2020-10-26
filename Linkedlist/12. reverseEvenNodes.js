// TC- >O(N);
  // SC -> O(1);  
  function reverseEvenNodes(head) {
      let currentNode= head;
      let listEven= null;

      while(currentNode && currentNode.nextElement) {
          let even= currentNode.nextElement;
          currentNode.nextElement= even.nextElement;

          even.nextElement= listEven;
          listEven= even;
          currentNode= currentNode.nextElement;
      }
      return mergeAlternating(head, listEven);
  }

  function mergeAlternating(list1, list2) {
      if (!list1) {
          return list2;
      }
      if (!list2) {
          return list1;
      }

      let head= list1;
      while (list1.nextElement && list2) {
          let temp= list2;
          list2= list2.nextElement;

          temp.nextElement= list1.nextElement;
          list1.nextElement= temp;
          list1= temp.nextElement;
      }

      if (!list1.nextElement) {
          list1.nextElement= list2;
      }

      return head;
  }

    let list= new LinkedList();
    list.insertAtHead(9);
    list.insertAtHead(28);
    list.insertAtHead(21);
    list.insertAtHead(14);
    list.insertAtHead(7);
    console.log(reverseEvenNodes(list.head));
