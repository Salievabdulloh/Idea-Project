'use client'
import React, { useState } from 'react'

const HelpCenter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Submitting support request:', formData)
    alert('Your message has been sent!')
    setFormData({ name: '', email: '', message: '' })
  }

  // FAQ data
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click on 'Sign Up' and fill in your details."
    },
    {
      question: "How do I post a job?",
      answer: "Go to your dashboard and select 'Post a Job'."
    },
    {
      question: "Can I change my language?",
      answer: "Yes, use the language selector in the header."
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 p-8 font-inter">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-700 drop-shadow-lg">
        Help Center
      </h1>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* FAQs Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-xl p-4 shadow hover:shadow-md transition">
                <summary className="font-semibold cursor-pointer text-gray-800">{faq.question}</summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Support</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
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
      </div>
    </div>
  )
}

export default HelpCenter
