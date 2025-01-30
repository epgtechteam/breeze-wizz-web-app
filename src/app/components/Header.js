// components/Header.js
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white border-b shadow-md z-50 p-4 flex justify-between items-center">
      <div className="text-xl font-semibold">
        <h1>ServiceClone</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-gray-800 hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-500"
            >
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-800 hover:text-blue-500">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
