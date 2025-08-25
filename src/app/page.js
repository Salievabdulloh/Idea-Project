'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useTranslation } from 'react-i18next'
import '../lib/i18n'

const Home = () => {
  const router = useRouter()

  let { t, i18n } = useTranslation()

  function changeLang(lang) {
    i18n.changeLanguage(lang)
  }

  let i18next = localStorage.getItem('i18nextLng')

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-blue-100 via-white to-green-100 font-[Poppins]">
      <h1 className="font-bold text-4xl md:text-5xl text-gray-900 text-center mb-8">
        {t('home.welcome')} <span className="text-blue-600">JobNest</span> 🪺
      </h1>
      <p className="text-gray-600 text-lg text-center max-w-xl mb-10 font-inter">
        Connecting <span className="text-green-600 font-semibold">talent</span> with
        <span className="text-blue-600 font-semibold"> opportunity</span>.
        Whether you’re looking for your next job or hiring the right person, you’re in the right place.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <button
          onClick={() => router.push('/registration?type=jobseeker')}
          className="px-8 cursor-pointer py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition"
        >
          I’m Searching for Work
        </button>
        <button
          onClick={() => router.push('/registration?type=workerseeker')}
          className="px-8 cursor-pointer py-4 bg-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-green-700 transition"
        >
          I’m Hiring Workers
        </button>
        <select
          value={i18next}
          onChange={(e) => changeLang(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-300"
        >
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </div>
    </div>
  )
}

export default Home