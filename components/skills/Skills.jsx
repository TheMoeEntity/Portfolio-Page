import Image from "next/image"
import styles from './Skills.module.css'
import { useState } from "react"
import { Card } from "../cards/Card"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { useAnimation } from "framer-motion"
import { useRef } from "react"

export const Skills = () => {

    const skills = [
        {
          icon: "fa-brands fa-html5",
          name: "HTML5",
          color: "rgba(0, 0, 0, 0.6)",
          width: "90%"
        },
        {
          icon: "fa-brands fa-square-js",
          name: "JavaScript",
          color: "rgba(0, 0, 0, 0.6)",
          width: "95%"
        },
        {
          icon: "fa-brands fa-react",
          name: "React",
          color: "rgba(0, 0, 0, 0.6)",
          width:"80%"
        },
        {
          icon: "fa-brands fa-css3",
          name: "CSS3",
          color: "rgba(0, 0, 0, 0.6)",
          width: "90%"
        },
        {
          icon: "fa-brands fa-node-js",
          name: "Node js",
          color: "rgba(0, 0, 0, 0.6)",
          width:"70%"
        },
        {
          icon: "fa-brands fa-swift",
          name: "Swift",
          color: "rgba(0, 0, 0, 0.6)",
          width:"65%"
        },
        {
          icon: "fa-brands fa-bootstrap",
          name: "Bootstrap",
          color: "rgba(0, 0, 0, 0.6)",
          width:"80%"
        },
        {
          icon: "fa-brands fa-github",
          name: "git/github",
          color: "rgba(0, 0, 0, 0.6)",
          width:"70%"
        },
  ]

  const moreSkills = [
    {
      name: "Nextjs",
      width: "94%"
    },
    {
      name: "MongoDB",
      width: "75%"
    },

    {
      name: "Svelte",
      width: "80%"
    },
    {
      name: "SvelteKit",
      width: "60%"
    },
    {
      name: "Firebase",
      width: "65%"
    },
    {
      name: "Express",
      width: "60%"
    },
    {
      name: "Vercel",
      width:"90%"
    },
    {
      name: "Postman",
      width:"90%"
    },
    {
      name: "Netlify",
      width:"90%"
    },
    {
      name: "VS Code",
      width:"95%"
    }
  ]


  const {ref, inView} = useInView()
  const animation = useAnimation()
  const [AboutCounter,setAboutCounter] = useState(0)
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
            duration: 0.7,
            delay:0.4
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

  const container = useRef(null)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
        animateIn()
    })
  },[])

  const animateIn = ()=> {
    let widths = container.current.children
    let height = window.innerHeight
    for (const child of widths) {

        let width = child.children[1].children[0]
        let revealTop = width.getBoundingClientRect().top;
        let revealpoint = 120
      
        if (revealTop < height - revealpoint) {
          width.classList.add(styles.addWidth)
        } else {
          width.classList.remove(styles.addWidth)
        }
    }
  }

  return (
    <div>

      <div ref={ref}>
      <motion.div animate={animation}>
        <h5>MY SKILL SET</h5>
        <h3>WHAT ARE MY SKILLS?</h3> <br />
      </motion.div>
      </div>
        <p>
        Every soldier needs weapons in his arsenal right? At the moment I am well versed in the big three: JavaScript, HTML, CSS. The MERN (MongoDB, ExpressJs, React, NodeJs). NextJs, Svelte, SvelteKit, Firebase and Swift. 
        I am currently learning React Native because I love iOS ({`who doesn't ?`})
        </p> <br />
        <div className={styles.classesContainer}>
            
            {
            skills.map((skill,key)=> (
                <Card width={skill.width} progress={true} border={skill.color} classname={skill.icon} key={key} name={skill.name} />
            ))
            }
            <i aria-hidden="true"></i>
		      	<i aria-hidden="true"></i>
            <i aria-hidden="true"></i>
        </div>
        <div ref={container} className={styles.moreSkills}>

          {
            moreSkills.map((item,key)=> (
              <div key={key}>
              <h4>{item.name}</h4>
              <div className={styles.more}>
                <div style={{
                  width: item.width
                }} className={styles.width}></div>
              </div>
            </div>
              
            ))
          }


        </div>
    </div>
  )
}
