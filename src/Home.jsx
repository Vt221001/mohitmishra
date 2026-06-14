import Hero from './components/Hero'
import Services from './components/Services'
import Clients from './components/Clients'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
    return (
        <div className="min-h-screen">
            <main className="pt-20">
                <Hero />
                <Services />
                <Clients />
                <About />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}