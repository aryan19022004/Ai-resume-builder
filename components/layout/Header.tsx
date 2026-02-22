"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const user = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="backdrop-blur-md px-4 sm:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 sm:w-9 h-8 sm:h-9 transition-transform group-hover:scale-105">
              <div className="absolute top-0 left-0 w-4 sm:w-5 h-4 sm:h-5 bg-indigo-600 rounded-tl-lg"></div>
              <div className="absolute bottom-0 right-0 w-4 sm:w-5 h-4 sm:h-5 bg-purple-600 rounded-br-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm drop-shadow-md">RB</span>
              </div>
            </div>

            {/* Hide text on md and smaller screens */}
            <div className="hidden lg:flex items-baseline">
              <span className="text-lg sm:text-xl font-black tracking-tight text-gray-900">
                RESUME<span className="text-indigo-600">BUILDER</span>
              </span>
              <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-medium px-1.5 sm:px-2 py-0.5 bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-600 rounded-full border border-indigo-100">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center lg:order-2">
            {user?.isLoaded && !user?.isSignedIn ? (
              <Link
                href="/sign-in"
                className="text-gray-800 hover:bg-primary-700/10 duration-300 focus:ring-4 focus:ring-primary-700/30 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Log in
              </Link>
            ) : (
              <div className="mr-4">
                <UserButton showName={true} />
              </div>
            )}
            <Link
              href={`${!user?.isSignedIn ? "/sign-up" : "/dashboard"}`}
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
            >
              {!user?.isSignedIn ? "Get started" : "Dashboard"}
            </Link>
          </div>

          {/* Mobile Menu Button and User Section */}
          <div className="flex items-center md:hidden gap-2">
            {/* User section for mobile */}
            {user?.isLoaded && user?.isSignedIn && (
              <div className="mr-1">
                <UserButton showName={false} />
              </div>
            )}
            
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="md:hidden w-full mt-4" id="mobile-menu">
              <div className="flex flex-col space-y-3 py-3 px-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100">
                {/* Profile Info (if signed in) */}
                {user?.isLoaded && user?.isSignedIn && (
                  <div className="flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-lg">
                    <UserButton showName={false} />
                    <span className="text-sm font-medium text-gray-700">
                      {user.user?.fullName || user.user?.emailAddresses[0]?.emailAddress}
                    </span>
                  </div>
                )}

                {/* Mobile Menu Links - Only Dashboard remains */}
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:bg-primary-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>

                {/* Get Started/Login for non-signed in users */}
                {(!user?.isSignedIn || !user?.isLoaded) && (
                  <>
                    <hr className="my-1 border-gray-200" />
                    <Link
                      href="/sign-in"
                      className="text-gray-700 hover:bg-primary-50 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log in
                    </Link>
                    <Link
                      href="/sign-up"
                      className="text-white bg-primary-700 hover:bg-primary-800 px-3 py-2 rounded-md text-sm font-medium text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get started
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;