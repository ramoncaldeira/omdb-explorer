export const averageRate = (values) => {
  if (values.length === 0) {
    return -1;
  }

  const ratios = values.map((item) => {
    if (item.indexOf('/') !== -1) {
      const [num, den] = item.split('/').map((x) => parseFloat(x));
      return num / den;
    }
    return parseFloat(item.split('%')[0]) / 100;
  });

  return (ratios.reduce((acc, value) => acc + value, 0) / ratios.length) * 5;
};
