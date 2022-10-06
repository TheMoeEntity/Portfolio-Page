import Image from "next/image"
import styles from './Hero.module.css'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useScreenWidth } from "../../pages/api/hello"
// import resume from '../../public/Docs/resume.pdf'


const assets = [
  './Images/devspace.jpeg',
  './Images/smile.jpg',
  './Images/me2.PNG'
]

export const Hero = ({openSideBar,open}) => {

  const screenSize = useScreenWidth()
  const SideBar = ()=> {
    openSideBar()
  }
  const [counter,setCounter] = useState(0)
  
  useEffect(()=> {
   
      // const interval = setInterval(() => {
      //   setCounter(val => {
      //     return val >= 2 ? 0 : val+1
      //   })
      // }, 7000);
      // return () => clearInterval(interval);

  },[])

  useEffect(()=> {
    
  },[counter])

  return (
    <div style={{
      background: `url('${assets[counter]}')`,
    }} className={styles.hero}>
        {/* <img width={"100%"} height={"100%"} src="/Images/devspace.jpeg" alt="dev space" /> */}
        <div className={styles.overlay}></div>
        <div onClick={SideBar} className={open ? `${styles.hamburger} ${styles.animate}`: styles.hamburger}>
          <div className={open ? `${styles.animate} ${styles.bar}`:styles.bar}></div>
          <div className={open ? `${styles.animate} ${styles.bar}`:styles.bar}></div>
          <div className={open ? `${styles.animate} ${styles.bar}`:styles.bar}></div>
        </div>
        <div style={{
          opacity: open ? "0":"1"
        }} className={styles.desc}>
            <motion.div
              initial={{y:'-100vh', opacity:0}}
              animate ={{y:0, opacity:1}}
              transition = {{
                delay: 1.8,
                duration: 1,
                bounce:0.5,
                type: 'spring'
              }}
            >
            <h1>Bonjour!</h1>
            </motion.div>

            <motion.div
              initial={{x:'-300', opacity:0}}
              animate ={{x:0, opacity:1}}
              transition = {{
                delay: 2.5,
                duration: 0.9
              }}
             >
            <h1>I am called <span>Moe,</span></h1>
            </motion.div>


            <motion.div
              initial={{y:'100vh', opacity:0}}
              animate ={{y:0, opacity:1}}
              transition = {{
                delay:4,
                duration: 1,
                type:'spring',
                bounce:0.6
              }}
            >
            <h1>{counter === 0 ? "I'm a Front End Web Developer.":
            counter ===1 ? "":"I'm a mobile developer"}</h1> <br />

            <h3>{counter === 0 ? `I create websites! ain't that cool?`:
                  counter === 1 ? "I make web apps" :
                        'I make iOS apps'}</h3>
            <button><a href="./Docs/resume.pdf">View Resume</a></button>
            </motion.div>
            

        </div>
    </div>
  )
}
