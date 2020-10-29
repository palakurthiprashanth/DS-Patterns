 // Implement Stack using Queue

   class StackUsingQueue {
       constructor() {
           this.queue1 = new queue();
           this.queue2 = new queue();
       }
       swap_queues() {
           let temp = this.queue2;
           this.queue2 = this.queue1;
           this.queue1 = temp;
       }
       push(value){
           this.queue1.enqueue(value)
       }
       pop() {
           while(this.queue1.size() > 1) {
               this.queue2.enqueue(this.queue1.dequeue());
           }
           let value = this.queue1.dequeue();
           this.swap_queues();
           return value;
       }
   }
