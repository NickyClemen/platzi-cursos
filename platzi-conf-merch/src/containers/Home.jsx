import React from 'react';
import { Helmet } from 'react-helmet'; /* react-helmet: Administrar metadatos para el SEO del sitio.
Se puede repetir el proceso en cada componente en el que se necesite. */

import Products from '../components/Products';

import initialState from '../initialState';

const Home = () => {
    const { products } = initialState;

    return (
        <>
            <Helmet>
                <title>PlatziConf Merch - Productos</title>

                {/* Meta para compartir el sitio en Twitter. */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@TU_USER" />
                <meta name="twitter:creator" content="@TU_USER" />
                <meta name="twitter:title" content="Platzi Conf Store" />
                <meta name="twitter:description" content="Platzi Conf Store" />
                <meta
                    name="twitter:image"
                    content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />

                {/* Meta para compartir el sitio en Facebook. */}
                <meta property="og:title" content="Platzi Conf Store" />
                <meta property="og:description" content="Platzi Conf Store" />
                <meta
                    property="og:image"
                    content="https://s3.amazonaws.com/gndx.dev/gndxdev.png"
                />

                <meta property="og:url" content="platzistore.xyz" />
                <meta property="og:site_name" content="Platzi Conf Store" />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="article" />
                <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
            </Helmet>

            <Products products={products} />
        </>
    );
};

export default Home;
