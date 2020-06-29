import React from 'react';
import logo from './logo.svg';
import {Navbar, NavbarBrand} from "reactstrap";
import MenuComponents from "./components/MenuComponents";
import './App.css';


function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
            <NavbarBrand href="/">Fusion Coffe House</NavbarBrand>
        </div>
      </Navbar>
        <MenuComponents />
    </div>
  );
}

export default App;
