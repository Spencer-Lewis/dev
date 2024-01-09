import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class ProjectCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="src/assets/background.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="src/assets/portrait.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        );
    }
};

export default ProjectCarousel