import React from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faBehanceSquare,
  faFacebookSquare,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.addEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "load",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
    window.removeEventListener(
      "resize",
      () => {
        this.setState({
          isMobileView: window.innerWidth < 800,
        });
      },
      false
    );
  }
  render() {
    const smallViewArray = this.state.isMobileView
      ? ["", "", "", "", "", ""]
      : ["Github", "Behance", "LinkedIn", "Facebook", "Instagram", "Youtube"];
    return (
      <Navbar
        style={{
          backgroundColor: "#222222",
          position: "sticky",
          bottom: 0,
          zIndex: 2000,
        }}
        variant="dark"
      >
        <Nav className="mx-auto">
          <Nav.Link href="https://github.com/AVS1508" target="_blank">
            <FontAwesomeIcon icon={faGithubSquare} /> {smallViewArray[0]}
          </Nav.Link>
          <Nav.Link href="https://www.behance.net/AVS1508" target="_blank">
            <FontAwesomeIcon icon={faBehanceSquare} /> {smallViewArray[1]}
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/avs1508" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} /> {smallViewArray[2]}
          </Nav.Link>
          <Nav.Link href="https://www.facebook.com/AVS1508" target="_blank">
            <FontAwesomeIcon icon={faFacebookSquare} /> {smallViewArray[3]}
          </Nav.Link>
          <Nav.Link href="https://www.instagram.com/adityavs_/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} /> {smallViewArray[4]}
          </Nav.Link>
          <Nav.Link
            href="https://www.youtube.com/channel/UCOrl4Ba4pJBDUHzDvX4GFiQ"
            target="_blank"
          >
            <FontAwesomeIcon icon={faYoutube} /> {smallViewArray[5]}
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Footer;
