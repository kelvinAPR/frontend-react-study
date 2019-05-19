import React from 'react';

function App() {
  return (
    <div className="study-container">
      <div className="study-header">
        <div className="top">
          <div className="top-container">
            <div className="row">
              <div className="col-md-8">
                <ul className="list-inline">
                  <li><i className="fas fa-phone"></i>123-456-789</li>
                  <li><i className="far fa-clock"></i>Mon-Fri 8:00 to 2:00</li>
                  <li><i className="far fa-envelope"></i>contact@yourdomain.com</li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline">
                  <li> FAQ | </li>
                  <li>Help Desk | </li>
                  <li>Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="main">
          <div className="main-container">
              <div className="left">
                <a href="#" className="brand">
                  <img src={require('../assets/images/logo.png')} />
                </a>
              </div>
              <div className="right">
                <ul className="menu">
                  <li className="active"><a href="#">Home</a></li>
                  <li className=""><a href="#">About</a></li>
                  <li className=""><a href="#">News</a></li>
                  <li className=""><a href="#">Blog</a></li>
                  <li className=""><a href="#">Contact</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
      <div className="study-content">
        <div className="content">
          <div className="left">

          </div>
          <div className="right">
            
          </div>
        </div>
      </div>
      <div className="study-footer">Designed by Kelvin</div>
    </div>
  );
}

export default App;
