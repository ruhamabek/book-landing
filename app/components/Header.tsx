"use client";

import Link from "next/link";

const NavBar = () => (
  <nav className="bg-[#170e2b] font-segoe backdrop-blur-lg border-b border-purple-700/50 shadow-purple-950 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between gap-8">
        {/* Logo from idea-pad navbar */}
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <img src="image.png" alt="" className="w-40" />
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <nav className="hidden lg:flex items-center gap-8">
            {["Features", "About", "Reviews"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-medium text-white hover:text-purple-700 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block font-medium text-white hover:text-purple-700 transition-colors">
              Sign In
            </button>
            <Link
              href="http://localhost:3000/checkout/pro-book"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
            >
              Get the Book
            </Link>

          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;