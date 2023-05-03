import React from 'react';
import { Footer } from '../../components/common/Footer';
import { Header } from '../../components/common/Header';
import freelancers from '../../Assets/Freelance_Hero.jpeg';
import partnerLogo from '../../Assets/logo.svg';
import './Home.css';
import { Link } from 'react-router-dom';
import { useLoginCheck } from '../../hooks/useLoginCheck';

const Home = props => {
  const [isLogined] = useLoginCheck();

  return (
    <div className="Home">
      <div> HELLOOOOOOOOOO!!!! </div>
      <Header />
      {/* <h1>Welcome to Tester Connector!</h1> */}
      <div className="hero-container">
        <div className="left-block">
          <p className="hero-text">
            Tester Connector connects students like you with the{' '}
            <mark>top companies</mark> in the world. You get a{' '}
            <mark>high paying gig</mark> and to{' '}
            <mark>build your portfolio</mark>while our partner companies build{' '}
            <mark>the next generation of talent</mark>.
          </p>
        </div>
        <div className="right-block">
          <img src={freelancers} alt="Freelancers" />
        </div>
      </div>

      {/* CTA */}
      {!isLogined && (
        <div className="cta-container">
          <div className="cta-box">
            <p>
              Join the ranks of hundreds of students in working with the world's
              leading companies.
            </p>
            <Link to="/signup" className="cta-button">
              Sign-Up Here
            </Link>
          </div>
        </div>
      )}

      {/* Company Logos */}
      <section className="companies-section">
        <div className="partners-header">
          <h2>Some of Our Partners</h2>
        </div>
        <div className="companies-container">
          <div className="company-logo">
            <img src="img/company_logos/1.png" alt="Company Logo" />
          </div>
          <div className="company-logo">
            <img src="img/company_logos/2.png" alt="Company Logo" />
          </div>
          <div className="company-logo">
            <img src="img/company_logos/3.png" alt="Company Logo" />
          </div>
          <div className="company-logo">
            <img src="img/company_logos/4.png" alt="Company Logo" />
          </div>
          <div className="company-logo">
            <img src="img/company_logos/5.png" alt="Company Logo" />
          </div>
          <div className="company-logo">
            <img src="img/company_logos/6.png" alt="Company Logo" />
          </div>
          <div className="company-logo">
            <img src="img/company_logos/7.png" alt="Company Logo" />
          </div>
          <div className="company-logo">
            <img src="img/company_logos/8.png" alt="Company Logo" />
          </div>
        </div>
        <div className="find-more-button">
          <Link to="/position">Find More Companies</Link>
        </div>
      </section>

      {/* Check out positions*/}
      <div className="cta-container">
        <div className="cta-box">
          <p>Check out some potential positions.</p>
          <Link to="/freelancer" className="cta-button">
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
