function isCircular(list) {
    let head= list.head;

    let node= head.nextElement;

    while(node!==null && node!==head) {
        node= node.nextElement;
    }

    return node === head; 
    // circular  if node === head;
    // not circular if node!==head;
}
