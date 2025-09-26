'use client'

import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10 grid md:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold text-blue-600">JobNest 🪺</h1>
          <p className="text-gray-600 mt-2">
            Connecting talent with opportunity. Find your next job or the perfect candidate here.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="text-gray-600 space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="text-gray-600 space-y-2">
            <li><Link href="/help">Help Center</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-3 text-gray-600">
            <Link href="#" className="hover:text-blue-600 transition">Twitter</Link>
            <Link href="#" className="hover:text-blue-600 transition">LinkedIn</Link>
            <Link href="#" className="hover:text-blue-600 transition">Facebook</Link>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 mt-6 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} JobNest. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
