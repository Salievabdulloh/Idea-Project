'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

const About = () => {
    const { t } = useTranslation()

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 font-[Poppins]">

            {/* Hero Section */}
            <div className="w-full h-64 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/about-banner.jpg')" }}>
                <h1 className="font-bold text-4xl md:text-5xl text-blue-700 text-center drop-shadow-md">
                    {t('about.title', 'About JobNest')}
                </h1>

            </div>

            {/* Mission Section */}
            <div className="flex flex-col items-center text-center px-6 py-12 max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {t('about.missionTitle', 'Our Mission')}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                    {t('about.missionText', 'At JobNest, our mission is simple: to connect talent with opportunity. We believe that everyone deserves the chance to find meaningful work and that companies should have access to the right people to help them grow.')}
                </p>
            </div>

            {/* Values Section */}
            <div className="bg-white py-12 px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
                    {t('about.valuesTitle', 'Our Values')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.value1Title', 'Trust')}</h3>
                        <p className="text-gray-600">{t('about.value1Text', 'We build trust through transparency and honesty in everything we do.')}</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.value2Title', 'Innovation')}</h3>
                        <p className="text-gray-600">{t('about.value2Text', 'We embrace innovation to improve how people find jobs and hire talent.')}</p>
                    </div>
                    <div className="p-6 bg-gradient-to-br from-yellow-50 to-white rounded-2xl shadow-md hover:shadow-lg transition">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.value3Title', 'Community')}</h3>
                        <p className="text-gray-600">{t('about.value3Text', 'We foster community by connecting people and creating opportunities for growth.')}</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-12 text-center px-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {t('about.ctaTitle', 'Join Us on Our Journey')}
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-6">
                    {t('about.ctaText', 'Whether you are a job seeker looking for your next big opportunity or a company searching for the right talent, JobNest is here for you.')}
                </p>
                <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-2xl shadow-md hover:bg-green-700 transition">
                    {t('about.ctaButton', 'Get Started')}
                </button>
            </div>
        </div>
    )
}

export default About
