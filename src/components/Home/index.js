import "./index.scss"
import {FaReact} from "react-icons/fa"
import {TbMathFunction} from "react-icons/tb"
import 'animate.css';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import {motion} from "framer-motion"



const Home = ()=>{

  const [letterClass,setLetterClass]=useState("text-animation")
  const welcomeArr = "Welcome to my page !".split("")
  const nameArr ="My name is Fung Siu Yu".split("")

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLetterClass("text-animation-hover")
    },6000)
    return ()=> clearTimeout(timer)
  },[]
  )

  return (
    <motion.div
    className="page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1, transition: {duration:0.1}}}
    >
       <div className="text-zone">
            <h1> 
            <AnimatedLetters 
              strArr={welcomeArr} 
              letterClass={letterClass} 
              idx={1}/>
            </h1>

            <h1>
              <AnimatedLetters 
              strArr={nameArr} 
              letterClass={letterClass} 
              idx={21}/>
            </h1>

            <h4>
              {<FaReact/>}{<TbMathFunction/>} Self-taught React developer / Maths major graduate
            </h4>
            <button>
              View My Resume
            </button>
       </div>
       <div className="graphics">
          <div className="outline-logo">
            <svg width="500" height="500" viewBox="0 0 363 352" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="eclipse-path" d="M360.5 176.5C360.5 183.289 356.154 190.202 347.238 196.881C338.366 203.526 325.369 209.616 309.085 214.775C276.545 225.084 231.436 231.5 181.5 231.5C131.564 231.5 86.4553 225.084 53.9151 214.775C37.6306 209.616 24.6338 203.526 15.7619 196.881C6.84591 190.202 2.5 183.289 2.5 176.5C2.5 169.711 6.84591 162.798 15.7619 156.119C24.6338 149.474 37.6306 143.384 53.9151 138.225C86.4553 127.916 131.564 121.5 181.5 121.5C231.436 121.5 276.545 127.916 309.085 138.225C325.369 143.384 338.366 149.474 347.238 156.119C356.154 162.798 360.5 169.711 360.5 176.5Z" stroke="#000000" stroke-width="5"/>

              <path className="eclipse-path" d="M291.058 313.12C285.857 317.484 277.767 318.599 266.92 316.062C256.127 313.537 243.107 307.496 228.688 298.337C199.874 280.036 165.964 249.605 133.866 211.352C101.768 173.098 77.6873 134.419 64.6679 102.866C58.1524 87.0749 54.4639 73.2039 53.8517 62.1362C53.2363 51.0135 55.739 43.2403 60.9396 38.8766C66.1401 34.5128 74.2298 33.3979 85.0766 35.9353C95.8699 38.4602 108.89 44.5013 123.309 53.6599C152.123 71.9607 186.033 102.392 218.131 140.645C250.229 178.899 274.31 217.578 287.329 249.131C293.845 264.922 297.533 278.793 298.145 289.861C298.761 300.984 296.258 308.757 291.058 313.12Z" stroke="#000000" stroke-width="5"/>

              <path className="eclipse-path" d="M296.057 38.8766C301.258 43.2403 303.761 51.0135 303.145 62.1362C302.533 73.2039 298.845 87.0749 292.329 102.866C279.31 134.419 255.229 173.098 223.131 211.352C191.033 249.605 157.123 280.036 128.309 298.337C113.89 307.496 100.87 313.537 90.0766 316.062C79.2297 318.599 71.1401 317.484 65.9395 313.12C60.739 308.757 58.2363 300.984 58.8516 289.861C59.4639 278.793 63.1524 264.922 69.6679 249.131C82.6873 217.578 106.768 178.899 138.866 140.645C170.964 102.392 204.874 71.9607 233.688 53.6599C248.107 44.5013 261.127 38.4602 271.92 35.9353C282.767 33.3979 290.857 34.5128 296.057 38.8766Z" stroke="#000000" stroke-width="5"/>

              <circle className="circle-path" cx="176" cy="176" r="28.5" stroke="#000000" stroke-width="5"/>

            </svg>
          </div>
          
          <div className="solid-logo">
             <svg width="500" height="500" viewBox="0 0 363 352" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M360.5 176.5C360.5 183.289 356.154 190.202 347.238 196.881C338.366 203.526 325.369 209.616 309.085 214.775C276.545 225.084 231.436 231.5 181.5 231.5C131.564 231.5 86.4553 225.084 53.9151 214.775C37.6306 209.616 24.6338 203.526 15.7619 196.881C6.84591 190.202 2.5 183.289 2.5 176.5C2.5 169.711 6.84591 162.798 15.7619 156.119C24.6338 149.474 37.6306 143.384 53.9151 138.225C86.4553 127.916 131.564 121.5 181.5 121.5C231.436 121.5 276.545 127.916 309.085 138.225C325.369 143.384 338.366 149.474 347.238 156.119C356.154 162.798 360.5 169.711 360.5 176.5Z" stroke="#4B0082" stroke-width="5"/>

              <path d="M291.058 313.12C285.857 317.484 277.767 318.599 266.92 316.062C256.127 313.537 243.107 307.496 228.688 298.337C199.874 280.036 165.964 249.605 133.866 211.352C101.768 173.098 77.6873 134.419 64.6679 102.866C58.1524 87.0749 54.4639 73.2039 53.8517 62.1362C53.2363 51.0135 55.739 43.2403 60.9396 38.8766C66.1401 34.5128 74.2298 33.3979 85.0766 35.9353C95.8699 38.4602 108.89 44.5013 123.309 53.6599C152.123 71.9607 186.033 102.392 218.131 140.645C250.229 178.899 274.31 217.578 287.329 249.131C293.845 264.922 297.533 278.793 298.145 289.861C298.761 300.984 296.258 308.757 291.058 313.12Z" stroke="#4B0082" stroke-width="5"/>

              <path  d="M296.057 38.8766C301.258 43.2403 303.761 51.0135 303.145 62.1362C302.533 73.2039 298.845 87.0749 292.329 102.866C279.31 134.419 255.229 173.098 223.131 211.352C191.033 249.605 157.123 280.036 128.309 298.337C113.89 307.496 100.87 313.537 90.0766 316.062C79.2297 318.599 71.1401 317.484 65.9395 313.12C60.739 308.757 58.2363 300.984 58.8516 289.861C59.4639 278.793 63.1524 264.922 69.6679 249.131C82.6873 217.578 106.768 178.899 138.866 140.645C170.964 102.392 204.874 71.9607 233.688 53.6599C248.107 44.5013 261.127 38.4602 271.92 35.9353C282.767 33.3979 290.857 34.5128 296.057 38.8766Z" stroke="#4B0082" stroke-width="5"/>

              <circle  cx="176" cy="176" r="28.5" fill="#4B0082" stroke="#4B0082" stroke-width="5"/>

            </svg>
          </div>
       </div>
    </motion.div>
   
  )
}

export default Home