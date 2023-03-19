import React from "react"
import { Link } from "react-router-dom"
import "./Home.css"
import freelancers from "./Assets/Freelance_Hero.jpeg"
import Header from "./Header"
import partner_logo from "./Assets/logo.svg"
import Footer from "./Footer"

const Home = props => {
  return (
    <div className="Home">
      <Header />
        {/* <h1>Welcome to Tester Connector!</h1> */}
        <div class="hero-container">
          <div class="left-block">
            <p class="Hero-Text">Tester Connector connects students like you with the <mark>top companies</mark> in the world. You get a <mark>high paying gig</mark> and to <mark>build your portfolio</mark>while our partner companies build <mark>the next generation of talent.</mark>.</p>
          </div>
          <div class="right-block">
            <img src={freelancers} alt="Freelancers" />
          </div>
        </div>

        {/* CTA */}
        <div class="cta-container">
          <div class="cta-box">
            <p>Join the ranks of hundrds of students in working with the world's leading companies.</p>
            <a href="/login" class="cta-button">Sign-Up Here</a>
          </div>
        </div>

        {/* Company Logos */}
        <section class="companies-section">
          <div class="partners-header">
            <h2>Some of Our Partners</h2>
          </div>
          <div class="companies-container">
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
            <div class="company-logo">
              <img src={partner_logo} alt="Company Logo"/>
            </div>
          </div>
          <div class="find-more-button">
            <a href="companies_list">Find More Companies</a>
          </div>
        </section>


        {/* Check out positions*/}
        <div class="cta-container">
          <div class="cta-box">
            <p>Check out some potential positions.</p>
            <a href="/login" class="cta-button">See Freelance Projects</a>
          </div>
        </div>

        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home
