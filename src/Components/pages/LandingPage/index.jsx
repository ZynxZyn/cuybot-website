import Navbar from './Navbar';
import Home from './Section/Home';
import ParticlesBackground from './ParticlesBackground';
import Features from './Section/Features';
import Footer from './Footer';

export const LandingPage = () => {
    return (
        <div className="LandingPage">
            <ParticlesBackground/>
            <Navbar />
            <Home />
            <Features />
            <div className="test"></div>
            <Footer />
        </div>
    )
}