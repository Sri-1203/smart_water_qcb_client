import React from 'react';
import Body from './body';

function Header() {
  return (
    <>
    <header>
      {/* navigation bar */}
      <nav className="navbar navbar-inverse fixed"> 
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            
            <a className="navbar-brand" href="index.html">
              <h1 style={{fontWeight: 'bold', margin: '0 auto', color: 'whitesmoke'}}>WATER QUALITY MONITORING</h1>
            </a>
          </div>
        </div>
      </nav>{/* /.navbar */}
    </header>
    <Body/>
    </>
  );
}

export default Header;