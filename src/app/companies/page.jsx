'use client'

import React from 'react'
import { useTranslation } from 'react-i18next'

const Companies = () => {
    const { t } = useTranslation()

    const partners = [
        {
            name: "TechNova",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcBmJYUYj67mXeSfDXSDJ5Q8TpVUbAsmQpg&s",
            description: t("companies.technova")
        },
        {
            name: "BuildRight",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRls12RLp-rrRVabqsD37v95d4bGC1tN_RD8Q&s",
            description: t("companies.buildright")
        },
        {
            name: "HealthPlus",
            logo: "https://i.fbcd.co/products/original/165a195fa46faad4a77d27eb5e15ba9bc584dae21d5315466de9a0476a8af6a3.jpg",
            description: t("companies.healthplus")
        },
        {
            name: "EduSmart",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToieEcBgb0dyHfdmRr8RAGejX5PMMzJzgveQ&s",
            description: t("companies.edusmart")
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-white to-blue-100 font-[Poppins]">
            <div
                className="w-full h-72 bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/images/partnership-banner.jpg')" }}>
                <h1 className="font-bold text-4xl md:text-5xl text-green-500 text-center drop-shadow-lg">
                    {t('companies.title')}
                </h1>
            </div>

            <div className="flex flex-col items-center justify-center text-center p-8 max-w-3xl mx-auto">
                <p className="text-gray-700 text-lg md:text-xl font-inter">
                    {t('companies.subtitle')}
                </p>
            </div>

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
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {partner.name}
                        </h3>
                        <p className="text-gray-600 text-center">{partner.description}</p>
                    </div>
                ))}
            </div>

            <div className="bg-white shadow-inner py-12 px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {t('companies.ctaTitle')}
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    {t('companies.ctaText')}
                </p>
                <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-2xl shadow-md hover:bg-blue-700 transition">
                    {t('companies.ctaButton')}
                </button>
            </div>
        </div>
    )
}

export default Companies
