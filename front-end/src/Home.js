import React from "react"
import logo from './Logo.png';
import { Link } from "react-router-dom"
// import logo from './logo.svg';
import "./Home.css"
import Header from "./Header"

const Home = props => {
  return (
    <div className="Home">
      <Header />
        <h1>Welcome to Tester Connector!</h1>
        <section className="main-content">
          <img alt="welcome!" src="https://picsum.photos/400?page=home" />
          <p>
          Tester Connector connects students like you with the top companies in the world. You get a high paying gig and to build you portfolio while our partner companies build the next generation of talent.
            <br />
            <br />
            <Link to="/animals">Check out our animals!</Link>
          </p>
        </section>
    </div>
  )
}

export default Home
