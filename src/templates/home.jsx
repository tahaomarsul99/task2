import React, { Component } from 'react';
import './home.css';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
               <title>Home - Sports</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="static/home.css" /> 
        <div className="header">
          <div className="menu-open"><i className="fa-solid fa-bars" /></div>
          <div className="menu">
            <ul>
              <li><a href="/Home">Home</a></li>
              <li><a href="/FootBall">FootBall</a></li>
              <li><a href="/Golf">Golf</a></li>
              <li><a href="/Swimming">Swimming</a></li>
            </ul>
          </div>
          <div className="logo">
            <div className="logo-img" />
            <h1>DTHSport</h1>
          </div>
        </div>
        <div className="img-header">
          <div className="cont-head">
            <h3>Sports</h3>
            <a href="/FootBall">Sports <i className="fa-solid fa-angles-right" /></a>
          </div>
        </div>
     
              
        

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
           

                 </div>
        );
    }
}
 
export default Home;