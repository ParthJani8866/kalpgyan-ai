"use client"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import Footer from "../components/Footer"
import Header from "../components/Header"

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const submitForm = (e: any) => {
        e.preventDefault()
        alert("Message sent!")
    }

    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* HERO */}
            <section className="max-w-5xl mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold text-slate-900">
                    Contact KalpGyan AI
                </h1>

                <p className="mt-4 text-slate-600">
                    Have questions, feedback, or partnership ideas?
                    We’d love to hear from you.
                </p>
            </section>
            <section className="bg-slate-50 py-14">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">

                    {/* LEFT */}
                    <div>
                        <h2 className="text-xl font-bold text-slate-900">Get in Touch</h2>

                        <div className="mt-6 space-y-4 text-sm text-slate-700">
                            <div className="flex items-center gap-3">
                                <Mail className="text-indigo-600" />
                                support@kalpgyan.ai
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="text-indigo-600" />
                                +91 XXXXX XXXXX
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin className="text-indigo-600" />
                                India
                            </div>
                        </div>
                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={submitForm}
                        className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4"
                    >
                        <input
                            name="name"
                            placeholder="Name"
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />

                        <input
                            name="email"
                            placeholder="Email"
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />

                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Message"
                            onChange={handleChange}
                            className="w-full border rounded-lg px-3 py-2"
                        />

                        <button
                            type="submit"
                            className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg"
                        >
                            <Send size={16} />
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}
