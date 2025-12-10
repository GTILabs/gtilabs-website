'use client'

import {motion, useInView} from 'framer-motion'
import {useRef} from 'react'
import {Shield, Target, Users, Zap} from 'lucide-react'
import company from '@/data/company.json'

const iconMap: { [key: string]: React.ReactNode } = {
    'Innovation': <Zap className="w-6 h-6"/>,
    'Quality': <Target className="w-6 h-6"/>,
    'Collaboration': <Users className="w-6 h-6"/>,
    'Integrity': <Shield className="w-6 h-6"/>,
}

export default function About() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    return (
        <section id="about" className="section-padding relative">
            <div className="container-custom" ref={ref}>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left content */}
                    <div>
                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6}}
                        >
              <span
                  className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6">
                About Us
              </span>
                        </motion.div>

                        <motion.h2
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, delay: 0.1}}
                            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
                        >
                            We Build Software That{' '}
                            <span className="gradient-text">Powers Business</span>
                        </motion.h2>

                        <motion.p
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, delay: 0.2}}
                            className="dark:text-dark-300 text-light-600 text-lg mb-8 leading-relaxed"
                        >
                            Founded in {company.founded}, {company.name} has grown from a small team of passionate
                            developers
                            into a full-service IT company. Based in {company.location}, we serve clients across
                            Southeast Asia
                            and beyond, delivering innovative solutions that drive real business results.
                        </motion.p>

                        <motion.p
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, delay: 0.3}}
                            className="dark:text-dark-300 text-light-600 text-lg mb-8 leading-relaxed"
                        >
                            Our team combines deep technical expertise with a genuine understanding of business
                            challenges.
                            We don't just write code – we craft solutions that make a difference.
                        </motion.p>

                        <motion.div
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.6, delay: 0.4}}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="flex items-center gap-2 dark:text-dark-300 text-light-600">
                                <div className="w-2 h-2 rounded-full bg-accent-teal"/>
                                <span>Enterprise Solutions</span>
                            </div>
                            <div className="flex items-center gap-2 dark:text-dark-300 text-light-600">
                                <div className="w-2 h-2 rounded-full bg-accent-blue"/>
                                <span>Cloud Native</span>
                            </div>
                            <div className="flex items-center gap-2 dark:text-dark-300 text-light-600">
                                <div className="w-2 h-2 rounded-full bg-accent-purple"/>
                                <span>Agile Delivery</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right content - Values */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {company.values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{opacity: 0, y: 30}}
                                animate={isInView ? {opacity: 1, y: 0} : {}}
                                transition={{duration: 0.5, delay: 0.2 + index * 0.1}}
                                className="glass-card p-6 group hover:border-primary-500/30 transition-all duration-300"
                            >
                                <div
                                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center text-primary-500 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform">
                                    {iconMap[value.title]}
                                </div>
                                <h3 className="text-lg font-semibold dark:text-white text-light-900 mb-2">
                                    {value.title}
                                </h3>
                                <p className="dark:text-dark-400 text-light-500 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
