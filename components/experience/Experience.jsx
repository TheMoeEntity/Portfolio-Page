import Image from "next/image"
import styles from '../../styles/Home.module.css'
import { useState } from "react"
import { Card } from "../cards/Card"

export const Experience = () => {
  return (
    <div className={`${styles.about} ${styles.experience}`}>
        <h5>MY WORK EXPERIENCE</h5>
        <h3>WHAT IS MY WORK EXPERIENCE?</h3> <br />
        
        <div>
        <h4>Junior developer/intern at ZZDIGITAL (2020-2021) </h4>
        <ul>
        <li>Satisfactorily created functional static websites for clients</li>
        <li>Worked on and updated web user interfaces according to demands</li>
        <li>{`Collaborated with the iOS and Design teams turning client's designs to functional User Interfaces and developing the front end 
            of a mobile software project with Swift.`}
        </li>
        <li>Learned Swift on the job</li>
        <li>{`Developed the front end of a reputable Health oragnization's website`}</li>
        <li> Worked on the front end of web applications</li>
        
        </ul>
        <div className={styles.arrow}>
            <i className='fa-solid fa-caret-left'></i>
            
        </div>
        </div>

        <div>
        <h4>Freelance (now)</h4>
        <ul>
        <li>Currently open to job opportunities and freelancing</li>
        </ul>
        <div className={styles.arrow}>
            <i className='fa-solid fa-caret-left'></i>
            
        </div>
        </div>        
    </div>
  )
}
