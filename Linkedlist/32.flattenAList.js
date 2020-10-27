// flatten a linkedlist.
// https://www.youtube.com/watch?v=PazsaUFz9io

function flatten(node) {
    if (node ===null || node.right === null) {
        return node;
    }
    return mergeSortedLists(node, flatten(node.right));
}
