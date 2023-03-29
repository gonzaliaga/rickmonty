import React, { useEffect } from 'react';
import Typed from 'react-typed';
import './Main.scss';
import aos from 'aos';
import 'aos/dist/aos.css';

const Main = () => {
  useEffect(() => {
    aos.init();
  }, []);

  return (
    <main className="main">
      <div className="main__container container">
        <h3 className="main__container__title" data-aos="fade-down">
          Conocer más de
          <br />
          <Typed 
            strings={[
              'Personajes',
              'Episodios']}
                typeSpeed={100}
                backSpeed={100}
                loop >
            </Typed></h3>
        <a href='#characters' className="main__container__button" data-aos="fade-up">Comencemos</a>
      </div>
    </main>
  );
}

export default Main;