import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Experience from './Components/Qualifications/Experience';
import Skills from './Components/Skills/Skills';
import { Testimonials } from './Components/Testimonials/Testimonials';
import { Footer } from "./Components/Footer/Footer";
import { ScrollUp } from "./Components/ScrollUp/ScrollUp";
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <>
      <main className='main'>
        <Header/>
        <Home />
        <About />
        <Skills />
        <Experience/>
        <Testimonials/>
        <Contact/>
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
