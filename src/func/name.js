export const nameOneLetter = (soz) => {
  if (typeof soz === 'string') {
    const katta = soz.toUpperCase();
    if (katta[0] === 'S' && katta[1] === 'H') {
      return 'SH';
    } else if (katta[0] === 'C' && katta[1] === 'H') {
      return 'CH';
    } else {
      return katta[0];
    }
  }
};
