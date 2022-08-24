import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Section/Home';
import ParticlesBackground from './Components/ParticlesBackground';
import Features from './Components/Section/Features';

function App() {
    return (
        <div className="App">
            <ParticlesBackground/>
            <Navbar />
            <Home />
            <div className="test"></div>
        </div>

    );
}

export default App;
