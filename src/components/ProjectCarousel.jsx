import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Projects from './Projects'

class ProjectCarousel extends Component {
    render() {
        return (
            <Carousel
            emulateTouch={true}
            >
                <div>
                    <img src="src/assets/background.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="src/assets/portrait.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <Projects />
                </div>
            </Carousel>
        );
    }
};

export default ProjectCarousel