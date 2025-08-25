'use client'

import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JobNest 🪺
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        {/* Call to Action */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/registration"
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden">
          {/* You can add a hamburger menu here later */}
          <button className="text-gray-600">☰</button>
        </div>
      </div>
    </header>
  )
}

export default Header
