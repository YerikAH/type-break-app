export function calcWpm(badWord, goodWord, time) {
  let wordTotal = goodWord - badWord;
  const result = parseFloat(wordTotal / (time / 60)).toFixed(2);
  if (result < 0) {
    return 0;
  } else {
    return result;
  }
}
