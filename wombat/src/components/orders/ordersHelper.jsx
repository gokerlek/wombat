export const groupByStatus = (list) => {
  const groups = {};

  list.forEach((item) => {
    const status = item.status + "" || "N/A";
    if (!groups[status]) {
      groups[status] = [];
    }
    groups[status].push(item);
  });

  return groups;
};

export const toDecimal = (num) => parseFloat(num).toFixed(2);
