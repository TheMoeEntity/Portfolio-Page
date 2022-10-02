import { Card } from "../cards/Card"
import styles from './About.module.css'
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import mainstyles from '../../styles/Home.module.css'

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
          name: "SEO Optimization",
          color: "rgba(0, 0, 0, 0.6)"
        }
    
    
      ])

      const {ref, inView} = useInView()
      const animation = useAnimation()
      const {offerRef, offerInView} = useInView()
      const offerAnimation = useAnimation()

      const animationEnd = () => {
        
        setAboutCounter(counter => counter + 1)
        animation.start({
          x:"-40vw"
      }) 
      }

      const offerEnd = ()=> {

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
              x:0,
              opacity:1,
              transition: {
                duration: 1,
              }
          })

        } 
        
        if (!offerInView) {

          offerAnimation.start({
            x:"-100vw"
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
          Hi, bet you already know this, but <b>my name is Moses Chukwudi Nwigberi</b>. I identify as an entry level, junior front end web developer
            with good interest in iOS. Leveraging the latest web technologies, I create single page web applications, properly responsive, functional and SEO optimized websites. Hey, I am for the most part a front end developer but, I can integrate with a backend if needed, creating a full stack website on request😉. I create front IOS applications with Swift too.
            <br /> <br />
            At the moment, I am a 300L student of Chemical Engineering in the University of Lagos, Akoka. My hobbies include coding(duh), web development(obviously), mobile development(lol😂) and FIFA. I am also pretty decent in french language( ola amigo!)
        </p> <br />
      
        <div id="services" className={styles.classesContainer}>
          {
            
            classes.map((skill,key)=> (
              <Card progress={false} border={skill.color} classname={skill.icon} key={key} name={skill.name} />
            ))
          }
        </div>
      

    </div>
  )
}
