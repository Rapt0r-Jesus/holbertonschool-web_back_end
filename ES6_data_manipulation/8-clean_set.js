export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  let result = '';

  set.forEach((item) => {
    if (item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  });

  return result.slice(0, -1);
}
