import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 w-full">
      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
       
       {/* Profile Picture */}
<div className="relative group order-1 md:order-none">
  {/* Glow effect */}
  <div className="absolute -inset-1 rounded-full bg-[var(--accent)] opacity-20 group-hover:opacity-30 blur-sm transition-opacity duration-300"></div>
  
  {/* Image container */}
  <div className="relative p-1 rounded-full border border-[var(--accent)]">
    <Image
      src="/myProfile.jpg" 
      alt="Misheck Champopa"
      width={128}
      height={128}
      className="rounded-full object-cover w-38 h-38 border-4 border-[var(--background)] z-10 hover:scale-105 transition-transform duration-300"
      style={{
        aspectRatio: '1/1' // Ensures perfect circle regardless of image dimensions
      }}
    />
  </div>
</div>

        {/* Name and Title */}
        <div className="order-2 md:order-none text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-[var(--foreground)] hover:text-[var(--accent)] transition-colors duration-300">
            Misheck Champopa
          </h1>
          <p className="text-xl font-semibold text-#FF6B6B mt-2">
            Software Developer | ICT Student at Mzuzu University
          </p>
        </div>
      </div>

      {/* Enhanced Bio Card */}
      <div className="bg-[var(--background)] rounded-xl shadow-lg p-8 border border-[var(--accent)] mb-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
        <h2 className="text-xl font-semibold text-[var(--foreground)] mb-4 flex items-center gap-2">
          <span className="text-2xl animate-wave inline-block origin-[70%_70%]">👋</span>
          <span>Hi!</span>
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-[var(--foreground)]">
            I&apos;m a software developer passionate about creating innovative, user-friendly solutions. 
            Currently pursuing my Bachelor&apos;s in ICT at Mzuzu University, I specialize in 
            modern web development using technologies like React, Next.js, and Tailwind CSS.
          </p>
          <p className="text-lg leading-relaxed text-[var(--foreground)]">
            I enjoy turning ideas into reality through code and am constantly expanding my skill set 
            through personal projects and open-source contributions.
          </p>
          <p className="text-lg leading-relaxed text-[var(--foreground)]">
            <span className="font-medium">Let&apos;s connect!</span> I&apos;m open to internships, collaborations, 
            and freelance opportunities to grow my experience.
          </p>
        </div>
      </div>

      {/* Centered 3D Right-Pointing Arrow with Text */}
      <div className="flex flex-col items-center mt-8">
        <div className="flex items-center gap-3 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
          <span className="text-[#4ECDC4] font-large group-hover:text-[var(--accent)] transition-colors">
            <Link href="/about"><strong>Get To Know Me More</strong></Link>
          </span>
          <div className="relative w-10 h-10 text-[var(--accent)] animate-pulse-right">
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path 
                d="M2 12H18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className="opacity-80"
              />
              <path 
                d="M14 6L20 12L14 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                className="opacity-100"
              />
              <path 
                d="M14 6L17 9L20 12L17 15L14 18" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round"
                className="opacity-60"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}