import Social from "./Social";
import "./Home.scss";
import ScrollDown from "./ScrollDown";
import Presentation from "./Presentation";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className='home-container container grid'>
        <div className='home-content grid'>
          <Social />
          <div className='home-img'></div>
          <Presentation />
        </div>
        <ScrollDown />
      </div>
    </section>
  ); 
};

export default Home;
