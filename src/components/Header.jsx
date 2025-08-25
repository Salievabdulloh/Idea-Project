'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import '../lib/i18n'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en')

  useEffect(() => {
    const storedLang = localStorage.getItem('i18nextLng') || 'en'
    setLang(storedLang)
  }, [])

  function changeLang(lang) {
    i18n.changeLanguage(lang)
    localStorage.setItem('i18nextLng', lang)
    setLang(lang)
  }
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6 md:px-10">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JobNest 🪺
        </Link>

        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/home">Home</Link>
          <Link href="/jobs">Jobs</Link>
          <Link href="/companies">Companies</Link>
          <Link href="/about">About</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

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
          <select
            value={lang}
            onChange={(e) => changeLang(e.target.value)}
            className="px-3 py-2 rounded-md border border-gray-300"
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </div>

        <div className="md:hidden">
          <button className="text-gray-600">☰</button>
        </div>
      </div>
    </header>
  )
}

export default Header
