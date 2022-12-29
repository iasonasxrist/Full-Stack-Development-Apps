import { Nav, Container, Row, Col, Tab } from 'react-bootstrap';
import React from 'react'
import { ProjectCards } from './ProjectCards';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css';

export const Projects = () => {

    const projects = [
        {
            title: 'Hospital App',
            description: "Full Stack Development",
            imgUrl: projImg1,
        },
        {
            title: 'Hospital App',
            description: "Full Stack Development",
            imgUrl: projImg2,
        },
        {
            title: 'Hospital App',
            description: "Full Stack Development",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </p>
                                </div>}

                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="second">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first" >Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >Tab Three </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCards
                                                    key={index}
                                                    {...project} />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Loren Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Loren Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section >

    )
}
