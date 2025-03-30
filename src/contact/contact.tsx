export default function Contact() {
    return (
      <div className="relative h-screen w-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center">
        
        {/* Hero Section */}
        <div className="flex justify-center mb-8">
          <div className="text-6xl md:text-8xl font-bold flex overflow-hidden">
            <span className="">Contact</span>
          </div>
        </div>
        
        {/* Email Display */}
        <div className="text-center mb-8 transform hover:scale-105 transition-transform duration-300">
          <p className="text-gray-400 mb-2">Feel free to reach out</p>
          <a href="mailto:business@peitenmueller.com" className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors duration-300">
            business@peitenmueller.com
          </a>
        </div>
        
        {/* Footer */}
        <footer className="absolute bottom-0 left-0 w-full p-4 text-center text-sm">
          &copy; 2025 Paul. No Idea how to reserve rights.
        </footer>
      </div>
    );
  }