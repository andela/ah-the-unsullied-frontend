import React from 'react';
import { Button } from 'react-materialize';
import Login from '../../login';
import '../../../assets/css/nav.scss';
import Logo from './Logo.png';

export const Nav = () => {
  return (
    <div>
      <div className="navbar-fixed">
        <nav className="nav-wrapper">
          <div className="container">
            <div>
              <img src={Logo} className="img-responsive" alt="++ah-unsullied" />
            </div>
            <div className="v1" />
            <div id="emboss">{'Author\'s Haven'}</div>
            <ul className="right hide-on-med-and-down">
              <li>
                <Login />
              </li>
              <li>
                <Button>SignUp</Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
