import React, { Component } from 'react';
class Swimming extends Component {
    state = {  } 
    render() { 
        return (
            <div>
  <title>Swimming - Sports</title>
  
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
      <img src="./swimming1.jpg" />
    </div>
    <div className="img-post">
      <img src="./swimming2.jpg" />
    </div>
  </div>
  <div className="continer">
    <div className="conti">
      <h2>Swimming</h2>
      <p>swimming, in recreation and sports, the propulsion of the body through water by combined arm and leg motions and the natural flotation of the body. Swimming as an exercise is popular as an all-around body developer and is particularly useful in therapy and as exercise for physically handicapped persons
      </p>
        
    </div>
  </div>
  
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
</div>

        );
    }
}
 
export default Swimming;