import "./index.scss"
import education from "../../assets/images/quick_mafs.png" 
import code from "../../assets/images/code.svg" 
import project from "../../assets/images/css box model.jpg" 
import {motion} from "framer-motion"

const About = ()=>{
  return(
    <motion.div 
    className="page" 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1, transition: {duration:0.1}}}
    >
      <div className="about">

        <header>
          <h1> <span>About</span> Me</h1>
          <p>
            I am a self-taught React developer who loves experimenting with different tools and design ideas.
          </p>
        </header>

        <h1 className="subtitle"> Education & Experience</h1>
        <div className="education">
        <p>  I have graduated in Mathematics from the University of Hong Kong in summer 2022.
            During my undergraduate years, I have acquired various Maths knowledge from my coursework 
            and I have become a better self-learner and problem solver through the research projects offered 
            by the school. Most importantly, I have learnt to be more 
            patient and persistent when I face difficulties and struggles.</p>

          <img src={education} alt="education"/>
        </div>

        <h1 className="subtitle"> Why do I code?</h1>
        <div className="code">
          <img src={code} alt="code"/>
          <p> 
            After I graduated, I have started studying coding on my own and I have learnt HTML, CSS, Javascript and PHP. I have decided to be a programmer since I enjoy learning how the code works, adding my own features in the code and solving the errors. The reasoning behind is very analogous to a Mathematical
            proof that both of them demand a rigorous structure built by elementary definitions. Compare with Mathematics, I can create something practical and intuitive from coding since Mathematics is more abstract and tedious. 
            </p>
        </div>

        <h1 className="subtitle"> What did I use in this project?</h1>
        <div className="project">
        <p> 
            This website is my first project and I have practised my skills in React and learnt some features like React Router, SVG stroke animation, useEffect and keyframes. I have referenced a portfolio project from Youtube <a href="https://www.youtube.com/watch?v=bmpI252DmiI&list=WL&index=1&t=204s&ab_channel=freeCodeCamp.org" rel="noreferrer" target="_blank" > (Here is the link)</a> and I have tried to understand the codes and make some modifications. This helps me prepare for the career in programming.
            </p>

            <img src={project} alt="project"/>
        </div>
      </div>
    </motion.div>
  )
}

export default About