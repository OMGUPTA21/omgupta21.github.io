import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">OM GUPTA </span>
            from <span className="purple"> Naihati West Bengal, India.</span>
            <br />
            As an ambitious and dedicated student pursuing an MCA in Computer Application at Maulana Abul Kalam Azad University of Technology.
            <br />
            I am passionate about using my technical skills to make a positive impact on society. With a strong academic background in computer application and programming. 
            <br />
            <br />
            I was delighted to be presented with the opportunity to utilise the skills gained during my internship to solve problems in the digital world.
          
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Development
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Educational Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "An attitude of positive expectation is the mark of superior personality", so be positive {':)'}
          </p>
          <footer className="blockquote-footer">OM GUPTA</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
