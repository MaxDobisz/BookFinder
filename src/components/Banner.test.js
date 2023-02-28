import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Banner } from './Banner';

test('show title', () => {
    render(<Banner />)
    const title = screen.getByRole('heading', { name: /book search/i });
    expect(title).toBeInTheDocument();
});