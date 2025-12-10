'use client'

import {motion} from 'framer-motion'
import {Moon, Sun} from 'lucide-react'
import {useTheme} from './ThemeProvider'

export default function ThemeToggle() {
    const {theme, toggleTheme} = useTheme()

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-10 h-10 rounded-xl flex items-center justify-center dark:bg-dark-800 bg-light-200 dark:hover:bg-dark-700 hover:bg-light-300 transition-colors duration-300"
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'dark' ? 0 : 180,
                    scale: theme === 'dark' ? 1 : 0,
                }}
                transition={{duration: 0.3}}
                className="absolute"
            >
                <Moon className="w-5 h-5 dark:text-dark-300 text-light-600"/>
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    rotate: theme === 'light' ? 0 : -180,
                    scale: theme === 'light' ? 1 : 0,
                }}
                transition={{duration: 0.3}}
                className="absolute"
            >
                <Sun className="w-5 h-5 text-amber-500"/>
            </motion.div>
        </motion.button>
    )
}
