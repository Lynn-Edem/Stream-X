import React from 'react';
import './hero.css';
import NAVLINK from '../../utils/nav';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    
    <section>
      <div className='container__hero'>
        <div className='inner__hero'>
          <div className="hero__wrapper">
            <div className="text__hero">
              <h1>RUNWAY NIGHTCLUB</h1>
            </div>
            <div className="nav__container">
              <nav className='hero__nav'>
                <ul>
                  {NAVLINK.map(item => (
                    <li key={item.id}>
                      <Link href={item.to}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
