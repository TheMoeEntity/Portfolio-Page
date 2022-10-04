import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import { Footer } from '../components/Footer'
import { Hero } from '../components/hero/Hero'
import { About } from '../components/about_me/About'
import { Skills } from '../components/skills/Skills'
import { Experience } from '../components/experience/Experience'
import { Works } from '../components/works/Works'
import { SideBar } from '../components/sidebar/SideBar'
import { Partners } from '../components/partners/Partners'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {

  const [sideBarOpen,setSideBarOpen] = useState(false)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Moe&apos;s portfolio </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/zzfavicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Head>

      <div className={styles.main}>
          <SideBar close={()=> setSideBarOpen(false)} open={sideBarOpen} />
          
        <div style={{
          marginLeft: sideBarOpen ? "75%":"0"
        }} className={styles.maincontent}> 
        
        <motion.div
        initial={{x:'-100vw'}}
        animate ={{x:0}}
        transition = {{
          delay: 0.4,
          duration: 1.5,
          type:'spring',
          bounce:0.6
        }}
      >
        <Hero open={sideBarOpen} openSideBar={()=> setSideBarOpen(!sideBarOpen)} />
        </motion.div>
          <section className={styles.about}>
              <About />
          </section>
          <Partners />
          <div id='skill'>
          <section className={styles.about}>
            <Skills />
          </section>
          </div>
          
          <Experience />
          <Works />
          <Footer />
        </div>
      </div>
      <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossorigin="anonymous"></Script>
    </div>
  )
}
