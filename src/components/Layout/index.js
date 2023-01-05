import './index.scss'
import {Outlet} from "react-router-dom"
import Navbar from "../Navbar/"
import Footer from "../Footer"

const Layout = ()=>{
  return (
    <>
      <Navbar/>
      {/* <div className="page"> */}
        <Outlet /> 
      {/* </div> */}
      <Footer/> 

      <div className="zone">
        <ul className="circles">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React JS</li>
          <li>NPM</li>
          <li>PHP</li>
          <li>SASS</li>
          <li>SVG</li>
          <li>Web Dev Tool</li>
        </ul>
      </div>
    </>
   
  )
}

export default Layout