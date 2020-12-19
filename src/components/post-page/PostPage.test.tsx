import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostPage } from './PostPage';

test('renders learn react link', () => {
    render(<PostPage />);
    const linkElement = screen.getByText(/Posts/i);
    expect(linkElement).toBeInTheDocument();
});
