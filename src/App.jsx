import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <>
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
