import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Testimonials from './Components/Testimonials';
import CTA from './Components/CTA'
import Footer from './Components/Footer'
import './styles/App.scss';

const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Testimonials/>
            <CTA/>
            <Footer/>
        </div>
    )
}

export default App;