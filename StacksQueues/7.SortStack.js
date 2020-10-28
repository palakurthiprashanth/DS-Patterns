function sortStack(stack) {
    //1. Use a second tempStack.
    var tempStack = new Stack();
    var value;
    while (stack.isEmpty() == false) {
      //2. Pop value from mainStack.
        value = stack.pop();
        //3. If the value is greater than or equal to the top of tempStack, then push the value in tempStack
        if (value >= tempStack.getTop()) {
            tempStack.push(value)
        } else {
         // else pop all values from tempStack and push them in mainStack 
            while (tempStack.isEmpty() == false) {
                stack.push(tempStack.pop());
            }
         // and in the end push value in tempStack
            tempStack.push(value);
        }
      //4.repeat from step 2 till mainStack is not empty.
    }
//5. When mainStack will be empty, tempStack will have sorted values in descending order.
//6. Now transfer values from tempStack to mainStack to make values sorted in ascending order.
    while (tempStack.isEmpty() == false) {
        stack.push(tempStack.pop());

    }
    return stack;

}

var stack =new Stack()
stack.push(2)
stack.push(97)
stack.push(4)
stack.push(42)
stack.push(12)
stack.push(60)
stack.push(23)
let s=stack.size()
sortStack(stack)
for(var i=0;i<s;i++)
{
  console.log(stack.pop())
}

// Time complexity is O(n2)
