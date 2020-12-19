import React from 'react';
import { render, screen } from '@testing-library/react';
import { Post } from './Post';

test('renders learn react link', () => {
    render(<Post />);
    const linkElement = screen.getByText(/Posts/i);
    expect(linkElement).toBeInTheDocument();
});
