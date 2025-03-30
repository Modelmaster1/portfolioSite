import { motion } from "framer-motion";

export default function ModernUI() {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  // Rotation animation
  const rotateVariants = {
    animate: {
      rotate: [0, 1, 0, -1, 0],
      transition: {
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  // Split text into array of characters
  const text = "Paul Eitenmueller";
  const characters = Array.from(text);

  return (
    <div className="relative h-screen w-screen bg-black text-white overflow-hidden flex flex-col items-center justify-center">

      <motion.div
        variants={rotateVariants}
        animate="animate"
        className="flex flex-col"
      >
        <div className="text-lg opacity-75">
          <motion.span>
            I am
          </motion.span>
        </div>
        <div className="text-6xl md:text-8xl font-bold flex overflow-hidden">
          {characters.map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              style={{ display: char === " " ? "inline-block" : "inline-block", width: char === " " ? "0.5em" : "auto" }}
            >
              {char}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 5, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 0 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0 backdrop-blur-lg opacity-50"
      />
      
      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full p-4 text-center text-sm">
        &copy; 2025 Paul. No Idea how to reserve rights.
      </footer>
    </div>
  );
}
