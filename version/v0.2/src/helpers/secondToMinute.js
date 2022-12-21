export function convertSecondToMinute(second) {
  if (second < 60) {
    return `${second}`;
  } else {
    const getMinuteTime = Math.trunc(second / 60);
    const getSecondTime = second - getMinuteTime * 60;
    return `${getMinuteTime} : ${getSecondTime}`;
  }
}
