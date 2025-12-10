'use client'

import {motion} from 'framer-motion'
import {ArrowUp, Github, Instagram, Linkedin, Twitter} from 'lucide-react'
import Image from 'next/image'
import company from '@/data/company.json'
import navigation from '@/data/navigation.json'

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="relative dark:bg-dark-900/50 bg-light-100/80 border-t dark:border-dark-800 border-light-300">
            <div className="container-custom py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <a href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/images/logo.png"
                                alt={company.name}
                                width={48}
                                height={48}
                                className="w-12 h-12 object-contain"
                            />
                            <span className="text-xl font-display font-bold dark:text-white text-light-900">
                {company.name}
              </span>
                        </a>
                        <p className="dark:text-dark-400 text-light-500 text-sm mb-6 leading-relaxed">
                            {company.tagline}. Building the future of digital experiences, one project at a time.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href={company.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                            >
                                <Github className="w-4 h-4"/>
                            </a>
                            <a
                                href={company.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                            >
                                <Linkedin className="w-4 h-4"/>
                            </a>
                            <a
                                href={company.social.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                            >
                                <Twitter className="w-4 h-4"/>
                            </a>
                            <a
                                href={company.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                            >
                                <Instagram className="w-4 h-4"/>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="dark:text-white text-light-900 font-semibold mb-4">Services</h4>
                        <ul className="space-y-3">
                            {navigation.footerNav.services.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="dark:text-white text-light-900 font-semibold mb-4">Company</h4>
                        <ul className="space-y-3">
                            {navigation.footerNav.company.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="dark:text-white text-light-900 font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {navigation.footerNav.resources.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 text-sm transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-8 border-t dark:border-dark-800 border-light-300 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="dark:text-dark-500 text-light-500 text-sm">
                        © {currentYear} {company.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="/privacy"
                           className="dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 text-sm transition-colors">
                            Privacy Policy
                        </a>
                        <a href="/terms"
                           className="dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 text-sm transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* Back to top button */}
            <motion.button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:bg-primary-400 transition-all z-40"
                initial={{opacity: 0, scale: 0.8}}
                animate={{opacity: 1, scale: 1}}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
            >
                <ArrowUp className="w-5 h-5"/>
            </motion.button>
        </footer>
    )
}
