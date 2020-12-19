import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserProfilePage } from './UserProfilePage';

test('renders learn react link', () => {
    render(<UserProfilePage />);
    const linkElement = screen.getByText(/User Profile Page/i);
    expect(linkElement).toBeInTheDocument();
});
