import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Writo Education</h1>
      <nav>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;
