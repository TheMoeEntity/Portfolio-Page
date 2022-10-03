import Image from "next/image"
import styles from './Hero.module.css'
import { motion } from "framer-motion"

export const Hero = ({openSideBar,open}) => {

  const SideBar = ()=> {
    openSideBar()
  }
  return (
    <div className={styles.hero}>
        {/* <img width={"100%"} height={"100%"} src="/Images/devspace.jpeg" alt="dev space" /> */}
        <div className={styles.overlay}></div>
        <div onClick={SideBar} className={styles.hamburger}>
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
            <h1>{`I'm`} a Front End Web Developer.</h1> <br />

            <h3>{`I create websites! ain't that cool?`}</h3>
            <button>View portfolio</button>
            </motion.div>
            

        </div>
    </div>
  )
}
