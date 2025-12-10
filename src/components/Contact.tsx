'use client'

import {motion, useInView} from 'framer-motion'
import {useRef, useState} from 'react'
import {CheckCircle, Mail, MapPin, Phone, Send} from 'lucide-react'
import company from '@/data/company.json'

export default function Contact() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000)
    }

    return (
        <section id="contact" className="section-padding relative">
            {/* Background elements */}
            <div
                className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full dark:bg-primary-500/10 bg-primary-500/20 blur-[150px]"/>
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full dark:bg-accent-purple/10 bg-accent-purple/20 blur-[150px]"/>

            <div className="container-custom relative" ref={ref}>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
                    >
                        Contact Us
                    </motion.span>

                    <motion.h2
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
                    >
                        Let's Build Something{' '}
                        <span className="gradient-text">Amazing</span>
                    </motion.h2>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="dark:text-dark-300 text-light-600 text-lg"
                    >
                        Ready to start your project? Get in touch with us and let's discuss how we can help.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.3}}
                    >
                        <div className="glass-card p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            className="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            className="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                        placeholder="john@company.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                        placeholder="Your Company"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2">
                                        Project Type
                                    </label>
                                    <select
                                        required
                                        className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="custom-software">Custom Software Development</option>
                                        <option value="cloud">Cloud Solutions</option>
                                        <option value="mobile">Mobile Development</option>
                                        <option value="consulting">IT Consulting</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium dark:text-dark-300 text-light-600 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-300 dark:text-white text-light-900 dark:placeholder-dark-500 placeholder-light-400 dark:focus:border-primary-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all outline-none resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary w-full group"
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5 mr-2"/>
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"/>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        animate={isInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.5, delay: 0.4}}
                        className="space-y-8"
                    >
                        {/* Contact cards */}
                        <div
                            className="glass-card p-6 flex items-start gap-4 hover:border-primary-500/30 transition-all">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 shrink-0">
                                <Mail className="w-5 h-5"/>
                            </div>
                            <div>
                                <h3 className="dark:text-white text-light-900 font-semibold mb-1">Email</h3>
                                <a
                                    href={`mailto:${company.email}`}
                                    className="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                >
                                    {company.email}
                                </a>
                            </div>
                        </div>

                        <div
                            className="glass-card p-6 flex items-start gap-4 hover:border-primary-500/30 transition-all">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 shrink-0">
                                <Phone className="w-5 h-5"/>
                            </div>
                            <div>
                                <h3 className="dark:text-white text-light-900 font-semibold mb-1">Phone</h3>
                                <a
                                    href={`tel:${company.phone}`}
                                    className="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                >
                                    {company.phone}
                                </a>
                            </div>
                        </div>

                        <div
                            className="glass-card p-6 flex items-start gap-4 hover:border-primary-500/30 transition-all">
                            <div
                                className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 shrink-0">
                                <MapPin className="w-5 h-5"/>
                            </div>
                            <div>
                                <h3 className="dark:text-white text-light-900 font-semibold mb-1">Office</h3>
                                <p className="dark:text-dark-400 text-light-500">
                                    {company.address}
                                </p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-6">
                            <h3 className="dark:text-white text-light-900 font-semibold mb-4">Follow Us</h3>
                            <div className="flex gap-3">
                                {Object.entries(company.social).map(([platform, url]) => (
                                    <a
                                        key={platform}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all capitalize"
                                    >
                                        {platform[0].toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className="glass-card p-2 aspect-video rounded-2xl overflow-hidden">
                            <div
                                className="w-full h-full dark:bg-dark-800 bg-light-200 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-8 h-8 text-primary-500 mx-auto mb-2"/>
                                    <p className="dark:text-dark-400 text-light-500 text-sm">
                                        {company.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
