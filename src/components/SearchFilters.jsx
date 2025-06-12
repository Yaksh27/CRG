import { Search, Filter, X, Tag, BookOpen } from 'lucide-react';
import { BOOK_GENRES, BOOK_STATUS } from '../utils/constants';

const SearchFilters = ({
  searchTerm,
  setSearchTerm,
  genreFilter,
  setGenreFilter,
  statusFilter,
  setStatusFilter,
}) => {
  const clearFilters = () => {
    setSearchTerm('');
    setGenreFilter('');
    setStatusFilter('');
  };

  const hasActiveFilters = searchTerm || genreFilter || statusFilter;

  return (
    <div className="relative mb-16">
      <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30 p-10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-10 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <Search className="w-6 h-6 mr-3 text-blue-600" />
              Search & Filter
            </h2>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="w-4 h-4 mr-1" />
                Clear all
              </button>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative group">
              <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <input
                type="text"
                placeholder="Search by title, author, or keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-300 focus:border-blue-500 rounded-2xl focus:ring-4 focus:ring-blue-200/30 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 font-medium text-lg shadow-sm"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative group flex-1 min-w-[200px]">
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                  <Tag className="w-5 h-5" />
                </div>
                <select
                  value={genreFilter}
                  onChange={(e) => setGenreFilter(e.target.value)}
                  className="w-full pl-12 pr-10 py-5 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-purple-300 focus:border-purple-500 rounded-2xl focus:ring-4 focus:ring-purple-200/30 outline-none transition-all duration-300 cursor-pointer font-medium text-gray-900 text-lg appearance-none shadow-sm"
                >
                  <option value="">All Genres</option>
                  {BOOK_GENRES.map((genre) => (
                    <option key={genre} value={genre}>
                      {genre}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 pointer-events-none">
                  <Filter className="w-5 h-5" />
                </div>
              </div>

              <div className="relative group flex-1 min-w-[180px]">
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 transition-colors">
                  <BookOpen className="w-5 h-5" />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-12 pr-10 py-5 bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-emerald-300 focus:border-emerald-500 rounded-2xl focus:ring-4 focus:ring-emerald-200/30 outline-none transition-all duration-300 cursor-pointer font-medium text-gray-900 text-lg appearance-none shadow-sm"
                >
                  <option value="">All Status</option>
                  <option value={BOOK_STATUS.AVAILABLE}>Available</option>
                  <option value={BOOK_STATUS.ISSUED}>Issued</option>
                </select>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-emerald-500 pointer-events-none">
                  <Filter className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {hasActiveFilters && (
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Search: "{searchTerm}"
                </span>
              )}
              {genreFilter && (
                <span className="inline-flex items-center bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  Genre: {genreFilter}
                </span>
              )}
              {statusFilter && (
                <span className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  Status: {statusFilter}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;