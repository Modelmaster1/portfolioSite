export default function Navbar() {
  return (
    <nav className="w-full p-6 flex justify-between items-center z-10 accentColor">
      <span className="text-lg font-bold"><a href="/">Paul Eitenmueller</a></span>
      <ul className="flex space-x-6">
      <li className="hover:underline cursor-pointer hidden sm:block"><a href="/">Home</a></li>
        <li className="hover:underline cursor-pointer"><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}