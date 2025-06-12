import { useState } from 'react';
import { Plus, Search, BookOpen, X, Grid3X3, LayoutList, ChevronLeft, ChevronRight } from 'lucide-react';
import { useBooks } from '../hooks/useBooks';
import LoadingSkeleton from '../components/LoadingSkeleton';
import SearchFilters from '../components/SearchFilters';
import BookCard from '../components/BookCard';
import BookForm from '../components/BookForm';
import Pagination from '../components/Pagination';
import ConfirmDialog from '../components/ConfirmDialog';

const Dashboard = () => {
  const {
    books,
    loading,
    currentPage,
    totalPages,
    totalBooks,
    setCurrentPage,
    searchTerm,
    setSearchTerm,
    genreFilter,
    setGenreFilter,
    statusFilter,
    setStatusFilter,
    addBook,
    updateBook,
    deleteBook,
  } = useBooks();

  const [showBookForm, setShowBookForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [viewMode, setViewMode] = useState('grid');

  const handleEdit = (book) => {
    setEditingBook(book);
    setShowBookForm(true);
  };

  const handleAdd = () => {
    setEditingBook(null);
    setShowBookForm(true);
  };

  const handleFormSubmit = async (bookData) => {
    const success = editingBook 
      ? await updateBook(editingBook._id, bookData)
      : await addBook(bookData);
    
    if (success) {
      setShowBookForm(false);
      setEditingBook(null);
    }
  };

  const handleDelete = (book) => setDeleteConfirm(book);

  const confirmDelete = async () => {
    if (deleteConfirm) {
      const success = await deleteBook(deleteConfirm._id);
      if (success) setDeleteConfirm(null);
    }
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setGenreFilter('');
    setStatusFilter('');
  };

  const getPageNumbers = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach((i) => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-600 to-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">My Personal Library</h1>
                <p className="text-sm text-blue-100">{totalBooks} books in your collection</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-white/10 p-1 rounded-xl flex backdrop-blur-sm">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    viewMode === 'grid' ? 'bg-white text-blue-600 shadow-md' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    viewMode === 'list' ? 'bg-white text-blue-600 shadow-md' : 'text-white hover:bg-white/20'
                  }`}
                >
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="bg-white hover:bg-gray-100 text-blue-600 px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <Plus className="w-5 h-5" />
                Add Book
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-6">
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <SearchFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            genreFilter={genreFilter}
            setGenreFilter={setGenreFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
          />
        </div>

        {/* Active Filters */}
        {(searchTerm || genreFilter || statusFilter) && (
          <div className="mb-6 flex flex-wrap items-center gap-3">
            {searchTerm && (
              <span className="bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-2 font-medium">
                Search: "{searchTerm}"
                <button 
                  onClick={() => setSearchTerm('')}
                  className="text-blue-400 hover:text-blue-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            )}
            {genreFilter && (
              <span className="bg-purple-50 border border-purple-100 text-purple-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-2 font-medium">
                Genre: {genreFilter}
                <button 
                  onClick={() => setGenreFilter('')}
                  className="text-purple-400 hover:text-purple-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            )}
            {statusFilter && (
              <span className="bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm flex items-center gap-2 font-medium">
                Status: {statusFilter}
                <button 
                  onClick={() => setStatusFilter('')}
                  className="text-green-400 hover:text-green-700 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            )}
            <button 
              onClick={clearAllFilters} 
              className="ml-2 text-blue-600 hover:text-blue-800 text-sm font-medium underline transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {loading ? (
          <div className="bg-white rounded-xl shadow-sm p-6">
            <LoadingSkeleton />
          </div>
        ) : books.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {totalBooks === 0 ? "Your library is empty" : "No books match your filters"}
            </h3>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              {totalBooks === 0 
                ? "Start building your personal library by adding your first book." 
                : "Try adjusting your search or filter criteria to find what you're looking for."}
            </p>
            {totalBooks === 0 && (
              <button 
                onClick={handleAdd} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-md hover:shadow-lg flex items-center mx-auto"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Your First Book
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Books Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {books.map((book) => (
                  <BookCard
                    key={book._id}
                    book={book}
                    onEdit={() => handleEdit(book)}
                    onDelete={() => handleDelete(book)}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {books.map((book) => (
                  <div 
                    key={book._id} 
                    className="p-5 hover:bg-gray-50 transition-colors border-b last:border-b-0 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-16 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center shadow-inner">
                        <BookOpen className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-800">{book.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">by {book.author}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded">
                            {book.genre}
                          </span>
                          <span className="text-xs font-medium px-2 py-1 bg-gray-50 text-gray-600 rounded">
                            {book.publishedYear}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        book.status === 'Available' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-amber-100 text-amber-700'
                      }`}>
                        {book.status}
                      </span>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(book)}
                          className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 flex items-center justify-center transition-colors"
                          title="Edit"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDelete(book)}
                          className="w-8 h-8 rounded-full bg-red-50 text-red-600 hover:bg-red-100 flex items-center justify-center transition-colors"
                          title="Delete"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex justify-center">
                <nav className="flex items-center gap-1 bg-white rounded-xl shadow-sm px-2 py-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                      currentPage === 1
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-1 px-1">
                    {getPageNumbers().map((page, index) => (
                      page === '...' ? (
                        <span key={`dots-${index}`} className="px-3 text-gray-400">...</span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-all ${
                            currentPage === page
                              ? 'bg-blue-600 text-white shadow-md'
                              : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {page}
                        </button>
                      )
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                      currentPage === totalPages
                        ? 'text-gray-300 cursor-not-allowed'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-blue-600'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </main>

      {/* Modals */}
      {showBookForm && (
        <BookForm
          book={editingBook}
          onSubmit={handleFormSubmit}
          onClose={() => {
            setShowBookForm(false);
            setEditingBook(null);
          }}
        />
      )}

      {deleteConfirm && (
        <ConfirmDialog
          title="Delete Book"
          message={`Are you sure you want to delete "${deleteConfirm.title}"? This action cannot be undone.`}
          onConfirm={confirmDelete}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;