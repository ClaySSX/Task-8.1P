import React from 'react';
import './Header.css'

function Header(){
    return(
    <header id="header">
    <div class="logo">IService</div>
    <nav class="menu">
      <ul>
        <li><a href="#">Post a Task</a></li>
        <li><a href="#">Become an expert</a></li>
        <li><a href="#">Find Tasks</a></li>
        <li><a href="#">How it Works</a></li>
        <li class= "signIn"><a href="#">Sign in</a></li>
        
      </ul>
    </nav>
  </header>)
  }
  

  export default Header;