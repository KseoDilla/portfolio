import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import "../styles/index.css"

import Home from "./Home";
import Career from "./Career";
import Projects from "./Projects";
import AboutMe from "./AboutMe";

class Main extends Component {
  render() {
    return (
    <div>
      <HashRouter>
          <header>
            <nav>
                <ul className="ul_r">
                    <li className="hover-underline-animation"> <NavLink exact to="/" className="nostyle">Home</NavLink></li>
                    <li className="hover-underline-animation"> <NavLink exact to="/Career" className="nostyle" >Career</NavLink></li>
                    <li className="hover-underline-animation"> <NavLink exact to="/Projects" className="nostyle">Projects</NavLink></li>
                    <li className="hover-underline-animation"> <NavLink exact to="/AboutMe" className="nostyle" >About Me</NavLink></li>
                </ul>
            </nav>
          </header>
          <article>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/career" element={<Career/>} />
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/aboutme" element={<AboutMe/>}/>
            </Routes>
          </article>
          <footer>
            <h3> &copy; Kevin Suh, 2023 </h3>
          </footer>
      </HashRouter>
      </div>
    );
  }
}
 
export default Main;
