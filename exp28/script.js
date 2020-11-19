const sortElements = () => {
  
  document.getElementById("showSrt").style.display = "block";
  document.getElementById("showUnSrt").style.display = "block";

  var str = document.getElementById("array").value;
  var stringArray = str.split(" ");
  var numberArray = stringArray.map(Number);
  document.getElementById("showUnSrt").innerHTML = `Input Elements => ${numberArray}`;
  numberArray = mergeSort(numberArray);
  document.getElementById("showSrt").innerHTML = "Sorted Elements => " + numberArray;
}

const mergeSort = (unsortedArray) => {

  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}

const merge = (left, right) => {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; 
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; 
    }
  }
  
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}