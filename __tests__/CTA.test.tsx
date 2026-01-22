import { render, screen } from '@testing-library/react';
import CTA from '../components/CTA';

describe('CTA component', () => {
  it('renders the "Book a Free Demo" link with the correct Calendly URL', () => {
    render(<CTA />);
    
    const demoLink = screen.getByRole('link', { name: /book a free demo/i });
    
    expect(demoLink).toBeInTheDocument();
    expect(demoLink).toHaveAttribute('href', 'https://calendly.com/');
    expect(demoLink).toHaveAttribute('target', '_blank');
    expect(demoLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
