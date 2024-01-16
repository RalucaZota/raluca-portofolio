import Social from "./Social";
import "./Home.scss";
import ScrollDown from "./ScrollDown";
import Presentation from "./Presentation";

const Home = () => {
  return (
    <section>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />
          <div className='home__img'></div>
          <Presentation />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
