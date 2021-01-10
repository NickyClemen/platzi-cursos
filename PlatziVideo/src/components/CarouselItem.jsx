import React from 'react';

import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/icons-play.png';
import plusIcon from '../assets/static/icons-plus.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title} />
        <div className="carousel-item__details">
            <div>
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" />
            </div>
            <p className="carousel-item__details--title">{title}</p>
            <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
        </div>
    </div>
);

/* PropTyps ofrece una manera dinámica de verificar las propiedades que se les pasa a los componentes.
Se puede verificar el tipo de dato. Se pueden pasar por default o requeridos.
    npm install prop-types */
CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
};

export default CarouselItem;