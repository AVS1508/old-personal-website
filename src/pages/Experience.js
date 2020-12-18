import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ExperienceCard from "../components/ExperienceCard";
import ProfessionalHeadshot from "../assets/professional-me.jpg";
import UMassLogo from "../assets/umass-logo.jpg";
import DPSRKPLogo from "../assets/dpsrkp-logo.jpg";

class Experience extends React.Component {
  render() {
    return (
      <div className="primary center-structure">
        <Container fluid>
          <Row className="justify-content-md-center" style={{ alignItems: "center" }}>
            <Col lg="3" style={{ textAlign: "center" }}>
              <img className="header-img" src={ProfessionalHeadshot} alt="header" fluid />
            </Col>
            <Col lg="8">
              <p id="about" style={{ padding: "25px 10px", textAlign: "justify" }}>
                I am a rising junior at the University of Massachusetts Amherst, double majoring in Computer Science and
                Mathematics with a concentration in Statistics and Data Science. Currently, I'm involved as a Software
                Developer for BUILD UMass, where I use my software engineering skills for pro-bono app/web development
                and tech consulting for the Amherst community. I also serve as a Designer for the HackUMass Organizing
                Team, responsible for graphics design and production for the annual hackathon. I'm actively searching
                for Software Engineering and/or Web Development internships for Summer 2021!
              </p>
            </Col>
          </Row>
          <Row>
            <ExperienceCard
              image={DPSRKPLogo}
              title="President"
              organization="Student Council, Delhi Public School"
              address="R. K. Puram, New Delhi, India"
              alternateTitle="President, Student Council"
              duration="April 2018 - April 2019"
              details={
                <>
                  • Oversaw student discipline and adherence to code of conduct
                  <br />
                  • Represented the students’ interests in administrative meetings
                  <br />
                  • Liaised between students, faculty, and administration
                  <br />• Supervised the student-run events in lieu of school coordinator
                </>
              }
            />
            <ExperienceCard
              image={DPSRKPLogo}
              title="Lead Designer"
              organization="TEDxYouth@DPSRKPuram"
              address="R. K. Puram, New Delhi, India"
              alternateTitle="Lead Designer, TEDxYouth@DPSRKPuram"
              duration="April 2018 - April 2019"
              details={
                <>
                  • Oversaw student discipline and adherence to code of conduct
                  <br />
                  • Represented the students’ interests in administrative meetings
                  <br />
                  • Liaised between students, faculty, and administration
                  <br />• Supervised the student-run events in lieu of school coordinator
                </>
              }
            />
            <ExperienceCard
              image={DPSRKPLogo}
              title="President"
              organization="Student Council, Delhi Public School"
              address="R. K. Puram, New Delhi, India"
              alternateTitle="President, Student Council"
              duration="April 2018 - April 2019"
              details={
                <>
                  • Oversaw student discipline and adherence to code of conduct
                  <br />
                  • Represented the students’ interests in administrative meetings
                  <br />
                  • Liaised between students, faculty, and administration
                  <br />• Supervised the student-run events in lieu of school coordinator
                </>
              }
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Experience;
