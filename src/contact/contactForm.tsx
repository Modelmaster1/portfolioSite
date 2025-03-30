export default function ContactForm() {
  return (
    <div className="w-full max-w-md p-6 bg-black border border-gray-800 rounded-lg shadow-xl">
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:border-white text-white"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:border-white text-white"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 bg-black border border-gray-800 rounded-md focus:outline-none focus:border-white text-white resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black border border-white text-white font-medium rounded-md transition-colors duration-300 hover:bg-white hover:text-black focus:outline-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
