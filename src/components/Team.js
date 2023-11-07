import React from "react";
import "./Team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TestimonialCard from "./TestimonialCard";
import testmonialData from "./testimonial.json";
import img_one from "./../assets/team_member_one.webp"
import img_two from "./../assets/team_member_two.webp"

function Team() {
  return (
    <div className="team" id="team">
      <h1>Our team</h1>
      <p className="mb-2">Meet the Experts: The Masterminds Behind RupayaPaisaGurukul’s Success</p>

      <div className="team-data mt-5">
        <div className="team-member d-md-flex ">
          <div className="team-member-image">
            <img src={img_one} />
          </div>
          <div className="team-member-content">
            <h1>Dr. Ravi Sharma</h1>
            <h3>Founder & CEO</h3>
            <p>
            Dr. Ravi Sharma is a financial expert, former investment banker, and seasoned entrepreneur. His passion for financial education led him to create RupayaPaisaGurukul, where he shares his knowledge and experience with learners worldwide.
            </p>
          </div>
        </div>
        <div className="team-member d-md-flex">
          <div className="team-member-image">
            <img src={img_two} />
          </div>

          <div className="team-member-content">
            <h1>Ms. Priya Singh</h1>
            <h3>Head of Education</h3>
            <p>
            Ms. Priya Singh is an expert financial educator with a decade of experience in designing and delivering financial education programs. Her attention to detail and passion for teaching make her an exceptional asset to RupayaPaisaGurukul.
            </p>
          </div>
        </div>
      </div>

      <h1>Client Testimonials</h1>
      <p className="mb-5">Hear What Our Clients Have to Say About Us</p>

      <Container>
        <Row>
          {testmonialData.map((data) => {
            return (
              <Col sm={12} md={6} className="ps-0">
                <TestimonialCard data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Team;
