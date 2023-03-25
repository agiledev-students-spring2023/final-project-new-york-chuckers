import React from 'react';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import freelancers from '../../Assets/Freelance_Hero.jpeg';
import partnerLogo from '../../Assets/logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = props => {
  return (
    <div className="Home">
      <Header />
      {/* <h1>Welcome to Tester Connector!</h1> */}
      <div class="hero-container">
        <div class="left-block">
          <p class="Hero-Text">
            Tester Connector connects students like you with the{' '}
            <mark>top companies</mark> in the world. You get a{' '}
            <mark>high paying gig</mark> and to{' '}
            <mark>build your portfolio</mark>while our partner companies build{' '}
            <mark>the next generation of talent</mark>.
          </p>
        </div>
        <div class="right-block">
          <img src={freelancers} alt="Freelancers" />
        </div>
      </div>

      {/* CTA */}
      <div class="cta-container">
        <div class="cta-box">
          <p>
            Join the ranks of hundrds of students in working with the world's
            leading companies.
          </p>
          <Link to="/signup" class="cta-button">
            Sign-Up Here
          </Link>
        </div>
      </div>

      {/* Company Logos */}
      <section class="companies-section">
        <div class="partners-header">
          <h2>Some of Our Partners</h2>
        </div>
        <div class="companies-container">
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
          <div class="company-logo">
            <img src={partnerLogo} alt="Company Logo" />
          </div>
        </div>
        <div class="find-more-button">
          <Link to="/position">Find More Companies</Link>
        </div>
      </section>

      {/* Check out positions*/}
      <div class="cta-container">
        <div class="cta-box">
          <p>Check out some potential positions.</p>
          <Link to="/freelancer" class="cta-button">
            See Freelance Projects
          </Link>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
