import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate array of page numbers to show
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart pagination for larger page counts
      if (currentPage <= 3) {
        // Show first 3 pages + last page
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Show first page + last 3 pages
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show first page + current range + last page
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  // Handle page navigation
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center mt-16 mb-8">
      {/* Enhanced Pagination Container */}
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 p-6 flex items-center space-x-3">
        
        {/* Previous Button - Enhanced */}
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className={`group relative overflow-hidden flex items-center px-6 py-4 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-blue-500/30'
          }`}
        >
          {currentPage !== 1 && (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
          <div className="relative flex items-center">
            <ChevronLeft className="w-5 h-5 mr-2" />
            <span className="hidden sm:inline">Previous</span>
          </div>
        </button>

        {/* Page Numbers - Enhanced */}
        <div className="flex items-center space-x-2">
          {pageNumbers.map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <div className="flex items-center justify-center w-12 h-12">
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </div>
              ) : (
                <button
                  onClick={() => goToPage(page)}
                  className={`relative overflow-hidden w-12 h-12 font-bold rounded-2xl transition-all duration-300 transform hover:scale-110 ${
                    currentPage === page
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30 scale-105'
                      : 'bg-white/60 backdrop-blur-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white border border-gray-200/50 hover:border-purple-300/50 shadow-md hover:shadow-lg'
                  }`}
                >
                  {currentPage === page && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  <span className="relative">{page}</span>
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Next Button - Enhanced */}
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className={`group relative overflow-hidden flex items-center px-6 py-4 font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg hover:shadow-emerald-500/30'
          }`}
        >
          {currentPage !== totalPages && (
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
          <div className="relative flex items-center">
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-5 h-5 ml-2" />
          </div>
        </button>
      </div>

      {/* Page Info - Enhanced */}
      <div className="ml-6 bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/40">
        <span className="text-sm font-semibold text-gray-700">
          Page <span className="text-purple-600 font-bold">{currentPage}</span> of <span className="text-purple-600 font-bold">{totalPages}</span>
        </span>
      </div>
    </div>
  );
};

export default Pagination;