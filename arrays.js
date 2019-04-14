var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']




function addElementToBeginningOfArray (array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, elementN){
  array.unshift(elementN)
  console.log(array);
  return;
}
function addElementToEndOfArray(array, element) {
  return [...array, element];	
  
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}


function destructivelyAddElementToEndOfArray(array) {
  array.pop()
  return array
  
}


function removeElementFromEndOfArray (array) {
  array.slice(0, array.length-1)
}


function eccessElementInArray (array, index) {
  return array[index]
}
