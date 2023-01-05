import "./index.scss"
import {motion} from "framer-motion"
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import AnimatedLetters from '../AnimatedLetters'
import "leaflet/dist/leaflet.css"


const Contact = ()=>{

  const contactArr = "Contact Me".split("")

  const [letterClass,setLetterClass]=useState("text-animation")

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setLetterClass("text-animation-hover")
    },3000)
    return ()=> clearTimeout(timer)
  },[]
  )
 
  const sendEmail = (e)=>{
    e.preventDefault()
    alert("Message successfully sent!!!!")
  }


  return(
    <motion.div 
    className="page"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:1, transition: {duration:0.1}}}
    >

      <div className="contact">
        <h1>
        <AnimatedLetters 
              strArr={contactArr} 
              letterClass={letterClass} 
              idx={1}/>
        </h1>
        <p>Plese feel free to contact me for any programming job opportunities</p>

        <div className="contact-form">
            <form onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
      </div>
      <div className="leaflet">
            <div className="info">
              Fung Siu Yu, Han
              <br/>
              HK
              <br/>
              <span>xyz@gmail.com</span>
            </div>
            <div className="map">
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
              <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                  Random location
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            
      </div>
      
    </motion.div>
  )
}

export default Contact