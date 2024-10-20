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
        <SkillList src={checkMarkIcon} h3="HTML"/>
        <SkillList src={checkMarkIcon} h3='CSS'/>
        <SkillList src={checkMarkIcon} h3='JavaScript'/>
        <SkillList src={checkMarkIcon} h3='TypeScript'/>
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} h3='React'/>
        <SkillList src={checkMarkIcon} h3='Angular'/>
        <SkillList src={checkMarkIcon} h3='Vue'/>
        <SkillList src={checkMarkIcon} h3='Tailwind CSS'/>
      </div>
      <hr/>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} h3='Redux'/>
        <SkillList src={checkMarkIcon} h3='Webpack'/>
        <SkillList src={checkMarkIcon} h3='Git'/>
        <SkillList src={checkMarkIcon} h3='Jest'/>
        <SkillList src={checkMarkIcon} h3='Bootstrap'/>
      </div>
    </section>
  )
}

export default Skills