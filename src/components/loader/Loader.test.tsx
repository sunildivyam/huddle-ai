import React from 'react';
import { render, screen } from '@testing-library/react';
import { Loader } from './Loader';

test('renders learn react link', () => {
    render(<Loader loading={true}/>);
    const linkElement = screen.getByText(/Loader/i);
    expect(linkElement).toBeInTheDocument();
});
