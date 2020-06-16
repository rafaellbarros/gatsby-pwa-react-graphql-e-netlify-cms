import { Link } from 'gatsby'
import React from 'react'

const AboutPage = () => (
    <>
    <h1>About Page</h1>
    <ul>
    <li>
      <a href="/about">About</a>
    </li>
    <li>
      <Link to="/" activeStyle={{color: 'red'}}>Home</Link>
    </li>
    <li>
      <Link to="/about" activeStyle={{color: 'red'}}>About (Gatsby Link)</Link>
    </li>
    </ul>
  </>
)

export default AboutPage