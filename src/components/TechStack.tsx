'use client'

import {motion, useInView} from 'framer-motion'
import {useRef} from 'react'
import techstack from '@/data/techstack.json'

export default function TechStack() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    return (
        <section id="techstack" className="section-padding relative dark:bg-dark-900/30 bg-light-100/50">
            <div className="container-custom" ref={ref}>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
                    >
                        Tech Stack
                    </motion.span>

                    <motion.h2
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
                    >
                        Technologies We{' '}
                        <span className="gradient-text">Master</span>
                    </motion.h2>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="dark:text-dark-300 text-light-600 text-lg"
                    >
                        We stay at the forefront of technology, using the best tools for each project.
                    </motion.p>
                </div>

                {/* Tech Categories */}
                <div className="space-y-8">
                    {techstack.categories.map((category, catIndex) => (
                        <motion.div
                            key={category.name}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.1 + catIndex * 0.1}}
                            className="glass-card p-6 md:p-8"
                        >
                            <h3 className="text-lg font-semibold dark:text-white text-light-900 mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary-500"/>
                                {category.name}
                            </h3>

                            <div className="flex flex-wrap gap-3">
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{opacity: 0, scale: 0.8}}
                                        animate={isInView ? {opacity: 1, scale: 1} : {}}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.2 + catIndex * 0.1 + techIndex * 0.05
                                        }}
                                        whileHover={{scale: 1.05, y: -2}}
                                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl dark:bg-dark-800/80 bg-white/80 border dark:border-dark-700 border-light-300 dark:hover:border-primary-500/30 hover:border-primary-500/30 dark:hover:bg-dark-800 hover:bg-white transition-all duration-300 cursor-default"
                                    >
                                        <span className="text-xl">{tech.icon}</span>
                                        <span className="text-sm font-medium dark:text-dark-200 text-light-700">
                      {tech.name}
                    </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="mt-12 text-center"
                >
                    <p className="dark:text-dark-400 text-light-500 text-sm">
                        Don't see your preferred technology? No worries – our team is always learning and adapting to
                        new tools.{' '}
                        <a href="#contact"
                           className="text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 underline">
                            Let's discuss your requirements
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
