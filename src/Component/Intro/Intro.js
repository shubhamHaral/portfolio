import React from 'react';
import './Intro.css';
import bg from '../../assets/shubham.png';
import {Link} from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <div>

            <section id='intro'>
                <img src={bg} alt="" className='bg' />
                <div className='introContent'>
                    <span className='Hello'> Hello ,</span>
                    <span className='IntroText'>I'm <span className='introName'>Shubham</span> <br /> Web Devloper</span>
                    <p className='introPara'>I am a skilled with web devloper with experience with creating <br /> visually appeling and user friendly Website.</p>
                    <Link><button className='btn'><img src={btnImg}  alt="Resume" className='btnImg' />Resume</button></Link>
                </div>

            </section>
        </div>
    )
}

export default Intro;
