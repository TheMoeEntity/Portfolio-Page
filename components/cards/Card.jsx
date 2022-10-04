import styles from './cards.module.css'
import { useRef, useEffect } from 'react'

export const Card = ({name,classname,border,progress,width}) => {

  const container = useRef(null)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
        if (progress) {
          animateIn()
        } 
    })
  },[])

  const animateIn = ()=> {
   
    let height = window.innerHeight
    let width = container.current.children[2].children[0]
    let revealTop = width.getBoundingClientRect().top;
    let revealpoint = 120
  
    if (revealTop < height - revealpoint) {
      width.classList.add(styles.addWidth)
    } else {
      width.classList.remove(styles.addWidth)
    }

  }
 
    return (
    
    <div ref={container} style={{borderLeft:`3px solid ${border}`}} className={styles.card}>
        <span><i className={classname}></i></span>
        <span>{name}</span>
        {
          progress && 
          <div className={styles.progress}>
            <div style={{width:width}} className={styles.bar}></div>
          </div>
        }
    </div>
  )
}
