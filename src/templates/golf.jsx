import React, { Component } from 'react';
import './football.css';
class Golf extends Component {
    state = {  } 
    render() { 
        return (
            <div>
  <title>Golf - Sports</title>
  
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
      <img src="./golf1.jpg" />
    </div>
    <div className="img-post">
      <img src="./golf2.jpg" />
    </div>
  </div>
  <div className="continer">
    <h2>Golf</h2>
    <p>golf, a cross-country game in which a player strikes a small ball with various clubs from a series of starting<br /> points (teeing grounds) into a series of holes on a course. The player who holes his ball in the fewest strokes<br /> wins.</p>      
  </div>
  
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
</div>

        );
    }
}
 
export default Golf;