import React from 'react';

import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
    <div className="carousel-item">
        <img className="carousel-item__img" src="https://images.pexels.com/photos/2305765/pexels-photo-2305765.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="IPhone" />

        <div className="carousel-items__details">
            <div>
                <img src="./img/icons-play.png" alt="" />
                <img src="./img/icons-plus.png" alt="" />
            </div>

            <p className="carousel-items__details--title">Título descriptivo</p>
            <p className="carousel-items__details--subtitle">2019 16+ 114 minutos</p>
        </div>
    </div>
);

export default CarouselItem;