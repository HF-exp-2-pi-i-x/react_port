import "./index.scss"
import Navlogo from "../../assets/images/nav_logo.svg"
import {FaHome,FaPaintBrush,FaEnvelope} from "react-icons/fa"
import {BiUserPin} from "react-icons/bi"
import { Link,NavLink } from "react-router-dom"
// import { useState } from "react"

const Navbar = ()=>{

  function Icon(props){
    return(
      <NavLink
      exact="true"
      activeclassname="active"
      to={props.location}
      className={props.class_name}
      >
        {props.pic}
      </NavLink>
    )
  }
  
  return (
    <div className="nav">
      <Link className="logo"
            to="/" >
        <img src={Navlogo} alt="logo" />
        <div className="text">
          React Project
        </div>
      </Link>
     <div className="icons">

      <Icon pic={<FaHome />} location="/" class_name=""/>

      <Icon pic={<BiUserPin />} location="/about" class_name="about-link"/>

      <Icon pic={<FaPaintBrush />} location="/portfolio" class_name="portfolio-link"/>

      <Icon pic={<FaEnvelope />} location="/contact" class_name="contact-link"/>

     </div>
      <div className="toggle">
        to be modified
      </div>
    </div>
  )
}
  
export default Navbar
