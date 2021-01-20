import React, { useContext } from 'react';
import { Fade } from 'react-reveal';
import emoji from 'react-easy-emoji';
import './Greeting.css';
import landingPerson from '../../assets/lottie/landingPerson';
import DisplayLottie from '../../components/displayLottie/DisplayLottie';
import SocialMedia from '../../components/socialMedia/SocialMedia';
import Button from '../../components/button/Button';
import Avatar from 'react-avatar';

import { illustration, greeting } from '../../portfolio';
import StyleContext from '../../contexts/StyleContext';

export default function Greeting() {
const width = window.innerWidth
const height = window.innerHeight
//Guideline sizes are based on standard "iPhoneSE" mobile device
const guidelineBaseWidth = 320;
const guidelineBaseHeight = 568;
const screenWidth = width;
const screenHeight = height;
const scale = size => width / guidelineBaseWidth * size;
const verticalScale = size => height / guidelineBaseHeight * size;
const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;


  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? 'dark-mode greeting-text' : 'greeting-text'}
              >
                {' '}
                {greeting.title}{' '}
                <span className="wave-emoji">{emoji('👋')}</span>
              </h1>
              <p
                className={
                  isDark
                    ? 'dark-mode greeting-text-p'
                    : 'greeting-text-p subTitle'
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div" style={{alignItems: 'center', justifyContent: 'center'}}>
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
             */}
              <img
                alt="Greeting Image"
                src={require('../../assets/images/profileImage.jpg')}
                
              ></img>
            {/* // )
            // } */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
