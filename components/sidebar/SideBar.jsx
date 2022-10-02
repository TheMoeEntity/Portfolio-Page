import React from 'react'
import styles from '../../styles/Home.module.css'
// import profile from '../../public/Images/me.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export const SideBar = ({open}) => {
  return (

   <div style={
        {
            left:open ? "0%":"-100%",
            width: open ? "65%": "30%"
        }
    }
    className={styles.sidebar}>
    <div className={styles.sidebarcontent}>
         <motion.div
         initial="hidden" animate="visible"
         variants={{
            hidden: {
              scale:0.3,
              opacity:0
            },
            visible: {
              scale:1,
              opacity:1,
              transition: {
                delay: 1,
                duration:0.8
              }
            }
          }}
      >
        <div className={styles.profile}>
            {/* <Image objectFit='cover' layout='responsive' width="100%" priority height="100%" src={`/Images/me.png`} /> */}
            <img width="100%" height="100%" src={`/Images/me.png`} />
        </div>
        <div className={styles.caption}>
            <h3>Moses Nwigberi</h3>
            <h6>WEB/iOS DEVELOPER <span>IN LAGOS, NIGERIA</span></h6>
        </div>
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
        <div className={styles.navLinks}>
          <div className={styles.centered}>
            <ul>
              <Link href="/"><li>HOME</li></Link>
              <Link href="#about"><li>ABOUT</li></Link>
              <Link href="#services"><li>SERVICES</li></Link>
              <Link href="#skills"><li>SKILLS</li></Link>
              <Link href="#projects"><li>PROJECTS</li></Link>
              <Link href="#contact"><li>CONTACT</li></Link>
            </ul>
          </div>
          <div className={styles.copyright}>
           <span>© Copyright ©2022 All rights reserved |</span>
          </div>
        </div>
        </motion.div>

    </div>
  </div>
  )
}
