export function convertSecondToMinute(second) {
  if (second < 60) {
    return `${second}`;
  } else {
    const getMinuteTime = Math.trunc(second / 60);
    const getSecondTime = second - getMinuteTime * 60;
    if (getSecondTime === 0) {
      return `${getMinuteTime} : ${getSecondTime}0`;
    } else {
      return `${getMinuteTime} : ${getSecondTime}`;
    }
  }
}
