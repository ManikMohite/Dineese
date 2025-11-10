import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function App() {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-background text-textDark">
      {/* ✅ NAVBAR */}
      <header className="sticky top-0 z-20 bg-white shadow-md border-b border-red-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">Dineease</span>
            <span className="text-xl"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7 2a1 1 0 011 1v7h1V3a1 1 0 112 0v7h1V3a1 1 0 112 0v12a4 4 0 11-8 0V3a1 1 0 011-1zm9 6h2v14h-2z"/>
</svg>
</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-4 font-medium">
            <Link
              to="/"
              className={`hover:text-primary transition ${
                pathname === "/" ? "text-primary font-semibold" : "text-textLight"
              }`}
            >
              Home
            </Link>

            <Link
              to="/my-bookings"
              className={`hover:text-primary transition ${
                pathname.startsWith("/my-bookings")
                  ? "text-primary font-semibold"
                  : "text-textLight"
              }`}
            >
              My Bookings
            </Link>

            <a
              href="https://github.com/ManikMohite"
              target="_blank"
              className="hover:text-primary transition text-textLight"
            >
              GitHub
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-2xl text-primary"
            onClick={() => document.getElementById("mobileMenu").classList.toggle("hidden")}
          >
            ☰
          </button>
        </div>

        {/* ✅ Mobile Dropdown */}
        <div id="mobileMenu" className="hidden sm:hidden border-t border-red-100 bg-white px-4 py-3 space-y-2">
          <Link to="/" className="block text-textDark hover:text-primary transition">Home</Link>
          <Link to="/my-bookings" className="block text-textDark hover:text-primary transition">My Bookings</Link>
          <a href="https://github.com/ManikMohite" target="_blank" className="block text-textDark hover:text-primary transition">GitHub</a>
        </div>
      </header>

      {/* Page Body */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-textLight text-sm bg-slate-100">
        © {new Date().getFullYear()} Dineease • Made with ❤️ by Manik
      </footer>
    </div>
  );
}
