import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import DiceIcon from '@/components/dice-icon';

describe('components/dice-icon.tsx', () => {
  it('renders an svg with class name and default color', () => {
    const { container } = render(<DiceIcon className="icon" />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('class', 'icon');
    expect(svg).toHaveAttribute('fill', '#000000');
  });

  it('renders an svg with custom color', () => {
    const { container } = render(
      <DiceIcon
        className="icon"
        color="#00ff00"
      />,
    );
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg).toHaveAttribute('fill', '#00ff00');
  });
});
