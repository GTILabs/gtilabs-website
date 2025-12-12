import type {Config} from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#fce4ec',
                    100: '#f8bbd9',
                    200: '#f48fb1',
                    300: '#f06292',
                    400: '#ec407a',
                    500: '#e91e63',
                    600: '#d81b60',
                    700: '#c2185b',
                    800: '#ad1457',
                    900: '#880e4f',
                    950: '#560027'
                },
                dark: {
                    50: '#f6f6f9',
                    100: '#ededf1',
                    200: '#d7d8e0',
                    300: '#b4b6c5',
                    400: '#8b8fa5',
                    500: '#6c708a',
                    600: '#575a72',
                    700: '#47495d',
                    800: '#3d3f4f',
                    900: '#1a1b23',
                    950: '#0d0e12'
                },
                light: {
                    50: '#ffffff',
                    100: '#fafafa',
                    200: '#f5f5f5',
                    300: '#e8e8e8',
                    400: '#d4d4d4',
                    500: '#a3a3a3',
                    600: '#737373',
                    700: '#525252',
                    800: '#404040',
                    900: '#262626',
                    950: '#171717'
                },
                accent: {
                    pink: '#e91e63',
                    purple: '#9c27b0',
                    teal: '#009688',
                    blue: '#3f51b5',
                    cyan: '#00bcd4'
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['monospace'],
                display: ['Space Grotesk', 'system-ui', 'sans-serif']
            },
            animation: {
                gradient: 'gradient 8s linear infinite',
                float: 'float 6s ease-in-out infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                glow: 'glow 2s ease-in-out infinite alternate'
            },
            keyframes: {
                gradient: {
                    '0%, 100%': {backgroundPosition: '0% 50%'},
                    '50%': {backgroundPosition: '100% 50%'}
                },
                float: {
                    '0%, 100%': {transform: 'translateY(0px)'},
                    '50%': {transform: 'translateY(-20px)'}
                },
                glow: {
                    '0%': {boxShadow: '0 0 20px rgba(233, 30, 99, 0.3)'},
                    '100%': {boxShadow: '0 0 40px rgba(233, 30, 99, 0.6)'}
                }
            },
            backgroundImage: {
                'grid-pattern':
                    'linear-gradient(rgba(233, 30, 99, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(233, 30, 99, 0.03) 1px, transparent 1px)',
                'radial-gradient':
                    'radial-gradient(ellipse at center, rgba(233, 30, 99, 0.15) 0%, transparent 70%)'
            },
            backgroundSize: {
                grid: '50px 50px'
            }
        }
    },
    plugins: []
};
export default config;
