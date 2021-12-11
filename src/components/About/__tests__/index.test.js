import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

describe('About component', () => {
    //renders About baseline test
    it('renders', () => {
        render(<About />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        // render About snapshot test
        expect(asFragment()).toMatchSnapshot();
    });
})