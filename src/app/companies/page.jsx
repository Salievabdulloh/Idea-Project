'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

const Companies = () => {
    const { t } = useTranslation()

    // Example partner data (replace logos with real ones in /public/logos/)
    const partners = [
        {
            name: "TechNova",
            logo: "/logos/technova.png", // Example local path
            description: "Innovating in software and digital solutions."
        },
        {
            name: "BuildRight",
            logo: "/logos/buildright.png",
            description: "Leaders in construction and infrastructure."
        },
        {
            name: "HealthPlus",
            logo: "/logos/healthplus.png",
            description: "Delivering healthcare with compassion."
        },
        {
            name: "EduSmart",
            logo: "/logos/edusmart.png",
            description: "Transforming education with modern tools."
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 font-[Poppins]">

            {/* Hero Section */}
            <div className="w-full h-72 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: "url('/images/partnership-banner.jpg')" }}>
                <h1 className="font-bold text-4xl md:text-5xl text-white text-center drop-shadow-lg">
                    {t('companies.title', 'Our Trusted Partners')}
                </h1>
            </div>

            {/* Intro Section */}
            <div className="flex flex-col items-center justify-center text-center p-8 max-w-3xl mx-auto">
                <p className="text-gray-700 text-lg md:text-xl font-inter">
                    {t('companies.subtitle', 'We collaborate with industry leaders to bring you reliable opportunities and services.')}
                </p>
            </div>

            {/* Partner Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl mx-auto px-6 py-12">
                {partners.map((partner, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition"
                    >
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="mb-4 h-16 object-contain"
                        />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                        <p className="text-gray-600 text-center">{partner.description}</p>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div className="bg-white shadow-inner py-12 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {t('companies.ctaTitle', 'Want to Partner with Us?')}
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    {t('companies.ctaText', 'Join our growing network of trusted organizations and create opportunities together.')}
                </p>
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition">
                    {t('companies.ctaButton', 'Become a Partner')}
                </button>
            </div>
        </div>
    )
}

export default Companies
