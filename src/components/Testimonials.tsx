'use client'

import {motion, useInView} from 'framer-motion'
import {useRef, useState} from 'react'
import {ChevronLeft, ChevronRight, Quote} from 'lucide-react'
import clients from '@/data/clients.json'

export default function Testimonials() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % clients.testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + clients.testimonials.length) % clients.testimonials.length)
    }

    return (
        <section className="section-padding relative dark:bg-dark-900/30 bg-light-100/50 overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full dark:bg-primary-500/5 bg-primary-500/10 blur-[150px]"/>

            <div className="container-custom relative" ref={ref}>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
                    >
                        Testimonials
                    </motion.span>

                    <motion.h2
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
                    >
                        What Our Clients{' '}
                        <span className="gradient-text">Say</span>
                    </motion.h2>
                </div>

                {/* Testimonials Carousel */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.2}}
                    className="max-w-4xl mx-auto"
                >
                    <div className="glass-card p-8 md:p-12 relative">
                        {/* Quote icon */}
                        <div
                            className="absolute -top-6 left-8 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-purple flex items-center justify-center">
                            <Quote className="w-6 h-6 text-white"/>
                        </div>

                        {/* Testimonial content */}
                        <div className="relative">
                            <motion.div
                                key={currentIndex}
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.3}}
                            >
                                <p className="text-lg md:text-xl dark:text-dark-200 text-light-700 leading-relaxed mb-8 italic">
                                    "{clients.testimonials[currentIndex].quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    {/* Avatar */}
                                    <div
                                        className="w-14 h-14 rounded-full dark:bg-dark-700 bg-light-200 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-500 dark:text-primary-400">
                      {clients.testimonials[currentIndex].author.split(' ').map(n => n[0]).join('')}
                    </span>
                                    </div>

                                    {/* Info */}
                                    <div>
                                        <p className="font-semibold dark:text-white text-light-900">
                                            {clients.testimonials[currentIndex].author}
                                        </p>
                                        <p className="text-sm dark:text-dark-400 text-light-500">
                                            {clients.testimonials[currentIndex].role}, {clients.testimonials[currentIndex].company}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Navigation */}
                        <div className="absolute bottom-8 right-8 flex items-center gap-2">
                            <button
                                onClick={prevTestimonial}
                                className="w-10 h-10 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                            >
                                <ChevronLeft className="w-5 h-5"/>
                            </button>
                            <button
                                onClick={nextTestimonial}
                                className="w-10 h-10 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 dark:hover:text-white hover:text-light-900 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                            >
                                <ChevronRight className="w-5 h-5"/>
                            </button>
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
                            {clients.testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all ${
                                        index === currentIndex
                                            ? 'w-6 bg-primary-500'
                                            : 'dark:bg-dark-600 bg-light-400 dark:hover:bg-dark-500 hover:bg-light-500'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Client Logos */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.4}}
                    className="mt-20"
                >
                    <p className="text-center dark:text-dark-500 text-light-500 text-sm mb-8 uppercase tracking-widest">
                        Trusted by Leading Companies
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {clients.clients.map((client, index) => (
                            <motion.div
                                key={client.name}
                                initial={{opacity: 0, y: 20}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.3, delay: 0.5 + index * 0.1}}
                                className="px-6 py-3 rounded-lg dark:bg-dark-800/50 bg-white/80 dark:text-dark-400 text-light-600 dark:hover:text-dark-200 hover:text-light-800 dark:hover:bg-dark-800 hover:bg-white transition-all cursor-default"
                            >
                                <span className="font-medium">{client.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
