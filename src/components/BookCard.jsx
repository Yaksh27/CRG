import { Edit, Trash2, Calendar, BookOpen, Star, MoreHorizontal } from 'lucide-react';
import { BOOK_STATUS } from '../utils/constants';

const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="group relative">
      {/* Main Card Container */}
      <div className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1.5 h-full flex flex-col">
        
        {/* Book Cover Section with Gradient Background */}
        <div className="relative h-56 bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center p-6">
          {/* Book Cover Placeholder with Depth */}
          <div className="w-28 h-36 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-xl shadow-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
            {/* Cover Details */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-600/30 to-indigo-800/30"></div>
            <div className="absolute top-2 left-2 right-2 h-6 bg-white/10 rounded-t-sm"></div>
            <BookOpen className="w-10 h-10 text-white/90 z-10" />
            <div className="absolute bottom-2 left-2 right-2 h-2 bg-white/5 rounded-full"></div>
          </div>
          
          {/* Status Badge - More Prominent */}
          <div className="absolute top-5 right-5">
            <span className={`px-3 py-1.5 rounded-xl text-sm font-bold shadow-sm ${
              book.status === BOOK_STATUS.AVAILABLE
                ? 'bg-green-100 text-green-800 border-2 border-green-200/80'
                : 'bg-amber-100 text-amber-800 border-2 border-amber-200/80'
            }`}>
              {book.status}
            </span>
          </div>

          {/* Action Menu - More Visible */}
          <div className="absolute top-5 left-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center shadow-md hover:bg-white transition-all hover:scale-110">
              <MoreHorizontal className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Title & Author with Better Typography */}
          <div className="mb-6 flex-1">
            <h3 className="text-xl font-extrabold text-gray-900 mb-3 line-clamp-2 leading-tight min-h-[3.5rem]">
              {book.title}
            </h3>
            <p className="text-gray-600 font-semibold text-base">
              by <span className="text-gray-800 underline decoration-blue-300/30">{book.author}</span>
            </p>
          </div>

          {/* Metadata - Enhanced Visual Design */}
          <div className="space-y-4 mb-8">
            {/* Genre */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shadow-inner border border-blue-200/50">
                <div className="w-3.5 h-3.5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow"></div>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Genre</p>
                <p className="text-base font-bold text-gray-900">{book.genre}</p>
              </div>
            </div>

            {/* Publication Year */}
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shadow-inner border border-purple-200/50">
                <Calendar className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Published</p>
                <p className="text-base font-bold text-gray-900">{book.publishedYear}</p>
              </div>
            </div>
          </div>

          {/* Rating - More Visual Impact */}
          <div className="flex items-center gap-1.5 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-700 ml-2">4.2</span>
            <span className="text-xs text-gray-500 ml-1">(128)</span>
          </div>

          {/* Action Buttons - Larger and More Distinct */}
          <div className="flex gap-4 mt-auto">
            <button
              onClick={(e) => { e.stopPropagation(); onEdit(); }}
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg"
            >
              <Edit className="w-5 h-5" />
              <span>Edit</span>
            </button>
            
            <button
              onClick={(e) => { e.stopPropagation(); onDelete(); }}
              className="flex-1 bg-white hover:bg-gray-50 text-gray-700 hover:text-gray-900 font-bold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
            >
              <Trash2 className="w-5 h-5" />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;