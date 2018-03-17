import React from 'react';
import {Link} from 'react-router';

const Navbar = (props) => {
  return (
    <div>
    <nav className="navbar navbar navbar-fixed-top" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header" id='navHeader' >
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
            aria-expanded={props.aria} aria-controls="navbar" onClick={() => { props.expandNav(); }}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
            <a className='navbar-brand' href='/'>
              <div>
                <span className="icon-text">Butterfly</span>
              </div>
            </a>
        </div>

          <div id='navbar' className={props.navClass} style={{float: 'right'}} aria-expanded={props.aria}>
            <ul className="nav navbar-nav" onClick={() => { props.newPage(); }}>

              <li><Link to="/boards">Home</Link></li>
              <li><Link to="/boards">About</Link></li>
              <li><Link to="/boards">Skills</Link></li>
              <li><Link to="/boards">Portfolio</Link></li>
              <li><Link to="/boards">Team</Link></li>
              <li><Link to="/boards">Blog</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  );
};
export default Navbar;
