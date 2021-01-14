import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';

import { faReact, faBootstrap, faJsSquare, faHtml5, faCss3Alt, faSass } from '@fortawesome/free-brands-svg-icons'

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Hi! I'm <strong>James Dodds</strong>
              <br />
              Full-Stack Web Developer
            </h2>
            <p>Come check out my projects below.</p>
            <p className="red">** Site is under construction **</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Projects
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          {/* <p>
            Life will feel it is always a great need for eu valley, the valley
            CNN ridiculous smile at any time chat mainstream clinical homes.
            Mauris floor was very warm and we need it. One customer now nibh
            Bureau dark pools behavior.
          </p> */}

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <div className="item__side item__side--front">
                  <img src={pic2} alt="HubbleBook Welcome Screen" className="image fit"/>
                  <header>
                    <h3>HubbleBook</h3>
                  </header>
                </div>
                <div className="item__side item__side--back">
                  <h3>Technologies</h3>
                  <h4><u>Frontend</u></h4>
                  <p>Javascript (ES6) <FontAwesomeIcon icon={faJsSquare} color="yellow"/> | React <FontAwesomeIcon icon={faReact} color="blue"/> | Redux | Bootstrap <FontAwesomeIcon icon={faBootstrap} color="purple"/></p>
                  <h4><u>Backend</u></h4>
                  <p>Ruby | Rails</p>
                  <a className="button" href="#">Visit Site</a>
                </div>
              </article>
              <article className="item">
                <div className="item__side item__side--front">
                  <img src={pic3} alt="" className="image fit"/>
                  <header>
                    <h3>Texas-PWS-Operator-Practice-Exams</h3>
                  </header>
                </div>
                <div className="item__side item__side--back">

                </div>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <div className="item__side item__side--front">
                  <img src={pic4} alt="" className="image fit"/>
                  <header>
                    <h3>Dog-Training-App</h3>
                  </header>
                </div>
                <div className="item__side item__side--back">

                </div>
              </article>
              <article className="item">
                <div className="item__side item__side--front">
                  <img src={pic5} alt="" className="image fit"/>
                  <header>
                    <h3>Natours</h3>
                  </header>
                </div>
                <div className="item__side item__side--back">
                  <h3>Technologies</h3>
                  <h4><u>Frontend</u></h4>
                  <p>HTML <FontAwesomeIcon icon={faHtml5} color="orange"/> | CSS <FontAwesomeIcon icon={faCss3Alt} color="blue"/> | Sass <FontAwesomeIcon icon={faSass} color="pink"/></p>
                </div>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <div className="item__side item__side--front">
                  <img src={pic6} alt="" className="image fit"/>
                  <header>
                    <h3>Dolor Penatibus</h3>
                  </header>
                </div>
                <div className="item__side item__side--back">

                </div>
              </article>
              <article className="item">
                <div className="item__side item__side--front">
                  <img src={pic7} alt="" className="image fit"/>
                  <header>
                    <h3>Orci Convallis</h3>
                  </header>
                </div>
                <div className="item__side item__side--back">

                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            Developers football competition in diameter big price to layer the
            pot. Chavez ultricies care who wants to CNN. Lobortis elementum
            aliquet eget a den of which they do not hold it in hatred developers
            nor the mountains of the deposit slip. The element of time, sem ante
            ullamcorper dolor nulla quam placerat viverra environment is not
            with our customers. Free makeup and skirt until the mouse or
            partners or to decorate each targeted.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="mailto:Dodds.James90@gmail.com">
            <div className="row">
              <div className="col-12">
                <input type="submit" value="Email Me" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
