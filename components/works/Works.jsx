import styles from '../../styles/Home.module.css'
import { Workcard } from './Workcard'
import foodfun from '../../public/Images/foodfun.png'
import calculator from '../../public/Images/calculator.png'
import fitness from '../../public/Images/fitness.png'
import whack from '../../public/Images/whack.png'

export const Works = () => {
  return (
    <section id='projects' className={styles.about}>
    <h5>PROJECTS</h5>
    <h3>SOME OF MY RECENT WORKS?</h3> <br />
    <p>
      Below are some of the projects I have worked on and or collaborated.
    </p> <br />
    <div className={styles.worksContainer}>
        <Workcard img={foodfun} />
        <Workcard img={calculator} />
        <Workcard img={fitness} />
        <Workcard img={whack} />
    </div>
</section>
  )
}
