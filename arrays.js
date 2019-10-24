"use strict";


/** 1. printIndices */
const printIndices = (items) => {
  for (const i in items) {
    console.log(items[i], i);
  }
};


/** 2. everyOtherItem */
const everyOtherItem = (items) => {

  const result = [];

  for (const i in items) {
    if (i % 2 === 0) {
    result.push(items[i]);
    }
  }

  console.log(result);
};


/** 3. smallestNItems */
const smallestNItems = (items, n) => {

  const sortedItems = items.sort((a, b) => a - b).slice(0, n);

  console.log(sortedItems.reverse());

};
