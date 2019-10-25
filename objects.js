"use strict";


/** 1. countWords */
function countWords(phrase) {
  
  let wordCounts = {};
 
  let words = phrase.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    if (wordCounts[words[i]]) {
      wordCounts[words[i]] += 1;
    } else {
      wordCounts[words[i]] = 1;
    }
  }

  return wordCounts;

}


// /** 2. getMelonsAtPrice */
function getMelonsAtPrice(price) {

  const melon_prices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  };

  // if (price in melon_prices === false) {
  //   return 'None';
  // }
  // return melon_prices[price].sort();
  if (!(melon_prices[price])) {
    return null;
  }
  return melon_prices[price].sort();

}