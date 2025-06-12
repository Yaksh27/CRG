import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      {/* Remove the gray background wrapper to let Dashboard control its own background */}
      <Routes>
        {/* Main Dashboard Route */}
        <Route path="/" element={<Dashboard />} />
        
        {/* 404 Not Found - Enhanced with gradient background */}
        <Route path="*" element={
          <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/40 flex items-center justify-center relative overflow-hidden">
            {/* Decorative background elements matching Dashboard */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 -left-4 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
            </div>
            
            <div className="text-center relative z-10 bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-200 max-w-md mx-4">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">📚</span>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4">
                Page Not Found
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                The page you're looking for doesn't exist, but your books are waiting for you!
              </p>
              <a 
                href="/" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  ← Back to Dashboard
                </span>
              </a>
            </div>
          </div>
        } />
      </Routes>
      
      {/* Enhanced Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            color: '#374151',
            fontSize: '14px',
            fontWeight: '600',
            padding: '16px 20px',
            borderRadius: '16px',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            maxWidth: '400px',
          },
          success: {
            style: {
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.95) 0%, rgba(5, 150, 105, 0.95) 100%)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: 'rgba(16, 185, 129, 0.2)',
            },
          },
          error: {
            style: {
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.95) 0%, rgba(220, 38, 38, 0.95) 100%)',
              backdropFilter: 'blur(10px)', 
              color: '#ffffff',
            },
            iconTheme: {
              primary: '#ffffff',
              secondary: 'rgba(239, 68, 68, 0.2)',
            },
          },
          loading: {
            style: {
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.95) 0%, rgba(37, 99, 235, 0.95) 100%)',
              backdropFilter: 'blur(10px)',
              color: '#ffffff',
            },
          },
        }}
      />
    </Router>
  )
}

export default App