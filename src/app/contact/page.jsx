'use client'
import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Contact form submitted:', formData)
        alert('Your message has been sent!')
        setFormData({ name: '', email: '', subject: '', message: '' })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-10 font-inter">
            <div className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">
                    Contact Us
                </h1>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    Have questions or need help? Fill out the form below or reach out directly via email or phone.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Info</h2>
                    <div className="flex flex-col gap-4 text-gray-700">
                        <p><strong>Email:</strong> abdullohsaliev2007@gmail.com</p>
                        <p><strong>Phone:</strong> +992 918 99 76 60</p>
                        <p><strong>Location:</strong> 123 JobNest Street, City, Country</p>
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800">Follow Us</h3>
                        <div className="flex gap-4">
                            <a href="#" className="text-blue-600 hover:text-blue-800 font-semibold">Twitter</a>
                            <a href="#" className="text-blue-700 hover:text-blue-900 font-semibold">LinkedIn</a>
                            <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto mt-16">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Our Office Location</h2>
                <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500">
                    Map Placeholder
                </div>
            </div>
        </div>
    )
}

export default Contact
