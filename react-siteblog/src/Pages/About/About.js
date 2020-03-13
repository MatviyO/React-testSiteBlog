import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-rabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Design
                                    </Nav.Link>
                                    <Nav.Link eventKey="second">
                                        Team
                                    </Nav.Link>
                                    <Nav.Link eventKey="third">
                                        Programing
                                    </Nav.Link>
                                    <Nav.Link eventKey="fourth">
                                        Frameworks
                                    </Nav.Link>
                                    <Nav.Link eventKey="fifth">
                                        Libraries
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://i.pinimg.com/originals/0e/3c/30/0e3c30413716a3d66cb30735e7e10d75.png" alt=""/>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus earum hic inventore neque quisquam sint. Consectetur, cupiditate delectus eum ipsum odio perferendis quia sapiente.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://static2.clutch.co/s3fs-public/software-development-team-1.jpg" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus earum hic inventore neque quisquam sint. Consectetur, cupiditate delectus eum ipsum odio perferendis quia sapiente.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://previews.123rf.com/images/gudella/gudella0805/gudella080500268/3091347-computer-programing-source-code-on-blue-electronics-background.jpg" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus earum hic inventore neque quisquam sint. Consectetur, cupiditate delectus eum ipsum odio perferendis quia sapiente.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://i.morioh.com/990d21e6a2.png" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus earum hic inventore neque quisquam sint. Consectetur, cupiditate delectus eum ipsum odio perferendis quia sapiente.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://data-flair.training/blogs/wp-content/uploads/sites/2/2019/07/JavaScript-Libraries1.jpg" alt=""/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, ducimus earum hic inventore neque quisquam sint. Consectetur, cupiditate delectus eum ipsum odio perferendis quia sapiente.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
