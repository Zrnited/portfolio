import './App.css';
import LinksComponent from './components/LinksComponent';
import seyi from './Assets/seyi.png'
import About from './Pages/About';
import Skills from './Pages/Skills';
import Skills2 from './Pages/Skills2';
import MyServices from './Pages/MyServices';
import Reviews from './Pages/Reviews';
import HamburgerComponent from './components/HamburgerComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';






function App() { 
  const [fix, setFix ] = useState(false)

  function setFixed(){
    if (window.scrollY >= 100){
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener('scroll', setFixed);
  return (
    <div className="App" id='home'>
    
      <header>
        <nav className={fix ? 'navbar fixed' : 'navbar'}>
          <div class="navpages">
          <h2 id='#home'>Seyi Onifade.</h2>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
          </ul>
          </div>
          
          <LinksComponent/>
          <Router>
          <HamburgerComponent/>
          <Routes>
            <Route path='#about' element={'#about'}></Route>
            <Route path='#services' element={'#services'}></Route>
            <Route path='#contact' id={'#contact'}></Route>
          </Routes>
          </Router>
          
        </nav>
      </header>

      <section>
        <div class="intro-text">
          <p>HI THERE!</p>
          <h4>I AM SEYI ONIFADE</h4>
          <h3>A Top-notch Developer, Writer and Mentor</h3>

          <LinksComponent/>
        </div>
        <div class="image">
          <img class="seyi-image" src={seyi} alt="seyi"/>
        </div>

        <div class="intro-text-smaller-screen">
          <p>Hi There!</p>
          <h4>I AM SEYI ONIFADE</h4>
          <h3>A Top-notch Developer, Writer and Mentor</h3>
          <LinksComponent/>
        </div>
      </section>

      <About />

        <div className='my-skills'>
          <div>
            <h2>My Skills</h2>
            <p>Here are a few skills I possess</p>
            <hr></hr>
          </div>
          <div className='skills-container'>
            <div className='left'>
              <Skills/>
            </div>
            <div className='right'>
                <Skills2/>
            </div>
          </div>
        </div>

        <div class='my-services'>
          <div className='myServices'>
            <h2>Services I render</h2>
          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam corrupti optio modi. Ab at, nesciunt placeat labore esse dolor.</p>

            <hr></hr>
          </div>

          <MyServices />
        </div>

        <div className='testimonies'>
          <div className='testimony-heading'>
            Testimonies & Recommendations
          </div>
          
          <Reviews/>
        </div>

        <div class="contact" id="contact">
            <div className='get-in-touch'>
              <h2>Get in Touch.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quam corrupti optio modi. Ab at, nesciunt placeat labore esse dolor.</p>
              <div className='links'>
                <LinksComponent/>
                <p>-Xyluz</p>
              </div>
              <div class="personal-info">
                  <p><strong>Email: </strong>seyionifade@gmail.com</p>
                  <span>Send a message anytime.</span>
                  <p><strong>Tel: </strong>+234-1245-13966</p>
                  <span>Send a message anytime</span>
                  <span className='copyright'>Copyright &copy; All Right Reserved.</span>
              </div>
            </div>
            <div className='form'>
              <p>Need a Service?</p>
              <h2>Send a Message</h2>
              <form>
                <input type={'text'} placeholder='Enter FullName'/>
                <input type={'text'} placeholder='Enter Email Address'/>
                <input type={'text'} placeholder='Write a Message'/>
                <button>Send Message</button>
              </form>
            </div>
        </div>
    </div>
  );
}

export default App;
