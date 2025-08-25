'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const regions = [
    {
      key: 'capital',
      img: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop',
    },
    {
      key: 'techHub',
      img: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1200&auto=format&fit=crop',
    },
    {
      key: 'industrial',
      img: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200&auto=format&fit=crop',
    },
    {
      key: 'mountain',
      img: 'https://images.unsplash.com/photo-1502303756787-90e8f0b84a22?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  const industries = ['tech', 'construction', 'healthcare', 'education', 'agriculture', 'tourism']

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 text-gray-900 font-[Poppins]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/50 via-white to-green-200/40" />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-700 to-green-600 bg-clip-text text-transparent drop-shadow">
            {t('home.hero.title', 'Work & Opportunity Across Our Country')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-center text-gray-700 max-w-3xl mx-auto">
            {t('home.hero.subtitle', 'Discover regions, industries, salaries and everything you need to build your career here.')}
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link href="/jobs" className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              {t('home.hero.ctaJobs', 'Explore Jobs')}
            </Link>
            <Link href="/companies" className="px-6 py-3 rounded-2xl border border-gray-300 hover:border-blue-400 hover:bg-white transition">
              {t('home.hero.ctaCompanies', 'Meet Companies')}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {t('home.highlights.title', 'Why Work Here')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t('home.highlights.demand.title', 'High Talent Demand')}</h3>
            <p className="text-gray-600">{t('home.highlights.demand.desc', 'Fast‑growing teams in tech, construction, health and more.')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t('home.highlights.regions.title', 'Diverse Regions')}</h3>
            <p className="text-gray-600">{t('home.highlights.regions.desc', 'City life, mountain towns and industrial hubs to match your style.')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{t('home.highlights.openness.title', 'Welcoming Culture')}</h3>
            <p className="text-gray-600">{t('home.highlights.openness.desc', 'Collaborative teams, mentorship and multilingual workplaces.')}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">{t('home.regions.title', 'Key Regions & Cities')}</h2>
          <Link href="/about" className="text-blue-600 hover:underline">{t('home.regions.link', 'See full overview')}</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {regions.map((r) => (
            <div key={r.key} className="group rounded-2xl overflow-hidden shadow bg-white hover:shadow-xl transition">
              <div className="h-36 w-full overflow-hidden">
                <img src={r.img} alt={r.key} className="h-full w-full object-cover group-hover:scale-105 transition" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{t(`home.regions.items.${r.key}.title`, 'Region')}</h3>
                <p className="text-sm text-gray-600 mt-1">{t(`home.regions.items.${r.key}.desc`, 'Opportunities across sectors and lifestyles.')}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t('home.industries.title', 'In‑Demand Industries')}</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((key) => (
            <span key={key} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white text-sm shadow">
              {t(`home.industries.items.${key}`, key)}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">{t('home.salary.title', 'Salary & Cost of Living')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-1">{t('home.salary.housing.title', 'Housing')}</h4>
            <p className="text-gray-700">{t('home.salary.housing.desc', 'Affordable options in most regions, premium choices in city centers.')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-1">{t('home.salary.transport.title', 'Transport')}</h4>
            <p className="text-gray-700">{t('home.salary.transport.desc', 'Public transit and ride‑hailing make commuting predictable and budget‑friendly.')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h4 className="font-semibold mb-1">{t('home.salary.food.title', 'Food & Daily Life')}</h4>
            <p className="text-gray-700">{t('home.salary.food.desc', 'Local cuisine and supermarkets at a wide range of price points.')}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{t('home.culture.title', 'Work Culture')}</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>{t('home.culture.point1', 'Collaborative teams & mentorship')}</li>
              <li>{t('home.culture.point2', 'Healthy work‑life balance')}</li>
              <li>{t('home.culture.point3', 'Respect for time & commitments')}</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{t('home.languages.title', 'Languages')}</h3>
            <p className="text-gray-700">{t('home.languages.desc', 'Multiple languages used in business; inclusive, friendly communication in teams.')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <h3 className="text-xl font-semibold mb-2">{t('home.learning.title', 'Learning & Growth')}</h3>
            <p className="text-gray-700">{t('home.learning.desc', 'Upskilling programs, bootcamps and community events to grow your career.')}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="rounded-2xl bg-white shadow p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{t('home.partners.title', 'Our Trusted Partners')}</h2>
            <p className="text-gray-700">{t('home.partners.subtitle', 'We collaborate with leading organizations to bring reliable opportunities and services.')}</p>
            <div className="mt-6 flex gap-4">
              <Link href="/companies" className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
                {t('home.partners.button', 'See Partners')}
              </Link>
              <Link href="/registration?type=workerseeker" className="px-5 py-3 rounded-xl border border-gray-300 hover:border-blue-400 transition">
                {t('home.partners.cta', 'Become a Partner')}
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 w-full md:w-1/2">
            {['TechNova', 'BuildRight', 'HealthPlus', 'EduSmart', 'AgriCo', 'TourX'].map((name) => (
              <div key={name} className="h-16 bg-gray-100 rounded-xl flex items-center justify-center text-gray-500 text-sm">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t('home.start.title', 'Get Started in Minutes')}</h2>
          <p className="text-gray-700 mt-3">{t('home.start.subtitle', 'Create your profile, explore roles and connect with top employers.')}</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-3xl">🧭</div>
            <h3 className="font-semibold mt-2">{t('home.start.step1.title', 'Explore Jobs')}</h3>
            <p className="text-gray-600">{t('home.start.step1.desc', 'Search by region, industry or skill to find the right fit.')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-3xl">🧑‍💼</div>
            <h3 className="font-semibold mt-2">{t('home.start.step2.title', 'Complete Your Profile')}</h3>
            <p className="text-gray-600">{t('home.start.step2.desc', 'Showcase skills, projects and experience to stand out.')}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow">
            <div className="text-3xl">🤝</div>
            <h3 className="font-semibold mt-2">{t('home.start.step3.title', 'Connect & Apply')}</h3>
            <p className="text-gray-600">{t('home.start.step3.desc', 'Message employers and apply with one click.')}</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/jobs" className="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
            {t('home.start.ctaJobs', 'Browse Jobs')}
          </Link>
          <Link href="/registration?type=jobseeker" className="px-6 py-3 rounded-2xl border border-gray-300 hover:border-blue-400 transition">
            {t('home.start.ctaProfile', 'Create Profile')}
          </Link>
        </div>
      </section>

      {/* <div className="h-6" /> */}
    </div>
  )
}
