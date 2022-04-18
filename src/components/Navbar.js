import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <h1></h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
        <Link to="/blogs">Blog</Link>
        <Link to="#">Contact</Link>
      </div>
    </nav>
  )
}
