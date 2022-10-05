import styles from '../../styles/Home.module.css'
import { Workcard } from './Workcard'
import foodfun from '../../public/Images/foodfun.png'
import calculator from '../../public/Images/calculator.png'
import fitness from '../../public/Images/fitness.png'
import whack from '../../public/Images/whack.png'
import room from '../../public/Images/room.png'
import todo from '../../public/Images/todo.png'
import todo2 from '../../public/Images/todo2.png'
import match from '../../public/Images/cardmatch.png'
import match2 from '../../public/Images/cardmatch2.png'
import quotes from '../../public/Images/quotes.png'


const workDetails = [
  {
    img:foodfun,
    stack: "NextJs | MongoDB | PayPal Support | React/Redux",
    details: "An E-Commerce SPA for a food ordering company"
  },
  {
    img:fitness,
    stack: "HTML | CSS | JavaScript",
    details: "A landing page for a fitness organization"
  },
  {
    img:match,
    stack: "ReactJs | Firebase |DogsAPI",
    details: "An engaging online memory game"
  },
  {
    img:quotes,
    stack: "HTML | CSS | JavaScript | QuotesGarden API",
    details: "A random Quotes generating web app"
  },
  {
    img:calculator,
    stack: "SvelteJs | Progress Web App",
    details: "A scientific calculator with PWA support"
  },
  {
    img:todo2,
    stack: "SvelteJs",
    details: "A todo list web application. Challenge by FrontEnd Mentor"
  },

]
export const Works = () => {
  return (
    <section id='projects' className={styles.about}>
    <h5>PROJECTS</h5>
    <h3>SOME OF MY RECENT WORKS?</h3> <br />
    <p>
      Below are some of the projects I have worked on and or collaborated.
    </p> <br />
    <div className={styles.worksContainer}>
      {
        workDetails.map((item,key)=> (
          <Workcard key={key} img={item.img} stacks={item.stack} details={item.details} />
        ))
      }
    </div>
</section>
  )
}
