export default function NotFound() {
  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center">
      {/* Hero Section with Animation */}
      <div className="flex justify-center mb-8">
        <div className="text-8xl md:text-9xl font-bold flex overflow-hidden animate-pulse">
          <span className="text-gray-300">404</span>
        </div>
      </div>
      
      {/* Error Message */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-xl mb-4">Page not found</p>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full p-4 text-center text-sm">
        &copy; 2025 Paul. No Idea how to reserve rights.
      </footer>
    </div>
  );
}