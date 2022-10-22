import { Card } from "../cards/Card"
import styles from './About.module.css'
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"


export const About = () => {


    const [AboutCounter,setAboutCounter] = useState(0)
    const [classes,setClasses] = useState([
        {
          icon: "fa-solid fa-code",
          name: "Web Development",
          color: "purple"
        },
        {
          icon: "fa-brands fa-apple",
          name: "iOS Applications",
          color: "#2c98f0"
        },
        {
          icon: "fa-solid fa-mobile",
          name: "Web Applications",
          color: "red"
        },
        {
          icon: "fa-solid fa-database",
          name: "SE Optimization",
          color: "rgba(0, 0, 0, 0.6)"
        }
    
    
      ])

      const [ref, inView] = useInView()
      const animation = useAnimation()
      const [offerRef, offerInView] = useInView()
      const offerAnimation = useAnimation()

      const animationEnd = () => {
        
        setAboutCounter(counter => counter + 1)
        animation.start({
          x:"-90vw"
      }) 
      }
    
      useEffect(()=> {

        if (inView) {
          animation.start({
              x:0,
              opacity:1,
              transition: {
                duration: 1,
              }
          })

        } 
        
        if (!inView) {
          if (AboutCounter >= 1) {
              return
          }
          animationEnd()
        }
      },[inView])

      useEffect(()=> {

        if (offerInView) {
         
          offerAnimation.start({
              scale:1,
              opacity:1,
              transition: {
                duration: 0.8,
                delay:0.8,
                type:'spring',
                bounce:0.5
              }
          })

        } 
        
        if (!offerInView) {
          
          offerAnimation.start({
            scale:0.1,
            opacity:0
          }) 
        }
      },[offerInView])


  return (
    <div ref={ref}>

    <motion.div animate={animation}>
        <div id="about">
        <h5>ABOUT US</h5>
        <h3>WHO AM I?</h3> <br />
        </div>
    </motion.div>
      
        <p>
          Hi, bet you already know this, but <b>my name is Moses Chukwudi Nwigberi</b> and I enjoy creating things that live on the internet. I am a front end web developer with
            good interest in iOS. Leveraging the latest web technologies, I design and code beautifully simple things and I love what I do.
            <br/><br/>
            I am a Chemical Engineering student in the prestigious University of Lagos, Nigeria. {`My hobbies include: writing code, creating web apps and mobile development(probably mentioned this 200 times)`}. I am outdoorsy, when I am not sitting in front of my Mac, squashing bugs and wondering why code I wrote yesterday {`isn't working now,`} I am most probably outdoors with friends and family or scrolling through my Twitter timeline, Quora and Medium.
        </p> <br />

        <div ref={offerRef}>
        <motion.div
        animate={offerAnimation}
        >
        <div id="services" className={styles.classesContainer}>
          {
            
            classes.map((skill,key)=> (
              <Card progress={false} border={skill.color} classname={skill.icon} key={key} name={skill.name} />
              ))
            }
        </div>
        </motion.div>
        </div>
        <span></span>

    </div>
  )
}
