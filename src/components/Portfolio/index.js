import "./index.scss"
import {useState, useEffect} from "react"
import AnimatedLetters from "../AnimatedLetters"
import {AiFillGithub} from "react-icons/ai"
import js_logo from "../../assets/images/js-logo.png"
import {motion} from "framer-motion"

const Portfolio = ()=>{

  const [letterClass,setLetterClass]=useState("text-animation")
  const titleArr="Portfolio".split("")

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLetterClass("text-animation-hover")
    },3000)
    return ()=> clearTimeout(timer)
  },[]
  )

  const Portfolio = (props)=>{
    return(
      <div className="portfolio-item">
        <img src={props.pic} alt="port-img"/>
        <div className="hover-items">
          <h3>View My source codes</h3>
          <div className="icons">
            <a href={props.link} className="icon">
                <AiFillGithub size="1.5em"/>
            </a>
          </div>
        </div>

      </div>
     
    )
  }

  return (
    <motion.div 
    className="page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1, transition: {duration:0.1}}}
    >
      <div className="port-container">
        <h1 className="port-title"> 
            <AnimatedLetters 
            strArr={titleArr} 
            letterClass={letterClass} 
            idx={1}/>
          </h1>
          <p className="port-text">Here is the list of  my work written in various programming languages</p>
          <div className="portfolios">
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
            <Portfolio pic={js_logo} link="#"/>
          </div>

      </div>
    </motion.div>
   
  )
}

export default Portfolio