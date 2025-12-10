'use client'

import {motion, useInView} from 'framer-motion'
import {useRef} from 'react'
import {ArrowUpRight, BarChart3, Cloud, Code2, Lightbulb, Smartphone, Wrench} from 'lucide-react'
import services from '@/data/services.json'

const iconMap: { [key: string]: React.ReactNode } = {
    'Code2': <Code2 className="w-7 h-7"/>,
    'Cloud': <Cloud className="w-7 h-7"/>,
    'Smartphone': <Smartphone className="w-7 h-7"/>,
    'Lightbulb': <Lightbulb className="w-7 h-7"/>,
    'BarChart3': <BarChart3 className="w-7 h-7"/>,
    'Wrench': <Wrench className="w-7 h-7"/>,
}

export default function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    return (
        <section id="services" className="section-padding relative dark:bg-dark-900/30 bg-light-100/50">
            <div className="container-custom" ref={ref}>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
                    >
                        Our Services
                    </motion.span>

                    <motion.h2
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
                    >
                        End-to-End{' '}
                        <span className="gradient-text">IT Solutions</span>
                    </motion.h2>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="dark:text-dark-300 text-light-600 text-lg"
                    >
                        From concept to deployment and beyond, we provide comprehensive services
                        to help your business thrive in the digital age.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.1 + index * 0.1}}
                            className="group relative glass-card p-8 hover:border-primary-500/30 transition-all duration-500"
                        >
                            {/* Hover gradient effect */}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-accent-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>

                            <div className="relative">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    {iconMap[service.icon]}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold dark:text-white text-light-900 mb-3 flex items-center gap-2">
                                    {service.title}
                                    <ArrowUpRight
                                        className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300"/>
                                </h3>

                                {/* Description */}
                                <p className="dark:text-dark-400 text-light-500 text-sm leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {service.features.map((feature) => (
                                        <li
                                            key={feature}
                                            className="flex items-center gap-2 text-sm dark:text-dark-300 text-light-600"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"/>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
