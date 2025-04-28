"use client";

import Link from "next/link";
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun, Home, User, FolderGit2, Code2, Mail } from "lucide-react";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[var(--background)] border-b border-[var(--accent)] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
       

 {/* Modern Developer Logo */}
<Link
  href="/"
  className="flex items-center gap-2 group"
  aria-label="Home"
>
  {/* Symbol/Icon */}
  <div className="relative w-10 h-10 flex items-center justify-center">
    {/* Base square - white */}
    <div className="absolute w-8 h-8 border-2 border-white rounded-md group-hover:border-white/80 transition-colors duration-300"></div>
    
    {/* Animated colorful code brackets with opposite movement */}
    <div className="absolute flex space-x-1">
      {/* Left bar - moves up */}
      <span className="w-1 h-4 bg-[#FF6B6B] group-hover:bg-[#FF8E8E] transition-colors duration-300 
        animate-[barUp_1.5s_ease-in-out_infinite]"></span>
      
      {/* Right bar - moves down */}
      <span className="w-1 h-4 bg-[#4ECDC4] group-hover:bg-[#88E0D0] transition-colors duration-300 
        animate-[barDown_1.5s_ease-in-out_infinite]"></span>
    </div>
    
    {/* Dot - white */}
    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white rounded-full group-hover:bg-white/80 transition-colors duration-300"></div>
  </div>

  {/* Text */}
  <span className="text-2xl font-extrabold tracking-tighter text-white group-hover:text-white/80 transition-colors duration-300">
    M8sh3ck8e
  </span>
</Link>



        {/* Navigation with Icons */}
        <nav className="flex items-center space-x-6">
          <Link href="/" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          
          <Link href="/about" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <User className="w-4 h-4" />
            <span>About</span>
          </Link>
          
          <Link href="/projects" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <FolderGit2 className="w-4 h-4" />
            <span>Projects</span>
          </Link>
          
          <Link href="/skills" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <Code2 className="w-4 h-4" />
            <span>Skills</span>
          </Link>
          
          <Link href="/contacts" className="flex items-center gap-1 text-white hover:text-[var(--accent)] transition-colors text-sm font-medium">
            <Mail className="w-4 h-4" />
            <span>Contact</span>
          </Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="ml-2 p-2 rounded hover:bg-[var(--accent)]/10 transition text-[var(--muted)] hover:text-[var(--accent)]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </div>
    </header>
  );
}