import React from 'react';

import { mount } from 'enzyme';

import { create } from 'react-test-renderer';

import Footer from '../../components/Footer';
// Una suite es una serie de pruebas.

describe('<Footer />', () => {
    const footer = mount(<Footer />);

    test('render footer component', () => {
        expect(footer.length).toEqual(1);
    });

    test('footer have three anchors', () => {
        expect(footer.find('a')).toHaveLength(3);
    });

    test('footer snapshot', () => {
        const footer = create(<Footer />);
        expect(footer.toJSON()).toMatchSnapshot();
    });
}); /* Palabra reservada.
Recibe una descripción de lo que se va a probar, y una función anónima. */
