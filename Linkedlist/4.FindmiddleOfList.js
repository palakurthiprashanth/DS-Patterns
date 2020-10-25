function findMid () {
        if (this.isEmpty()) {
            return;
        }
        let slow = this.head;
        let fast = this.head;

        while (slow.nextElement!==null && fast && fast.nextElement.nextElement!==null) {
            slow = slow.nextElement;
            fast = fast.nextElement.nextElement;
        }
        return slow;
    }
