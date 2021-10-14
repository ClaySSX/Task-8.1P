import React from 'react';
import Header from './Header';
import CardList from './CardList';
import Footer from './Footnote';
import './App.css';


function App(){
    return(
        <div className ="App">
            <Header/>
            <img className= "Banner" src={require('./images/banner.jpg').default}></img>
            <div><h3>Featured Experts</h3></div>
            <CardList/>
            <Footer/>
        </div>
    )
}

export default App;