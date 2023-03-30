import React, { Component } from 'react';
import './football.css';
class FootBall extends Component {
    state = {  } 
    render() { 
        return (
            <div>
  <title>Football - Sports</title>
  
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
  <div className="header-post">
    <div className="img-post">
      <img src="./foot1.jpg" />
    </div>
    <div className="img-post">
      <img src="./foot2.jpg" />
    </div>
  </div>
  <div className="continer">
    <div className="conti">
      <h2>FootBall</h2>
      <p>Football, also called association football or soccer, is a game involving two teams of 11 players who try to maneuver the ball into the other team's goal without using their hands or arms. The team that scores more goals wins. Football is the world's most popular ball game in numbers of participants and spectators</p>
      </div>
     
  </div>
  
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
</div>

        );
    }
}
 
export default FootBall;