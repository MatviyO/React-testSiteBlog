import React, {Component} from 'react';
import CarouselBox from "../../Components/CarouselBox/CarouselBox";
import {CardDeck, Container, Card, Button} from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Container>
                    <h2 className="text-center m-4">Our team</h2>
                    <CardDeck className="m-4">
                        <Card>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque ea excepturi facere ipsum laboriosam molestiae molestias numquam odio possimus quidem quod repellat repudiandae, suscipit veritatis? Mollitia sint sunt velit?</Card.Text>
                                <Button variant="primary" >About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="bottom" src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque ea excepturi facere ipsum laboriosam molestiae molestias numquam odio possimus quidem quod repellat repudiandae, suscipit veritatis? Mollitia sint sunt velit?</Card.Text>
                                <Button variant="primary" >About team</Button>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur cumque ea excepturi facere ipsum laboriosam molestiae molestias numquam odio possimus quidem quod repellat repudiandae, suscipit veritatis? Mollitia sint sunt velit?</Card.Text>
                                <Button variant="primary" >About team</Button>
                            </Card.Body>
                        </Card>


                    </CardDeck>
                </Container>
            </>
        )
    }
}
