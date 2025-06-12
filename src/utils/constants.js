// Book genres for dropdown filter
export const BOOK_GENRES = [
  'Fiction',
  'Non-Fiction', 
  'Mystery',
  'Romance',
  'Science Fiction',
  'Fantasy',
  'Biography',
  'History',
  'Self-Help',
  'Technology',
  'Business',
  'Health',
];

// Book status options
export const BOOK_STATUS = {
  AVAILABLE: 'Available',
  ISSUED: 'Issued',
};

// Pagination settings
export const PAGINATION = {
  BOOKS_PER_PAGE: 10,
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  TITLE_REQUIRED: 'Title is required',
  AUTHOR_REQUIRED: 'Author is required',
  GENRE_REQUIRED: 'Please select a genre',
  YEAR_REQUIRED: 'Published year is required',
  YEAR_MIN: 'Year must be at least 1000',
  YEAR_MAX: `Year cannot be more than ${new Date().getFullYear()}`,
  STATUS_REQUIRED: 'Please select a status',
};

// Toast messages
export const TOAST_MESSAGES = {
  BOOK_ADDED: 'Book added successfully!',
  BOOK_UPDATED: 'Book updated successfully!',
  BOOK_DELETED: 'Book deleted successfully!',
  ERROR_GENERIC: 'Something went wrong. Please try again.',
};