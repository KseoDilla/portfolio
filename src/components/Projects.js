import React, { Component } from "react";
import "../styles/Projects.css"
 
class Projects extends Component {
  render() {
    return (
      <div class="parent">
        <h2>Projects</h2>
        <ul>
            <li> no title yet - in progress 2022 </li>
                <div>
                    <div class="child">
                        <ul>
                            <li>Currently written in python using Google's tensorflow library </li>
                            <li>Technology used: </li>
                            <ul>
                                <li>Docker</li>
                                <li>Python3</li>
                                <li>Tensor</li>
                           </ul>
                        </ul>
                    </div>
                </div>
            <li> SpeedTestTyper - in progress 2022 </li>
                <div>
                    <div class="child">
                        <ul>
                        <li>Currently written as a terminal based</li>
                        <li>Plans to convert it into a server sided application for PHP integration</li>
                        <li>Technology used: </li>
                            <ul>
                                <li>Docker</li>
                                <li>Git</li>
                                <li>C++</li>
                                <ul>
                                    <li>ncurses</li>
                                </ul>
                            </ul>
                        <li>A fun exercise for myself as I do not have any web development skills: this is my first react-js application</li>
                        </ul>
                    </div>
                </div>
            <li> Portfolio Website - Fall 2022 </li>
                <div>
                    <div class="child">
                        <ul>
                        <li>Created a Single Page Application</li>
                        <li>Technology used: </li>
                            <ul>
                                <li>Docker</li>
                                <li>Git & GitHub</li>
                                <li>HTML, CSS, React-JS</li>
                            </ul>
                        <li>A fun exercise for myself as I do not have any web development skills: this is my first react-js application</li>
                        </ul>
                    </div>
                </div>
            <li> RaveAboutIt Champion - 2018 </li>
            <div>
                <div class="child">
                <ul>
                <li> Placed 1st in Rave About It Hackathon Day of Summer 2018 </li>
                <li> Prototyped a new pipeline so that Jenkins could build numerous products in a timely manner </li>
                <li> Greatly reduced nightly build times by 75%, reduced 8 hours to 2 hours for 68 products </li> 
                </ul>
                </div>
                <div class="child">
                <img width="400" height="400" src={require("../assets/RaveAboutItChamp.png")} title="Ksuh Dilla - bottom 2nd row"/>
                </div>
            </div>
            <li> RaveAboutIt 2nd Place - 2016 </li>
                <div class="child">
                <ul>
                <li> Placed 2nd in Rave About It Hackathon Day of Summer 2016</li>
                <li> Worked in a team of four to implement a messaging application for passengers</li>
                <li> Solution required knowldge of the companies code base and technological stack revovling around: </li>
                    <ul>
                    <li> C++ </li>
                    <li> QML </li>
                    <li> Bash </li>
                    <li> UDP Networking </li>
                    </ul>
                </ul>
                </div>
                <div class="child">
                </div>
            <li> Combat Cell - 2014 </li>
            <div>
                <div class="child">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/IEKOqmIu3BY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="child">
            <p>
                <ul>
                <li>Programmed in C# and develoepd on Unity3D.</li>
                <li>A tower defense revolved around the theme of defending the human anatomy</li>
                <li>Developed in under ten weeks!</li>
                <li>GUI was designed in NGUI (disabled in the video)</li>
                <li>Models were constructed in Maya</li>
                </ul>
            </p>
                </div>
            </div>
            <li> MicroMouse - 2013 </li>
            <div>
                <div class="child">
                <ul>
                <li>Programmed on Arduino Platform</li>
                <li>Built a robot that would traverse and try to solve an arbitrary maze</li>
                <li>Used a varation of PID control and correct it's direction to maintain itself on a straight path</li>
                <li>1st place for the UCR Local 2013 competition & 7th/20th for the UCSD California 2013 Competition</li>
                </ul>
                </div>
                <div class="child">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/7pr81BwrDGo?start=904" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </ul>
      </div>
    );
  }
}
 
export default Projects;
