import React from 'react';

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
        <strong>White House Tutoring</strong>
        <span class="sep" aria-hidden="true">.</span>
        <a href="/">Home</a>
        <span class="sep" aria-hidden="true">.</span>
        <a href="/tutors">Tutors</a>
        <span class="sep" aria-hidden="true">.</span>
        <a href="/calendar">Calendar</a>
        <span class="sep" aria-hidden="true">.</span>
        <a href="/contact">Contact</a>
    </div>
);

export default Header;