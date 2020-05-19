"use strict";


// 1. printIndices
// Print each item in the list, followed by its index. 
// Ex.:
//    > printIndices(items)
//    apple 0
//    berry 1
//    cherry 2
function printIndices(items) {
  for (const i in items) {
    console.log(items[i], i)
  } 
}


// 2. everyOtherItem
// Print a list of every other item in 'items'
function everyOtherItem(items) {
  const result = [];

  for (const i in items){
    if (i % 2 === 0){
        result.push(items[i]);
    }
  }
  console.log(result);    
}


// 3. smallestNItems
//Print a list of the 'n' smallest integers in 'items'. 
function smallestNItems(items, n) {
  
  const sortedItems = items.sort((a,b) => a - b); 
  const sortedNItems = sortedItems.slice(0, n);
  sortedNItems.reverse();

  console.log(sortedNItems)

}
