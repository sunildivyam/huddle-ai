import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';

test('renders learn react link', () => {
    render(<UserProfile />);
    const linkElement = screen.getByText(/User Profile/i);
    expect(linkElement).toBeInTheDocument();
});
