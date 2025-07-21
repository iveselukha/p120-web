import type { Metadata } from "next";
import "./globals.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/700.css";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Project120 Health Platform",
  description: "Holistic health and longevity ecosystem for actionable wellness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="font-mono antialiased">
        {/* Header navigation bar moved from homepage for global use */}
        <nav className="w-full flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/80 backdrop-blur sticky top-0 z-10 overflow-visible" style={{minHeight: '64px'}}>
          {/* Left: Logo + Nav Links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Project120 Logo" width={200} height={200} className="max-h-[44px] w-auto object-contain" priority />
            </Link>
            <div className="hidden md:flex gap-8 text-base font-medium">
              <Link href="/how-it-works" className="hover:underline underline-offset-4">How it works</Link>
              <Link href="/blood-tests" className="hover:underline underline-offset-4">Blood tests</Link>
              <Link href="/contact" className="hover:underline underline-offset-4">Contact</Link>
            </div>
          </div>
          {/* Right: Book a test & Login */}
          <div className="flex items-center gap-4">
            <Link href="/test-selection" className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold border border-black dark:border-white hover:bg-gray-900 dark:hover:bg-gray-200 transition">Book a test</Link>
            <Link href="/dashboard" className="ml-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition" aria-label="Login">
              {/* Use a generic user icon for login */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z" />
              </svg>
            </Link>
          </div>
        </nav>
        {children}
        <footer className="w-full bg-black text-white border-t border-gray-800 mt-24 py-12 px-4">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            {/* Logo/Brand */}
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center font-bold text-lg select-none">P</div>
              <span className="ml-2 font-semibold tracking-wide text-lg">Project120</span>
            </div>
            {/* Navigation */}
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm">
              <Link href="/test-selection" className="hover:underline underline-offset-4 text-white">How it works</Link>
              <Link href="/test-selection" className="hover:underline underline-offset-4 text-white">Blood tests</Link>
              <Link href="/contact" className="hover:underline underline-offset-4 text-white">Contact</Link>
            </nav>
            {/* Legal */}
            <nav className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:underline underline-offset-4 text-gray-400">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:underline underline-offset-4 text-gray-400">Terms of Service</Link>
            </nav>
          </div>
          <div className="max-w-6xl mx-auto mt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Project120. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
