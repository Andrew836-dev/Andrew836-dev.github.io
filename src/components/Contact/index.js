import React from "react";

function Contact(props) {
  return (
    <div>
      <h1>Contact Me</h1>
      <div className="row is-horizontal-align">
        <div className="card is-full-width portfolio-text">
          <header>
            <h4>Links</h4>
          </header>
          <ul className="text-left">
            <li><a href="https://www.linkedin.com/in/andrew-gray-45310b1a3/">LinkedIn</a></li>
            <li><a href="https://github.com/Andrew836-dev">Github - Andrew836-dev</a></li>
            <li><a href="mailto:andrew.aj.gray@gmail.com">andrew.aj.gray@gmail.com</a></li>
            <li><a href="tel:+61427778066">Mobile - 0427778066</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact;