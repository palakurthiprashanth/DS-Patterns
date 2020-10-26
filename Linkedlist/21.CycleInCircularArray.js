function circular_array_loop_exists(arr) {
      for (var i=0;i<arr.length;i++) {
        let isForword= arr[i] >=0;
        let slow= i;
        let fast= i;

        while (true) {
            slow= findNextIndex(arr, isForword, slow);
            fast= findNextIndex(arr, isForword, fast);
            fast= findNextIndex(arr, isForword, fast);

            if (slow === -1 || fast === -1 || slow === fast) {
                break;
            }
        }
        
        if (slow === fast) {
            return true;
        }
      }
      return false;
  }

  function findNextIndex(arr, isForword, currentIndex) {
      let direction= arr[currentIndex] >0;

      if (isForword!==direction) {
          return -1;
      }
      let nextIndex= (currentIndex+arr[currentIndex])%arr.length;
      if (nextIndex <0) {
          nextIndex= nextIndex+arr.length;
      }

      // only one element.
      if (nextIndex === currentIndex) {
          return -1;
      }
      return nextIndex;
  }
    console.log(circular_array_loop_exists([1, 2, -1, 2, 2]));
    console.log(circular_array_loop_exists([2, 2, -1, 2]));
    console.log(circular_array_loop_exists([2, 1, -1, -2]));
