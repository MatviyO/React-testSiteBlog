import React, {Component} from 'react';
import  {Container ,Form} from "react-bootstrap";
export default class Contacts extends Component {
    render() {
        return (
            <div>
                <Container>
                    <h1>Contact us</h1>
                    <Form>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text>
                                Well never share your email with anyone else
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        )
    }
}
