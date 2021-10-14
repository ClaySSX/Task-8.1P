import React from 'react';
import './Footnote.css'

function Footer(){
    return(
    <footer id="footer">
    <nav class="Fmenu">
        <ul>
            <div class ="fL">
                <li>NEWSLETTER SIGN</li>
                <input type = 'email'></input><button>Subscribe</button>
            </div>
            <div class = "fR">
            <li><a href="#">Connect with us on social media</a></li>
            <li><img className ='logos' src={require('./images/fb.jpg').default} img/><a href="#"></a></li>
            <li><img className ='logos' src={require('./images/insta.jpg').default}/><a href="#"></a></li>
            <li><img className ='logos' src={require('./images/twitter.png').default}/><a href="#"></a></li>
            </div>
        </ul>
      
    </nav>
  </footer>)
  }

  export default Footer;
  