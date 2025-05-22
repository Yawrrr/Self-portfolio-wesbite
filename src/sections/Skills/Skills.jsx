import React from 'react'
import styles from './SkillsStyle.module.css'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext'
import SkillList from '../../common/SkillList'

function Skills() {

  const {theme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} h3='JavaScript'/>
        <SkillList src={checkMarkIcon} h3='TypeScript'/>
        <SkillList src={checkMarkIcon} h3='Dart'/>
        <SkillList src={checkMarkIcon} h3="Jaca"/>
        <SkillList src={checkMarkIcon} h3='C++'/>
        <SkillList src={checkMarkIcon} h3='PHP'/>
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} h3='React'/>
        <SkillList src={checkMarkIcon} h3='React Native'/>
        <SkillList src={checkMarkIcon} h3='Next.js'/>
        <SkillList src={checkMarkIcon} h3='Vite'/>
        <SkillList src={checkMarkIcon} h3='Expo'/>
        <SkillList src={checkMarkIcon} h3='Tailwind CSS'/>
        <SkillList src={checkMarkIcon} h3='Flutter'/>
        <SkillList src={checkMarkIcon} h3='Firebase'/>
        <SkillList src={checkMarkIcon} h3='Spring MVC'/>
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} h3='Git'/>
        <SkillList src={checkMarkIcon} h3='Android Studio'/>
        <SkillList src={checkMarkIcon} h3='Bootstrap'/>
        <SkillList src={checkMarkIcon} h3='XAMPP'/>
        <SkillList src={checkMarkIcon} h3='Jira'/>
      </div>
    </section>
  )
}

export default Skills