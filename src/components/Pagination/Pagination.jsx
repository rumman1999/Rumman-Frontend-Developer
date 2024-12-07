/* eslint-disable react/prop-types */

import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

const Pagination = ({ currentPage, totalPages, paginate }) => {
  return (
    <div className="pagination mt-6 mr-2 flex justify-end items-center">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-l-lg disabled:opacity-50 flex items-center"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-r-lg disabled:opacity-50 flex items-center"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
