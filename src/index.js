function towelSort(matrix) {
  if (!matrix || matrix.length === 0) return [];

  return matrix.reduce((acc, row, index) => {
    if (index % 2 === 0) {
      acc.push(...row);
    } else {
      acc.push(...row.reverse());
    }
    return acc;
  }, []);
}

module.exports = towelSort;
