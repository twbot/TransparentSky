
import React, { Component, useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import queryString from 'query-string';

import '../styling/Navbar.css';
import Header from "./Header";

const HeaderLink = ({ page, selected }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let className = selected ? 'headerlink-no-link ' : '';
  className += 'headerlink-title';
  // return <Link to={`/${page}`} className={className}>{title}</Link>;
  return <Link to={`/${page}`} className={className}>
    <a>{title}</a>
    {/* <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>•</div> */}
  </Link>
};

const HeaderLinkHead = ({page, selected }) => {
  return <Link to={`/${page}`} className=''>
    <img src="../../ts-lettering.png" className="logo-letters" />
  </Link>
};

const Navbar = () => {
  // Declare a new state variable, which we'll call "count"
  const [prevScrollpos, updateScrollPos] = useState(window.pageYOffset);
  const [visible, updateVisible] = useState(true);

  const page = useParams().page || 'home';

  // Hide or show the menu.
  const handleScroll = () => {
    updateScrollPos(window.pageYOffset);
    updateVisible(prevScrollpos > window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  
    // returned function will be called on component unmount 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <nav
      className={  (!visible ? "navbar--hidden" : "navbar") }
    >
      <HeaderLinkHead page='' selected={page === ''} />
      <div className="link-section">
        <div><HeaderLink page='live'  selected={page === 'live'} /></div>
        <div><HeaderLink page='products' selected={page === 'products'} /></div>
        <div><HeaderLink page='about'  selected={page === 'about'} /></div>
        <div><HeaderLink page='contact' selected={page === 'contact'} /></div>
      </div>
    </nav>
  );
};

export default Navbar;