import { useState, useEffect } from 'react';
import { booksAPI } from '../services/api';
import { PAGINATION } from '../utils/constants';
import { mockBooks } from '../data/mockBooks';
import toast from 'react-hot-toast';

export const useBooks = () => {
  // State management
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch books on component mount
  useEffect(() => {
    // Start with mock data for immediate display
    setBooks(mockBooks);
    setLoading(false);
    
    // Optionally try to fetch real data (comment out if API not ready)
    // fetchBooks();
  }, []);

  // Fetch all books from API
  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await booksAPI.getBooks();
      setBooks(data || []);
    } catch (error) {
      toast.error(error.message);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  // Add new book
  const addBook = async (bookData) => {
    try {
      // For now, add to mock data with generated ID
      const newBook = {
        ...bookData,
        _id: Date.now().toString(), // Simple ID generation
      };
      setBooks(prev => [...prev, newBook]);
      toast.success('Book added successfully!');
      return true;
      
      // Uncomment when API is ready:
      // const newBook = await booksAPI.addBook(bookData);
      // setBooks(prev => [...prev, newBook]);
      // toast.success('Book added successfully!');
      // return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  // Update existing book
  const updateBook = async (id, bookData) => {
    try {
      // For now, update in mock data
      setBooks(prev => prev.map(book => 
        book._id === id ? { ...book, ...bookData } : book
      ));
      toast.success('Book updated successfully!');
      return true;
      
      // Uncomment when API is ready:
      // const updatedBook = await booksAPI.updateBook(id, bookData);
      // setBooks(prev => prev.map(book => 
      //   book._id === id ? { ...book, ...updatedBook } : book
      // ));
      // toast.success('Book updated successfully!');
      // return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  // Delete book
  const deleteBook = async (id) => {
    try {
      // For now, delete from mock data
      setBooks(prev => prev.filter(book => book._id !== id));
      toast.success('Book deleted successfully!');
      return true;
      
      // Uncomment when API is ready:
      // await booksAPI.deleteBook(id);
      // setBooks(prev => prev.filter(book => book._id !== id));
      // toast.success('Book deleted successfully!');
      // return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  };

  // Filter and search books
  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = !genreFilter || book.genre === genreFilter;
    const matchesStatus = !statusFilter || book.status === statusFilter;
    
    return matchesSearch && matchesGenre && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredBooks.length / PAGINATION.BOOKS_PER_PAGE);
  const startIndex = (currentPage - 1) * PAGINATION.BOOKS_PER_PAGE;
  const paginatedBooks = filteredBooks.slice(startIndex, startIndex + PAGINATION.BOOKS_PER_PAGE);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, genreFilter, statusFilter]);

  // Return all state and functions
  return {
    // Data
    books: paginatedBooks,
    allBooks: books,
    loading,
    
    // Pagination
    currentPage,
    totalPages,
    totalBooks: filteredBooks.length,
    setCurrentPage,
    
    // Filters
    searchTerm,
    setSearchTerm,
    genreFilter,
    setGenreFilter,
    statusFilter,
    setStatusFilter,
    
    // Actions
    fetchBooks,
    addBook,
    updateBook,
    deleteBook,
  };
};