"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Home, User, FolderGit2, Code2, Mail, Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)] border-b border-[var(--accent)] shadow-md">
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo - unchanged */}
        <Link href="/" className="flex items-center gap-2 group" aria-label="Home">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute w-8 h-8 border-2 border-white rounded-md group-hover:border-white/80 transition-colors duration-300"></div>
            <div className="absolute flex space-x-1">
              <span className="w-1 h-4 bg-[#FF6B6B] group-hover:bg-[#FF8E8E] transition-colors duration-300 
                animate-[barUp_1.5s_ease-in-out_infinite]"></span>
              <span className="w-1 h-4 bg-[#4ECDC4] group-hover:bg-[#88E0D0] transition-colors duration-300 
                animate-[barDown_1.5s_ease-in-out_infinite]"></span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full group-hover:bg-white/80 transition-colors duration-300"></div>
          </div>
          <span className="text-xl font-extrabold tracking-tighter text-white group-hover:text-white/80 transition-colors duration-300">
            M8sh3ck8e
          </span>
        </Link>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          
          <Link href="/about" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">About</span>
          </Link>
          
          <Link href="/projects" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <FolderGit2 className="w-4 h-4" />
            <span className="hidden sm:inline">Projects</span>
          </Link>
          
          <Link href="/skills" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <Code2 className="w-4 h-4" />
            <span className="hidden sm:inline">Skills</span>
          </Link>
          
          <Link href="/contacts" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Contact</span>
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="ml-2 p-2 rounded hover:bg-[var(--accent)]/10 transition text-[var(--muted)] hover:text-[var(--accent)]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        {/* Mobile Menu Button - visible only on mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded hover:bg-[var(--accent)]/10 transition text-[var(--muted)] hover:text-[var(--accent)]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded hover:bg-[var(--accent)]/10 transition text-white"
            aria-label="Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--background)] border-t border-[var(--accent)]">
          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 text-white text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>
            <Link href="/about" className="flex items-center gap-3 text-white text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              <User className="w-5 h-5" />
              <span>About</span>
            </Link>
            <Link href="/projects" className="flex items-center gap-3 text-white text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              <FolderGit2 className="w-5 h-5" />
              <span>Projects</span>
            </Link>
            <Link href="/skills" className="flex items-center gap-3 text-white text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              <Code2 className="w-5 h-5" />
              <span>Skills</span>
            </Link>
            <Link href="/contacts" className="flex items-center gap-3 text-white text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
              <Mail className="w-5 h-5" />
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}