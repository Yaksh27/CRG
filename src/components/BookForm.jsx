import { useForm, Controller } from 'react-hook-form';
import { X, BookOpen, User, Calendar, Tag, Check } from 'lucide-react';
import { BOOK_GENRES, BOOK_STATUS, VALIDATION_MESSAGES } from '../utils/constants';

const BookForm = ({ book, onSubmit, onClose }) => {
  const isEditing = !!book;
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      title: book?.title || '',
      author: book?.author || '',
      genre: book?.genre || '',
      publishedYear: book?.publishedYear || '',
      status: book?.status || BOOK_STATUS.AVAILABLE,
    },
  });

  const watchedStatus = watch('status');

  const onFormSubmit = async (data) => {
    const formData = {
      ...data,
      publishedYear: parseInt(data.publishedYear, 10),
    };
    
    await onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto animate-in zoom-in-95 duration-300 border border-gray-200">
        
        {/* Expanded Header */}
        <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 px-10 py-8 rounded-t-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-white/30">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  {isEditing ? '✏️ Edit Book Details' : '📚 Add New Book'}
                </h2>
                <p className="text-blue-100 text-lg mt-2">
                  {isEditing ? 'Update your book information' : 'Add a new book to your collection'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white hover:bg-white/10 p-3 rounded-xl transition-all duration-200"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
        </div>

        {/* More Spacious Form Body */}
        <form onSubmit={handleSubmit(onFormSubmit)} className="p-10 space-y-10">
          
          {/* Title Field */}
          <div className="space-y-4">
            <label className="flex items-center text-lg font-bold text-gray-800">
              <BookOpen className="w-6 h-6 mr-3 text-blue-600" />
              Book Title *
            </label>
            <input
              type="text"
              {...register('title', {
                required: VALIDATION_MESSAGES.TITLE_REQUIRED,
              })}
              className={`w-full px-6 py-5 text-lg border-2 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all duration-200 font-medium ${
                errors.title ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Enter the book title..."
            />
            {errors.title && (
              <div className="flex items-center text-red-600 text-base mt-3">
                <span className="w-5 h-5 mr-2">⚠️</span>
                {errors.title.message}
              </div>
            )}
          </div>

          {/* Author Field */}
          <div className="space-y-4">
            <label className="flex items-center text-lg font-bold text-gray-800">
              <User className="w-6 h-6 mr-3 text-purple-600" />
              Author *
            </label>
            <input
              type="text"
              {...register('author', {
                required: VALIDATION_MESSAGES.AUTHOR_REQUIRED,
              })}
              className={`w-full px-6 py-5 text-lg border-2 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 outline-none transition-all duration-200 font-medium ${
                errors.author ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Enter the author's name..."
            />
            {errors.author && (
              <div className="flex items-center text-red-600 text-base mt-3">
                <span className="w-5 h-5 mr-2">⚠️</span>
                {errors.author.message}
              </div>
            )}
          </div>

          {/* Genre and Year Row - More Spaced */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Genre Field */}
            <div className="space-y-4">
              <label className="flex items-center text-lg font-bold text-gray-800">
                <Tag className="w-6 h-6 mr-3 text-emerald-600" />
                Genre *
              </label>
              <select
                {...register('genre', {
                  required: VALIDATION_MESSAGES.GENRE_REQUIRED,
                })}
                className={`w-full px-6 py-5 text-lg border-2 rounded-2xl focus:ring-4 focus:ring-emerald-200 focus:border-emerald-500 outline-none transition-all duration-200 cursor-pointer font-medium ${
                  errors.genre ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <option value="">Select genre...</option>
                {BOOK_GENRES.map((genre) => (
                  <option key={genre} value={genre}>
                    📚 {genre}
                  </option>
                ))}
              </select>
              {errors.genre && (
                <div className="flex items-center text-red-600 text-base mt-3">
                  <span className="w-5 h-5 mr-2">⚠️</span>
                  {errors.genre.message}
                </div>
              )}
            </div>

            {/* Published Year Field */}
            <div className="space-y-4">
              <label className="flex items-center text-lg font-bold text-gray-800">
                <Calendar className="w-6 h-6 mr-3 text-orange-600" />
                Publication Year *
              </label>
              <input
                type="number"
                {...register('publishedYear', {
                  required: VALIDATION_MESSAGES.YEAR_REQUIRED,
                  min: {
                    value: 1000,
                    message: VALIDATION_MESSAGES.YEAR_MIN,
                  },
                  max: {
                    value: currentYear,
                    message: VALIDATION_MESSAGES.YEAR_MAX,
                  },
                })}
                className={`w-full px-6 py-5 text-lg border-2 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-500 outline-none transition-all duration-200 font-medium ${
                  errors.publishedYear ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-gray-300'
                }`}
                placeholder="2024"
              />
              {errors.publishedYear && (
                <div className="flex items-center text-red-600 text-base mt-3">
                  <span className="w-5 h-5 mr-2">⚠️</span>
                  {errors.publishedYear.message}
                </div>
              )}
            </div>
          </div>

          {/* Status Field - More Spacious */}
          <div className="space-y-6">
            <label className="text-lg font-bold text-gray-800 block">
              Book Status *
            </label>
            <Controller
              name="status"
              control={control}
              rules={{ required: VALIDATION_MESSAGES.STATUS_REQUIRED }}
              render={({ field }) => (
                <div className="grid grid-cols-2 gap-6">
                  {/* Available Option */}
                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      {...field}
                      value={BOOK_STATUS.AVAILABLE}
                      className="sr-only"
                    />
                    <div className={`relative p-8 border-3 rounded-2xl transition-all duration-300 h-full ${
                      watchedStatus === BOOK_STATUS.AVAILABLE
                        ? 'border-emerald-500 bg-gradient-to-br from-emerald-50 to-green-100 shadow-lg shadow-emerald-200/50 scale-[1.02]'
                        : 'border-gray-200 hover:border-emerald-300 bg-white hover:bg-emerald-50/30'
                    }`}>
                      <div className={`absolute top-4 right-4 w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                        watchedStatus === BOOK_STATUS.AVAILABLE
                          ? 'border-emerald-500 bg-emerald-500'
                          : 'border-gray-300 bg-white'
                      }`}>
                        {watchedStatus === BOOK_STATUS.AVAILABLE && (
                          <Check className="w-5 h-5 text-white absolute top-0.5 left-0.5" />
                        )}
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-4xl mb-4 transition-all duration-300 ${
                          watchedStatus === BOOK_STATUS.AVAILABLE ? 'scale-110' : ''
                        }`}>
                          ✨
                        </div>
                        <div className={`font-bold text-xl transition-colors duration-300 ${
                          watchedStatus === BOOK_STATUS.AVAILABLE ? 'text-emerald-700' : 'text-gray-700'
                        }`}>
                          Available
                        </div>
                        <div className={`text-base mt-2 transition-colors duration-300 ${
                          watchedStatus === BOOK_STATUS.AVAILABLE ? 'text-emerald-600' : 'text-gray-500'
                        }`}>
                          Ready to read
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Issued Option */}
                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      {...field}
                      value={BOOK_STATUS.ISSUED}
                      className="sr-only"
                    />
                    <div className={`relative p-8 border-3 rounded-2xl transition-all duration-300 h-full ${
                      watchedStatus === BOOK_STATUS.ISSUED
                        ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-100 shadow-lg shadow-orange-200/50 scale-[1.02]'
                        : 'border-gray-200 hover:border-orange-300 bg-white hover:bg-orange-50/30'
                    }`}>
                      <div className={`absolute top-4 right-4 w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                        watchedStatus === BOOK_STATUS.ISSUED
                          ? 'border-orange-500 bg-orange-500'
                          : 'border-gray-300 bg-white'
                      }`}>
                        {watchedStatus === BOOK_STATUS.ISSUED && (
                          <Check className="w-5 h-5 text-white absolute top-0.5 left-0.5" />
                        )}
                      </div>
                      
                      <div className="text-center">
                        <div className={`text-4xl mb-4 transition-all duration-300 ${
                          watchedStatus === BOOK_STATUS.ISSUED ? 'scale-110' : ''
                        }`}>
                          📍
                        </div>
                        <div className={`font-bold text-xl transition-colors duration-300 ${
                          watchedStatus === BOOK_STATUS.ISSUED ? 'text-orange-700' : 'text-gray-700'
                        }`}>
                          Issued
                        </div>
                        <div className={`text-base mt-2 transition-colors duration-300 ${
                          watchedStatus === BOOK_STATUS.ISSUED ? 'text-orange-600' : 'text-gray-500'
                        }`}>
                          Currently borrowed
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              )}
            />
          </div>

          {/* Action Buttons - Larger and More Spaced */}
          <div className="flex gap-6 pt-10 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-10 py-5 text-lg text-gray-700 bg-gray-100 hover:bg-gray-200 font-bold rounded-2xl transition-all duration-200 focus:ring-4 focus:ring-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-10 py-5 text-lg bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 text-white font-bold rounded-2xl transition-all duration-200 focus:ring-4 focus:ring-blue-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                `${isEditing ? '💾 Update Book' : '✨ Add Book'}`
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookForm;