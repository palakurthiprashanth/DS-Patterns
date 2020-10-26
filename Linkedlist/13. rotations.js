function rotateList(list, rotations) {
      let currentNode= list.head;
      let length= list.length();

      let n= adjustRotationsNeeded(rotations, length);

      let rotationsCount= length-n-1;

      let temp= currentNode;

      while(rotationsCount >0) {
          temp= temp.nextElement;
          rotationsCount--;
      }
      let newHead= temp.nextElement;
      temp.nextElement= null;

      temp= newHead;
      while(temp.nextElement!==null) {
          temp= temp.nextElement;
      }

      temp.nextElement= currentNode;
      return newHead;
  }

  function adjustRotationsNeeded(n, length) {
      n= n%length;
      if (n < 0) {
          n= n+length;
      }
      return n;
  }
  let list = new LinkedList();
    list.insertAtHead(5);
    list.insertAtHead(4);
    list.insertAtHead(3);
    list.insertAtHead(2);
    list.insertAtHead(1);

    console.log(rotateList(list,2));
