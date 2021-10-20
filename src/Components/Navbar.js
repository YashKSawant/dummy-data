import React from 'react';
import { FaDatabase, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { BrowserRouter as Router, Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <Router>
      <nav>
        <Link to="/" className="nav-header">
          <h2 id="icon">
            <FaDatabase id="logo" />
            Dummy Employees
          </h2>
        </Link>
        <a
          href="https://github.com/YashKSawant/asian-countries"
          target="_blank"
          rel="noreferrer"
        >
          <div className="nav-link">
            <p>
              View on <FaGithub /> GitHub
              <sup>
                <FaExternalLinkAlt />
              </sup>
            </p>
          </div>
        </a>
      </nav>
    </Router>
  );
};

export default NavBar;
