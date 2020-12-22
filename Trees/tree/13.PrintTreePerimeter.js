// https://www.educative.io/courses/coderust-hacking-the-coding-interview/nROl
// perimeter= left + leaf + right.

let printLeftPerimeter = function(root, result) {
  while (root) {
    let curr_val = root.data;

    if (root.left) {
      root = root.left;
    } else if (root.right) {
      root = root.right;
    } else { // leaf node
      break;
    }
    // console.log(curr_val + " ");
    result.push(curr_val);
  }
};

let printRightPerimeter = function(root, result) {
  let r_values = []; // stack for right side values.

  while (root) {
    let curr_val = root.data;

    if (root.right) {
      root = root.right;
    } else if (root.left) {
      root = root.left;
    } else { // leaf node
      break;
    }
    r_values.push(curr_val);
  }
  while (r_values.length != 0) {
    // console.log(r_values.pop() + " ");
    result.push(r_values.pop());
  }
};

let printLeafNodes = function(root, result) {
  if (root) {
    printLeafNodes(root.left, result);
    if (!root.left && !root.right) {
      // console.log(root.data + " ");
      result.push(root.data);
    }
    printLeafNodes(root.right, result);
  }
};

let displayTreePerimeter = function(root) {
  let result = [];
  if (root) {
    // console.log(root.data + " ");
    result.push(root.data);
    printLeftPerimeter(root.left, result);

    if (root.left || root.right) {
      printLeafNodes(root, result);
    }

    printRightPerimeter(root.right, result);
  }
  return result.toString().replace(/,/g, " ");
};
