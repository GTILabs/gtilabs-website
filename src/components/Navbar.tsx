'use client'

import {useEffect, useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import {Menu, X} from 'lucide-react'
import Image from 'next/image'
import navigation from '@/data/navigation.json'
import company from '@/data/company.json'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'dark:bg-dark-950/80 bg-white/80 backdrop-blur-xl border-b dark:border-dark-800/50 border-light-300/50'
                    : 'bg-transparent'
            }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.a
                        href="/"
                        className="flex items-center gap-3"
                        whileHover={{scale: 1.02}}
                        whileTap={{scale: 0.98}}
                    >
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
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navigation.mainNav.map((item, index) => (
                            <motion.a
                                key={item.label}
                                href={item.href}
                                className="px-4 py-2 text-sm dark:text-dark-300 text-light-600 dark:hover:text-white hover:text-light-900 transition-colors rounded-lg dark:hover:bg-dark-800/50 hover:bg-light-200/50"
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1}}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </div>

                    {/* Right side: Theme Toggle + CTA */}
                    <div className="hidden md:flex items-center gap-3">
                        <ThemeToggle/>
                        <motion.a
                            href="#contact"
                            className="btn-primary"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Get in Touch
                        </motion.a>
                    </div>

                    {/* Mobile: Theme Toggle + Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle/>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 dark:text-dark-300 text-light-600 dark:hover:text-white hover:text-light-900"
                        >
                            {isOpen ? <X size={24}/> : <Menu size={24}/>}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: 'auto'}}
                        exit={{opacity: 0, height: 0}}
                        className="md:hidden dark:bg-dark-900/95 bg-white/95 backdrop-blur-xl border-t dark:border-dark-800 border-light-300"
                    >
                        <div className="container-custom py-6 space-y-2">
                            {navigation.mainNav.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 dark:text-dark-200 text-light-700 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-800 hover:bg-light-200 rounded-lg transition-colors"
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: index * 0.05}}
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <div className="pt-4">
                                <a href="#contact" className="btn-primary w-full text-center">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
