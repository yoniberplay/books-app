import React from 'react';
import Header from './Header';
import PageContainer from './PageContainer';
import '../App.scss';

const Navigation = ( props ) =>{


    return (
       
<div id="main-container" className="main-container nav-effect-1">
<nav className="nav-menu nav-effect-1" id="menu-1">
    <h2 className="">The Library</h2>
    <ul>
      <li><a className="" href="#asd">Checkout</a></li>
      <li><a className="" href="#asdf">Return</a></li>
      <li><a className="" href="#asdf">About</a></li>
      <li><a className="" href="#asdf">Contact</a></li>
    </ul>
  </nav>

  <div className="main clearfix">
        {/* <Header></Header> */}
        <PageContainer></PageContainer>


        </div>

        
        <div className="main-overlay">
    <div className="overlay-full"></div>
  </div>

</div>
       
    )
}

export default Navigation;