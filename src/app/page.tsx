import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import TechStack from '@/components/TechStack'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
    return (
        <main className="relative overflow-hidden">
            {/* Background elements */}
            <div className="fixed inset-0 grid-background pointer-events-none"/>
            <div
                className="fixed inset-0 bg-gradient-to-b dark:from-primary-950/20 from-primary-100/30 via-transparent to-transparent pointer-events-none"/>

            {/* Content */}
            <Navbar/>
            <Hero/>
            <About/>
            <Services/>
            <Portfolio/>
            <TechStack/>
            <Team/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </main>
    )
}
