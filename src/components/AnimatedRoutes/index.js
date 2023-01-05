import {Routes, Route,useLocation} from "react-router-dom"
import Layout from '../Layout';
import Home from "../Home"
import About from "../About"
import Portfolio from "../Portfolio"
import Contact from "../Contact"
import {AnimatePresence} from "framer-motion"


const AnimatedRoutes = ()=>{
  const location = useLocation()
  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/react_port" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="portfolio" element={<Portfolio/>}/>
            <Route path="contact" element ={<Contact/>}/>
        </Route>
      </Routes>
    </AnimatePresence>
        
  )
}

export default AnimatedRoutes