import React from 'react';
import { render, screen } from '@testing-library/react';
import { PostsPage } from './PostsPage';

test('renders learn react link', () => {
    render(<PostsPage />);
    const linkElement = screen.getByText(/Posts/i);
    expect(linkElement).toBeInTheDocument();
});
