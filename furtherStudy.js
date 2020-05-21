"use strict";

//Return a list of unique words that appear in 'words1' and 'words2'
function wordsInCommon(words1, words2) {
  
  const words1Set = new Set(words1);
  const words2Set = new Set(words2);

  const result = new Set();

  for (const word in words1Set) {
    if (word in words2Set) {
        result.add(word);
    }
  }

  return Array.from(result);
}


//Play a kids' word chain game
function kidsGame(names) {

    const output = names.splice(0,1);

    const firstLetterToWords = {};

    for (const name of names) {
        if (! firstLetterToWords.hasOwnProperty(name[0])) {
            firstLetterToWords[name[0]] = [name];
        } else {
            firstLetterToWords[name[0]].push(name);
        }
    }


    //try while true - can use break
    do {
        const startLetter = output[output.length-1][output.length-1];
        const word = firstLetterToWords[startLetter].splice(0,1);
        output.push(word);
    } 
    while (firstLetterToWords.hasOwnProperty(startLetter));

    return output;

}

const names = ['baltoy','angela','benjamin','daniel','julian','william','ping','rose', 'yan', 'nathan']
