'use client'

import {motion, useInView} from 'framer-motion'
import {useRef, useState} from 'react'
import {ExternalLink} from 'lucide-react'
import portfolio from '@/data/portfolio.json'

export default function Portfolio() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    const categories = ['All', ...new Set(portfolio.projects.map(p => p.category))]
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects = activeCategory === 'All'
        ? portfolio.projects
        : portfolio.projects.filter(p => p.category === activeCategory)

    return (
        <section id="portfolio" className="section-padding relative">
            <div className="container-custom" ref={ref}>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <motion.span
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
                    >
                        Our Portfolio
                    </motion.span>

                    <motion.h2
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
                    >
                        Projects We're{' '}
                        <span className="gradient-text">Proud Of</span>
                    </motion.h2>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="dark:text-dark-300 text-light-600 text-lg"
                    >
                        Explore some of our recent work across various industries and technologies.
                    </motion.p>
                </div>

                {/* Category Filter */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                activeCategory === category
                                    ? 'bg-primary-500 text-white'
                                    : 'dark:bg-dark-800 bg-light-200 dark:text-dark-300 text-light-600 dark:hover:bg-dark-700 hover:bg-light-300 dark:hover:text-white hover:text-light-900'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.1 + index * 0.1}}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            className="group relative rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background with gradient */}
                            <div
                                className="aspect-[4/3] relative"
                                style={{
                                    background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`
                                }}
                            >
                                {/* Decorative elements */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div
                                        className="w-32 h-32 rounded-full blur-3xl opacity-30"
                                        style={{backgroundColor: project.color}}
                                    />
                                </div>

                                {/* Category badge */}
                                <div
                                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
                                    style={{backgroundColor: project.color}}
                                >
                                    {project.category}
                                </div>

                                {/* Hover overlay */}
                                <div
                                    className={`absolute inset-0 dark:bg-dark-950/80 bg-light-900/80 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                                        hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    <motion.div
                                        initial={{scale: 0.8, opacity: 0}}
                                        animate={hoveredId === project.id ? {scale: 1, opacity: 1} : {}}
                                        className="w-12 h-12 rounded-full dark:bg-white bg-light-900 flex items-center justify-center"
                                    >
                                        <ExternalLink className="w-5 h-5 dark:text-dark-900 text-white"/>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                className="p-6 dark:bg-dark-800/50 bg-white/80 backdrop-blur border-t dark:border-dark-700/50 border-light-300/50">
                                <h3 className="text-lg font-semibold dark:text-white text-light-900 mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="dark:text-dark-400 text-light-500 text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="tech-badge">
                      +{project.technologies.length - 4}
                    </span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="text-center mt-12"
                >
                    <a href="/portfolio" className="btn-secondary">
                        View All Projects
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
