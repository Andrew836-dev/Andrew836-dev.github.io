import React from "react";
import "./style.css";

function About(props) {
  return (<div className="row">
    <div className="twelve columns">
      <section className="" id="about">
        <div className="text-center">
          <h1>About Me</h1>
          <div className="eight columns">
            <header>
              <h4>A tradesman with a fondness for problem solving and programming</h4>
            </header>
            <p className="about-text u-cf">
              <img src="/img/headshot.jpg" className="u-pull-left headshot" alt="My head." />
              A fitter and turner by trade, I completed my apprenticeship through the
              Engineering Employers Association (EEA). Metalwork has been my primary labour, however I
              did work with a masonry company for a short time before returning to steel.
            </p>
            <p className="about-text">
              Now a Full Stack Web Developer. 
              Demonstrating strong problem solving skills when implementing new
              work processes and systems with self-taught skills. 
              Positioned to solve complex problems by leveraging ability to create innovative
              solutions and self-start in fast and high pressure environments.
            </p>
            <footer>
              <a className="button" href="./files/Andrew_Gray_Resume.pdf"
                target="_blank">View PDF Resume</a>
            </footer>
          </div>
        </div>
      </section>
    </div>
  </div>
  )
}

export default About;