import React from 'react'
import styles from './HeroStyles.module.css'
import HeroImg from '../../assets/ProfilePic.png'
import sunIcon from '../../assets/sun.svg'
import moonIcon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const colorModeIcon = theme === 'dark' ? moonIcon : sunIcon;
  const twitterIcon = theme === 'dark' ? twitterDark : twitterLight;
  const githubIcon = theme === 'dark' ? githubDark : githubLight;
  const linkedinIcon = theme === 'dark' ? linkedinDark : linkedinLight;

  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero} 
          src={HeroImg}
          alt='Profile picture of Yap Jun Cheng'
        />
        <img 
          className={styles.colorMode} 
          src={colorModeIcon}
          alt='Color mode icon'
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yap Jun Cheng
        </h1>
        <h2>
          Frontend Developer
        </h2>
        <span className='hover'>
          <a href="https://twitter.com/" target='_blank'>
            <img src={twitterIcon} />
          </a>
          <a href='https://github.com' target='_blank'>
            <img src={githubIcon} />
          </a>
          <a href='https://linkedin.com' target='_blank'>
            <img src={linkedinIcon} />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing web applications, I am constantly learning and improving my skills to create better user experiences.
        </p>
        <a href={CV} download>
          <button>
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero