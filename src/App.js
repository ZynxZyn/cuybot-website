import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Section/Home';
import ParticlesBackground from './Components/ParticlesBackground';
import Features from './Components/Section/Features';
import Footer from './Components/Footer';

function App() {
    return (
        <div className="App">
            <ParticlesBackground/>
            <Navbar />
            <Home />
            <Features />
            <div className="test"></div>
            <Footer />
        </div>

    );
}

export default App;
