import React from 'react';
import {
  Navbar as MaterialNavbar,
  NavItem,
  Dropdown,
  Button
} from 'react-materialize';
import '../../../assets/styles/HomePage.scss';

const navbar = () => {
  const Img = (
    <img
      src={require('./logo.png')}
      alt="Author's Haven"
      height="75px"
      width="200px"
    />
  );

  return (
    <React.Fragment>
      <MaterialNavbar fixed className="" brand={Img} right>
        <React.Fragment>
          <NavItem href="/">Home </NavItem>
          <NavItem href="login">Login</NavItem>
          <Dropdown trigger={<Button>profile</Button>}>
            <NavItem>one</NavItem>
            <NavItem>two</NavItem>
            <NavItem divider />
            <NavItem href="profile">profile</NavItem>
          </Dropdown>
        </React.Fragment>
      </MaterialNavbar>
    </React.Fragment>
  );
};

export default navbar;
