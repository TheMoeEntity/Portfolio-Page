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
        // {
        //   icon: "fa-solid fa-database",
        //   name: "Responsive Web Design",
        //   color: "rgba(0, 0, 0, 0.6)"
        // }
    
    
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
Hey there! Welcome to my world of pixels and code! {`I'm`} Moses, a frontend web developer with a burning passion for all things iOS and Swift. 🚀 <br />

Picture this: a cup of steaming hot coffee, a keyboard covered in code snippets, and a wild imagination ready to transform ideas into digital reality. {`That's`} me in a nutshell!

With a magical blend of creativity and technical wizardry, {`I've`} mastered the art of crafting beautiful and intuitive user interfaces. My fingertips dance across the keys, weaving lines of HTML, CSS, and JavaScript into mesmerizing web experiences.

But my journey doesn't stop at the web. Oh no! {`I am`} like a superhero with a dual identity. When the sun sets and the moon rises, I transform into an iOS enthusiast, delving deep into the world of app development and wielding the mighty Swift language. <br /> <br />

When you work with me, expect an extraordinary adventure. {`I'm`} your partner in turning dreams into digital marvels. From brainstorming mind-boggling concepts to bringing them to life, {`I've`} got you covered.

My trusty companions on this quest are React, Next.js, and Svelte.js. Together, we form an unstoppable team, conquering the web with our exceptional powers. We create websites that not only look stunning but also provide a seamless and engaging experience for every visitor. <br /><br />

I believe that a great website or app is like a work of art that leaves a lasting impression. {`It's`} a masterpiece that combines functionality and aesthetics, leaving users in awe and craving for more.

So, grab your virtual sword and join me on this epic journey. {`Let's`} push the boundaries of {`what's`} possible and create digital wonders that will captivate hearts and minds.

Welcome to my portfolio. Welcome to the world of limitless possibilities. {`Let's`} make some magic together! ✨
</p>

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
