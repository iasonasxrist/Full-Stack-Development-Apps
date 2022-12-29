// eslint-disable-next-line
import { Container, Col, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import githubIcon from '../assets/img/github-icon.svg';

export const Footer = () => {

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />

                    <Col sm={6}>
                        <img src={logo} alt="something" />
                        <div className="social-icon">
                            <a href="https://github.com/iasonasxrist/"><img src={githubIcon} alt="something" width="16" height="16" /></a>
                            <a href="#https://www.linkedin.com/in/iasonaschristoulakis-45671316a/"><img src={navIcon1} alt="something" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100003904368817"><img src={navIcon2} alt="something" /></a>
                        </div>
                        <p>Copyright 2022. All Right Reserved</p>

                    </Col>
                </Row>
            </Container>
        </footer >
    )
}