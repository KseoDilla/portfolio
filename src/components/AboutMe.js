import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div class="center-screen" class="parent">
        <h2>About Me</h2>
        <img display="inline" width="200" height="200" src={require("../assets/profile.jpg")}/>
            <article>
            <p> Hello! Thank you for visiting my portfolio! 
            <br/> <br/>
            Hopefully, you found my website interesting.
            I really like to put a lot of thought into my projects and work, and I hope I was able to showcase at
            least a fraction of my passion!
            <br/> <br/>
            What is my passion?
            <br/>
            Well, I have many subjects that I am quite passionate
            about, but when it comes to Software Engineering I am passionate about automation, artificial intelligence,
            and DevOps. Artificial Intelligence has always been an interesting topic to me ever since it's been
            popularized in pop-culture. The idea of sentient AIs has always been fascinating and that naturally just
            leads a geek like me to start reading into the capabilties of Machine Learning. In regards to
            automation, Devops and automation go hand-in-hand, and I've always enjoyed the act of
            using new technology to solve problems with the least amount of code in a reproducible manner - I love the idea of IaC.
            <br/> <br/>
            Do I have any hobbies?
            <br/>
            I have many hobbies: Gym, reading, dance, drawing, music, and doing LeetCode. The last one might be of a surprise,
            but I do consider it a hobby. I do not program competitively, but I do enjoy just learning ways to solve
            problems.
            <br/>
            This does not mean I enjoy being interviewed nor am I very good at them - heh. My current favorite
            problem category would be Dynamic Programming: Bottom Up Solutions are fascinating.
            <br/> <br/>
            Anything interesting I would like to share?
            <br/>
            I'm a bit of a homebody so if you ever meet me in real life do not be taken back by my low energy demanor - I'm just naturally sun deprived despite what my profile photo portrays.
            </p>
           
            </article>
      </div>
    );
  }
}


export default AboutMe;
