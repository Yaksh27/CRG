import { AlertTriangle } from 'lucide-react';

const ConfirmDialog = ({ title, message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center p-6 z-50 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl animate-in zoom-in-95 duration-300 border border-gray-100 overflow-hidden">
        {/* Dialog Content */}
        <div className="p-8">
          {/* Icon and Title */}
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center shadow-inner border border-red-200">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
            <div className="mt-1">
              <h3 className="text-2xl font-bold text-gray-900">
                {title}
              </h3>
              <div className="mt-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {message}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons - Larger and More Spaced */}
          <div className="flex gap-4 pt-6 border-t border-gray-100">
            <button
              onClick={onCancel}
              className="flex-1 px-8 py-4 text-gray-700 bg-gray-100 hover:bg-gray-200 font-bold rounded-xl transition-all duration-200 focus:ring-4 focus:ring-gray-200 text-lg"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="flex-1 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-200 focus:ring-4 focus:ring-red-200 shadow-lg hover:shadow-xl text-lg"
            >
              🗑️ Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;