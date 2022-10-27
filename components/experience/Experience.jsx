import Image from "next/image"
import styles from '../../styles/Home.module.css'
import { Card } from "../cards/Card"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"

export const Experience = () => {

  const [ref, inView] = useInView()
  const [ref2,inView2] = useInView()
  const animation = useAnimation()
  const animation2 = useAnimation()

  const showAnimation = (start,end,one,two) => {

    const inAnim = 
      {
        scale:1,
        opacity:1,
        x:0,
        transition: {
          duration: 1.2,
          delay:0.6,
          type:'spring',
          bounce:0.4
        }
      }

    const outAnim = {
      scale:0.1,
      opacity:0,
      x:"-70vw",
      transition: {
        duration: 1.2,
        delay:0.6,
        type:'spring',
        bounce:0.4
      }
    }
   
    if(start) {

      if (one) {
        animation.start(inAnim)
      }

      if (two) {
        animation2.start(inAnim)
      }

    }

    if (end) {
      
      if (one) {

        animation.start(outAnim)
      }

      if (two) {
        animation2.start(outAnim)
      }

    }

  }

  useEffect(()=> {

    if (inView) {
      showAnimation(true,false,true,false)
    } 
    
    if (!inView) {
      showAnimation(false,true,true,false)
    }
  },[inView])

  useEffect(()=> {

    if (inView2) {
      showAnimation(true,false,false,true)
    } 
    
    if (!inView2) {
      showAnimation(false,true,false,true)
    }
  },[inView2])



  return (
    <section className={`${styles.about} ${styles.experience}`}>
        <h5>MY WORK EXPERIENCE</h5>
        <h3 ref={ref}>WHAT IS MY WORK EXPERIENCE?</h3> <br />
        

        <motion.div animate={animation}>
        <div className={styles.bubble}>
          <h4>Developer/intern at ZZDIGITAL (2020-2021) </h4>
          <ul>
          <li>Satisfactorily created multiple functional static websites for clients</li>
          <li>Worked on and updated web user interfaces according to demands</li>
          <li>{`Collaborated with the design team and senior iOS developer developing the front end of Yachtingly, a Yacht ordering mobile app. `}
          </li>
          <li>Learned Swift on the job</li>
          <li>Worked with a team and revamped <a href="https://dovehospital.com">dovehospital.com</a>, a reputable Hospital in Lekki</li>
          <li>  
            <a
              href="./images/Moses.png"
              target="_blank"
            >
              View Resume
            </a></li>
          
          </ul>
          <div className={styles.arrow}>
              <i className='fa-solid fa-caret-left'></i>
          </div>
        </div>
        </motion.div>

        <span ref={ref2}>
        <motion.div animate={animation2}>
        <div className={styles.bubble}>
        <h4>Freelancing (now)</h4>
        <ul>
        <li>Currently open to Job opportunities where I can contribute, learn and grow.</li>
        <li>Creating personal web projects with NextJs</li>
        </ul>
        <div className={styles.arrow}>
            <i className='fa-solid fa-caret-left'></i>
        </div>
        </div>        
        </motion.div>
        </span>
    </section>
  )
}
