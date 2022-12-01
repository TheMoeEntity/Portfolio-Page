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
import restoran from '../../public/Images/restoran.png'
import stores from '../../public/Images/Apple-store.png'


const workDetails = [
  {
    img:foodfun,
    stack: "NextJs | MongoDB | PayPal Support | React/Redux | Framer",
    details: "An E-Commerce SPA for a food ordering company",
    page: "zzcatering.vercel.app"
  },
  {
    img:restoran,
    stack: "NextJs | Framer Motion",
    details: "A landing page for a Restaurant",
    page: "zzfoods.vercel.app"
  },
  {
    img:match,
    stack: "ReactJs | Firebase | DogsAPI",
    details: "An engaging online memory game",
    page: "card-match-moe.vercel.app"
  },
  {
    img:calculator,
    stack: "HTML | CSS | JavaScript | Bootstrap | PWA Support",
    details: "An installable calculator web application with PWA support",
    page:"zzcalculatorapp.netlify.app"
  },
  // {
  //   img:room,
  //   stack: "HTML | CSS | JavaScript",
  //   details: "A cool landing page for a furniture company. Challenge by FrontEnd Mentor",
  //   page: "roomhome-moe.netlify.app"
  // },
  {
    img:todo2,
    stack: "SvelteJs",
    details: "A todo list web application. Challenge by FrontEnd Mentor",
    page:"todoapp-pro.vercel.app"
  },
  {
    img:stores,
    stack: "NextJs | Cookies | JSON server | PWA support | Next-auth",
    details: "An E-commerce store with group buying and referral links options. Still in development",
    page: "moestores.vercel.app/"
  },

]
export const Works = () => {
  return (
    <section id='projects' className={styles.about}>
    <h5>PROJECTS</h5>
    <h3>SOME OF MY RECENT WORKS?</h3> <br />
    <p>
      Below are some of the projects I have worked on.
    </p> <br />
    <div className={styles.worksContainer}>
      {
        workDetails.map((item,key)=> (
          <Workcard page={item.page} key={key} img={item.img} stacks={item.stack} details={item.details} />
        ))
      }
    </div>
</section>
  )
}
