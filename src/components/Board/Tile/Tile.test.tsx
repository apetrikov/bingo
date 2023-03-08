import React from 'react';
import {render, screen} from '@testing-library/react';
import {Tile} from './';

test('renders learn react link', () => {
    const text = 'test'
    render(<Tile text={text} id={1}/>);
    const linkElement = screen.getByText(text);
    expect(linkElement).toBeInTheDocument();
});
