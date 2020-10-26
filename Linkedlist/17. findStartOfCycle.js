 startOfCycle () {
            let cycleLen = this.cycleLength();
            let pointer1 = this.head;
            let pointer2 = this.head;
            while(cycleLen > 0) {
                pointer2 = pointer2.nextElement;
                cycleLen-=1;
            }
            while (pointer1!==pointer2) {
                pointer1 = pointer1.nextElement;
                pointer2 = pointer2.nextElement;
            }
            return pointer1;
        }
