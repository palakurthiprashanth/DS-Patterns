// https://stackoverflow.com/questions/45130465/inserting-at-the-end-of-stack

function insertAtBottomOfStack(value) {
    if (stack.isEmpty()) {
        stack.push(value);
    }else {
        let a= stack.getTop();
        insertAtBottomOfStack(value);
        stack.push(a);
    }
}
