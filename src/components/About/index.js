import React from "react";

function About(props) {
  return (<div className="row">
    <div className="twelve columns">
      <section className="" id="about">
        <div className="text-center">
          <h1>About Me</h1>
          <div className="card">
            <header>
              <h4>I'm a former tradesman looking to move into a development career.</h4>
            </header>
            <p className="portfolio-text clearfix">
              <img src="/img/headshot.jpg" className="pull-left headshot" alt="My head." />
              A fitter and turner by trade, I completed my apprenticeship through the
              Engineering Employers Association (EEA). Metalwork has been my primary labour, however I
              did work with a masonry company for a short time before returning to steel.
            </p>
            <footer>
              <a className="button" href="./assets/Andrew_Gray_Resume.pdf"
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