import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer className="footer">
        <div className="iconsdiv">
          <FontAwesomeIcon className="icons" icon={faFacebookSquare} />
          <FontAwesomeIcon className="icons" icon={faInstagram} />
          <FontAwesomeIcon className="icons" icon={faTwitter} />
          <FontAwesomeIcon className="icons" icon={faLinkedin} />
        </div>
        <p>Copyright ©2020 All rights reserved </p>
      </footer>
    </div>
  )
}
