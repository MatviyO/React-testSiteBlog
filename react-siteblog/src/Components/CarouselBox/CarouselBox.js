import React, {Component} from 'react';
import Carousel from "react-bootstrap/Carousel";
import forest1 from '../../assets/1.jpg';
import forest2 from '../../assets/2.jpg';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={forest1} alt="forest1"/>
                    <Carousel.Caption><h3>Forest image1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam aut blanditiis cum
                            cupiditate doloremque eaque eveniet expedita illum laudantium mollitia necessitatibus neque
                            nostrum, obcaecati quasi qui quis, quod ullam.</p></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={forest2} alt="forest1"/>
                    <Carousel.Caption><h3>Forest image2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam aut blanditiis cum
                            cupiditate doloremque eaque eveniet expedita illum laudantium mollitia necessitatibus neque
                            nostrum, obcaecati quasi qui quis, quod ullam.</p></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={forest1} alt="forest1"/>
                    <Carousel.Caption><h3>Forest image1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aperiam aut blanditiis cum
                            cupiditate doloremque eaque eveniet expedita illum laudantium mollitia necessitatibus neque
                            nostrum, obcaecati quasi qui quis, quod ullam.</p></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
