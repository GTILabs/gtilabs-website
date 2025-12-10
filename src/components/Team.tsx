'use client'

import {motion, useInView} from 'framer-motion'
import {useRef} from 'react'
import {Github, Linkedin, Twitter} from 'lucide-react'
import team from '@/data/team.json'

export default function Team() {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true, margin: '-100px'})

    return (
        <section id="team" className="section-padding relative">
            <div className="container-custom" ref={ref}>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{opacity: 0, y: 20}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5}}
                        className="inline-block px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 dark:text-primary-400 text-sm font-medium mb-6"
                    >
                        Our Team
                    </motion.span>

                    <motion.h2
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.1}}
                        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold dark:text-white text-light-900 mb-6"
                    >
                        Meet the{' '}
                        <span className="gradient-text">Experts</span>
                    </motion.h2>

                    <motion.p
                        initial={{opacity: 0, y: 30}}
                        animate={isInView ? {opacity: 1, y: 0} : {}}
                        transition={{duration: 0.5, delay: 0.2}}
                        className="dark:text-dark-300 text-light-600 text-lg"
                    >
                        Our talented team brings together diverse expertise and a shared passion
                        for building exceptional software.
                    </motion.p>
                </div>

                {/* Team Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.team.map((member, index) => (
                        <motion.div
                            key={member.id}
                            initial={{opacity: 0, y: 30}}
                            animate={isInView ? {opacity: 1, y: 0} : {}}
                            transition={{duration: 0.5, delay: 0.1 + index * 0.1}}
                            className="group glass-card p-6 text-center hover:border-primary-500/30 transition-all duration-300"
                        >
                            {/* Avatar */}
                            <div className="relative w-28 h-28 mx-auto mb-6">
                                <div
                                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-purple opacity-20 group-hover:opacity-40 transition-opacity"/>
                                <div
                                    className="relative w-full h-full rounded-full dark:bg-dark-700 bg-light-200 flex items-center justify-center overflow-hidden">
                                    {/* Placeholder avatar with initials */}
                                    <span
                                        className="text-2xl font-bold dark:text-dark-300 text-light-600 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                                </div>
                                {/* Online indicator */}
                                <div
                                    className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-accent-teal border-2 dark:border-dark-900 border-white"/>
                            </div>

                            {/* Info */}
                            <h3 className="text-lg font-semibold dark:text-white text-light-900 mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                                {member.name}
                            </h3>
                            <p className="text-primary-500 dark:text-primary-400 text-sm font-medium mb-3">
                                {member.role}
                            </p>
                            <p className="dark:text-dark-400 text-light-500 text-sm leading-relaxed mb-4">
                                {member.bio}
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center justify-center gap-3">
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                                    >
                                        <Linkedin className="w-4 h-4"/>
                                    </a>
                                )}
                                {member.github && (
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                                    >
                                        <Github className="w-4 h-4"/>
                                    </a>
                                )}
                                {member.twitter && (
                                    <a
                                        href={member.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-9 h-9 rounded-lg dark:bg-dark-800 bg-light-200 flex items-center justify-center dark:text-dark-400 text-light-500 hover:text-primary-500 dark:hover:text-primary-400 dark:hover:bg-dark-700 hover:bg-light-300 transition-all"
                                    >
                                        <Twitter className="w-4 h-4"/>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Join Team CTA */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={isInView ? {opacity: 1, y: 0} : {}}
                    transition={{duration: 0.5, delay: 0.6}}
                    className="mt-16 text-center"
                >
                    <div className="glass-card inline-block p-8 md:p-12">
                        <h3 className="text-xl md:text-2xl font-display font-bold dark:text-white text-light-900 mb-4">
                            Want to Join Our Team?
                        </h3>
                        <p className="dark:text-dark-300 text-light-600 mb-6 max-w-md">
                            We're always looking for talented individuals who share our passion for technology.
                        </p>
                        <a href="/careers" className="btn-primary">
                            View Open Positions
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
