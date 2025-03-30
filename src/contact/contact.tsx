import Footer from "@/footer";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative fullScreenWithNavbar overflow-hidden flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="flex justify-center mb-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold flex overflow-hidden"
        >
          <span className="">Contact</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 5, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="absolute inset-0 backdrop-blur-lg opacity-50"
      />

      {/* Email Display */}
      <div className="text-center mb-8 transform hover:scale-105 transition-transform duration-300">
        <p className="opacity-75 mb-2">Feel free to reach out</p>
        <a
          href="mailto:business@peitenmueller.com"
          className="text-lg md:text-2xl font-semibold text-gray-300 hover:text-gray-300 transition-colors duration-300"
        >
          business@peitenmueller.com
        </a>
      </div>

      <Footer />
    </div>
  );
}
