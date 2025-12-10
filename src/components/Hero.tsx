'use client'

import {motion} from 'framer-motion'
import {ArrowRight, ChevronDown} from 'lucide-react'
import company from '@/data/company.json'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-1/4 -left-32 w-96 h-96 rounded-full dark:bg-accent-pink/20 bg-accent-pink/30 blur-[120px]"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full dark:bg-accent-purple/20 bg-accent-purple/30 blur-[120px]"
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full dark:bg-accent-teal/10 bg-accent-teal/20 blur-[150px]"
                    animate={{
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            </div>

            <div className="container-custom relative z-10 pt-20">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full dark:bg-dark-800/80 bg-white/80 border dark:border-dark-700 border-light-300 backdrop-blur-sm mb-8"
                    >
            <span className="relative flex h-2 w-2">
              <span
                  className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
            </span>
                        <span className="text-sm dark:text-dark-300 text-light-600">
              Available for new projects
            </span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.1}}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6"
                    >
                        <span className="dark:text-white text-light-900">Transforming Ideas</span>
                        <br/>
                        <span className="gradient-text">into Digital Excellence</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className="text-lg md:text-xl dark:text-dark-300 text-light-600 max-w-2xl mx-auto mb-10 text-balance"
                    >
                        {company.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.3}}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            href="#contact"
                            className="btn-primary group"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            Start Your Project
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                        </motion.a>
                        <motion.a
                            href="#portfolio"
                            className="btn-secondary"
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                        >
                            View Our Work
                        </motion.a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{opacity: 0, y: 40}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.5}}
                        className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                    >
                        {company.stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                className="text-center"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.4, delay: 0.6 + index * 0.1}}
                            >
                                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm dark:text-dark-400 text-light-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.2}}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.a
                    href="#about"
                    className="flex flex-col items-center gap-2 dark:text-dark-500 text-light-500 dark:hover:text-dark-300 hover:text-light-700 transition-colors"
                    animate={{y: [0, 8, 0]}}
                    transition={{duration: 1.5, repeat: Infinity}}
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown size={20}/>
                </motion.a>
            </motion.div>
        </section>
    )
}
