// Tc= O(n).
    function NthNodeFromEnd(list, n) {
        let nthNode = list.getHead(); //This iterator will reach the nth node
        let endNode = list.getHead(); //This iterator will reach the end
        let count= 0;

        while(count< n) {
            if (endNode === null) {
                console.log("Out of Bounds");
                return null;
            }
            endNode= endNode.nextElement;
            count++;
        }

        while(endNode!== null ) {
            endNode= endNode.nextElement;
            nthNode= nthNode.nextElement;
        }

        if (nthNode!==null) {
            return nthNode
        }else{
            return null;
        }
    }
