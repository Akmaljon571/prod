export const phoneFN = (son) => {
  if (son) {
    const a = son.split('');
    let result = '';
    for (let i = 0; i < a.length; i++) {
      if (i === 0) {
        result += `(${a[i]}`;
      } else if (i === 2) {
        result += `${a[i]}) `;
      } else if (i === 4 || i === 7 || i === 9) {
        result += `${a[i]} `;
      } else {
        result += `${a[i]}`;
      }
      String(result);
    }
    return result;
  }
};
