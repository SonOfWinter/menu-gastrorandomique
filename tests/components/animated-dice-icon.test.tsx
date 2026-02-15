import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import AnimatedDiceIcon from '@/components/animated-dice-icon';

describe('components/animated-dice-icon.tsx', () => {
  it('renders an svg with class name and default color', () => {
    const { container } = render(<AnimatedDiceIcon className="spin" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('class', 'spin');
    expect(svg).toHaveAttribute('fill', '#000000');
  });

  it('renders an svg with custom color', () => {
    const { container } = render(
      <AnimatedDiceIcon
        className="spin"
        color="#ff0000"
      />,
    );
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('fill', '#ff0000');
  });
});
