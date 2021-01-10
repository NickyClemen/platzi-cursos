import React, { Fragment } from 'react';

import { connect } from 'react-redux';

import Search from '../components/Search';

import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
    return (
        <Fragment>
            <Search />

            {
                myList.length > 0 &&
                <Categories title="Mi lista">
                    <Carousel>
                        {
                            myList.map(item => <CarouselItem key={ item.id } { ...item } />)
                        }
                    </Carousel>
                </Categories>
            }

            <Categories title="Tendencias">
                <Carousel>
                    {
                        trends.map(item => <CarouselItem key={ item.id } { ...item } />)
                    }
                </Carousel>
            </Categories>

            <Categories title="Originales de PlatziVideo">
                <Carousel>
                {
                    originals.map(item => <CarouselItem key={ item.id } { ...item } />)
                }
                </Carousel>
            </Categories>
        </Fragment>
    );
};

const mapStateToProps = state => {
    return {
        myList: state.myList,
        trends: state.trends,
        originals: state.originals,
    };
};

export default connect(mapStateToProps, null)(Home);
/* mapStateToProps propiedades que se le pasan al componente. Se traen solamente los elementos que se necesiten.
dispath elementos que se vana usar por medio de los actions (acciones que se van a ejecutar). */
