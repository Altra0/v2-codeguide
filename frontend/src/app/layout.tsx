import type { Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Button } from '../components/ui/button'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'LOCO - Career Alignment & Onboarding System',
  description: 'AI-powered career alignment and onboarding system that guides you through personalized roadmaps and skill-building opportunities.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
          <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
            <div className="container mx-auto flex h-16 items-center px-4 md:px-6 max-w-6xl">
              <div className="flex-1 flex items-center">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg w-10 h-10 flex items-center justify-center text-white font-bold transform transition-transform group-hover:scale-105">L</div>
                  <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-300">LOCO</span>
                </Link>
              </div>
              
              <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
                <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/features" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/resources" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
                  Resources
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/contact" className="text-sm font-medium hover:text-blue-600 transition-colors relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              </nav>
              
              <div className="flex-1 flex items-center justify-end gap-4">
                <SignedOut>
                  <div className="hidden sm:flex items-center gap-3">
                    <SignInButton mode="modal">
                      <Button variant="ghost" size="sm" className="h-9 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-400">
                        Sign In
                      </Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button size="sm" className="h-9 bg-blue-600 hover:bg-blue-700 text-white px-4">
                        Sign Up
                      </Button>
                    </SignUpButton>
                  </div>
                  <div className="sm:hidden">
                    <SignInButton mode="modal">
                      <Button variant="ghost" size="icon" className="h-9 w-9 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-blue-950 dark:hover:text-blue-400">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      </Button>
                    </SignInButton>
                  </div>
                </SignedOut>
                <SignedIn>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-9 w-9 border-2 border-blue-100 hover:border-blue-200 dark:border-blue-900 dark:hover:border-blue-800"
                      }
                    }}
                  />
                </SignedIn>
              </div>
            </div>
          </header>
          
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          
          <footer className="border-t bg-gray-50 dark:bg-gray-900 mt-auto">
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-10 justify-items-center md:justify-items-start">
                <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
                  <Link href="/" className="flex items-center gap-2 group mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg w-8 h-8 flex items-center justify-center text-white font-bold transform transition-transform group-hover:scale-105">L</div>
                    <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-300">LOCO</span>
                  </Link>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mb-6">
                    AI-powered career alignment and onboarding system that helps you discover the perfect career path through personalized guidance and skill development.
                  </p>
                  <div className="flex space-x-4 justify-center md:justify-start">
                    <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="Twitter">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="LinkedIn">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400" aria-label="GitHub">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li><Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">About Us</Link></li>
                    <li><Link href="/team" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Our Team</Link></li>
                    <li><Link href="/careers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Careers</Link></li>
                  </ul>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Blog</Link></li>
                    <li><Link href="/guides" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Guides</Link></li>
                    <li><Link href="/faq" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">FAQ</Link></li>
                  </ul>
                </div>
                
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 mb-4">Legal</h3>
                  <ul className="space-y-3">
                    <li><Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Terms of Service</Link></li>
                    <li><Link href="/cookies" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">Cookie Policy</Link></li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  &copy; {new Date().getFullYear()} LOCO. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0">
                  <ul className="flex space-x-6 justify-center">
                    <li>
                      <Link href="/accessibility" className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                        Accessibility
                      </Link>
                    </li>
                    <li>
                      <Link href="/sitemap" className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                        Sitemap
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  )
} 