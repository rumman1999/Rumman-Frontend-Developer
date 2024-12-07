export const paginateData = (data, currentPage, itemsPerPage) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  return data.slice(indexOfFirstItem, indexOfLastItem);
};

export const calculateTotalPages = (dataLength, itemsPerPage) => {
  return Math.ceil(dataLength / itemsPerPage);
};
