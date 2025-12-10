import type {Metadata} from 'next'
import {Inter, Space_Grotesk} from 'next/font/google'
import {ThemeProvider} from '@/components/ThemeProvider'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-geist-sans',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'GTI Labs - Transforming Ideas into Digital Excellence',
    description: 'GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation.',
    keywords: ['software development', 'IT company', 'Indonesia', 'cloud solutions', 'digital transformation', 'enterprise software'],
    authors: [{name: 'GTI Labs'}],
    icons: {
        icon: '/favicon.png',
        apple: '/images/logo.png',
    },
    openGraph: {
        title: 'GTI Labs - Transforming Ideas into Digital Excellence',
        description: 'GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation.',
        url: 'https://gtilabs.id',
        siteName: 'GTI Labs',
        images: [
            {
                url: '/images/logo.png',
                width: 512,
                height: 512,
                alt: 'GTI Labs Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'GTI Labs - Transforming Ideas into Digital Excellence',
        description: 'GTI Labs is a cutting-edge IT company specializing in enterprise software development, cloud solutions, and digital transformation.',
        images: ['/images/logo.png'],
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
        <head>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light' || (!theme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
                }}
            />
        </head>
        <body className="min-h-screen font-sans">
        <ThemeProvider>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
