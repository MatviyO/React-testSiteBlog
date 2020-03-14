import React, {Component} from 'react';
import {Container, Row, Col, Media, Card , ListGroup} from "react-bootstrap";

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Media  className="m-5">
                            <img width={150} height={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" className="mr-3"/>
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi, architecto corporis cupiditate iusto neque nisi quidem ratione sit!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media  className="m-5">
                            <img width={150} height={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" className="mr-3"/>
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi, architecto corporis cupiditate iusto neque nisi quidem ratione sit!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media  className="m-5">
                            <img width={150} height={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" className="mr-3"/>
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi, architecto corporis cupiditate iusto neque nisi quidem ratione sit!
                                </p>
                            </Media.Body>
                        </Media>
                        <Media  className="m-5">
                            <img width={150} height={150} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" className="mr-3"/>
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet animi, architecto corporis cupiditate iusto neque nisi quidem ratione sit!
                                </p>
                            </Media.Body>
                        </Media>

                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/css</ListGroup.Item>
                                <ListGroup.Item>Javascript</ListGroup.Item>
                                <ListGroup.Item>Asp Net Core</ListGroup.Item>
                                <ListGroup.Item>Angular</ListGroup.Item>

                            </ListGroup>
                        </Card>
                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Card widget</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo, quos?</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
