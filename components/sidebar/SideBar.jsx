import React from 'react'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import profile from '../../public/Images/me2.PNG'
import me from '../../public/Images/moe.JPG'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState,useEffect} from 'react'

export const SideBar = ({open,close}) => {

  const links = [
    {
      title: "HOME",
      href: "/"
    },
    {
      title: "ABOUT",
      href: "#about"
    },
    {
      title: "SERVICES",
      href: "#services"
    },
    {
      title: "SKILLS",
      href: "#skill"
    },
    {
      title: "PROJECTS",
      href: "#projects"
    },
    {
      title: "CONTACT",
      href: "#contact"
    }
  ]
 
  return (

   <div style={
        {
            left:open ? "0%":"-100%",
            width: open ? "75%": "30%",
            justifyContent:open ? "flex-start":"flex-end"
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
            <Image width="100%" priority layout='responsive' height="100%" src={me} />
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
              {
                links.map((item,key)=> (
                  <Link key={key} href={item.href}><li onClick={close}>{item.title}</li></Link>
                ))
              }

            </ul>
          </div>
          <div className={styles.copyright}>
           <span> <h5>© Copyright ©2022 All rights reserved |</h5></span>
          </div>
        </div>
        </motion.div>

    </div>
  </div>
  )
}
