import React from 'react';
import { render, screen } from '@testing-library/react';
import { Comment } from './Comment';

test('renders learn react link', () => {
    render(<Comment />);
    const linkElement = screen.getByText(/Comment/i);
    expect(linkElement).toBeInTheDocument();
});
