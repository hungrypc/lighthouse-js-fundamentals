var indexOfWaldo;
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      indexOfWaldo = i;
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found him at index " + indexOfWaldo);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);