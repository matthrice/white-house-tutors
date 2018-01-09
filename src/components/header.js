import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <div class="header">
        <span className="flash" aria-hidden="true">
            <span class="flash-item" style={{animationDelay: '1s'}}>/</span>
            <span class="flash-item" style={{animationDelay: '1.1s'}}>/</span>
            <span class="flash-item" style={{animationDelay: '1.2s'}}>/</span>
            <span class="flash-item" style={{animationDelay: '1.3s'}}>/</span>
            <span class="flash-item" style={{animationDelay: '1.4s'}}>/</span>
            <span class="flash-item" style={{animationDelay: '1.5s'}}>/</span>
            <span class="flash-item" style={{animationDelay: '1.6s'}}>/</span>
            <span class="flash-item" style={{animationDelay: '1.7s'}}>/ </span>
        </span>
        <strong>White House Tutors</strong>
        <span class="sep" aria-hidden="true">.</span>
        <Link to="/" class="link">Home</Link>
        <span class="sep" aria-hidden="true">.</span>
        <Link to="/tutors" class="link">Tutors</Link>
        <span class="sep" aria-hidden="true">.</span>
        <Link to="/contact" class="link">Contact</Link>
    </div>
);

export default Header;