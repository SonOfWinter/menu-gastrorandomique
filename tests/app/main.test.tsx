import { describe, expect, it, vi, beforeEach, afterEach, beforeAll, afterAll } from 'vitest';
import {
  act,
  cleanup,
  render,
  fireEvent,
  screen,
  waitFor,
} from '@testing-library/react';
import Main from '@/app/main';
import { DEFAULT_THEME_PALETTE } from '@/types/enums/theme';
import { copyText } from '@/lib/client/copy-text';
import {
  THEMES_ENABLED_STORAGE_KEY,
} from '@/lib/client/theme-preference';
import { toast } from 'sonner';

vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

vi.mock('next/font/google', () => ({
  Bebas_Neue: () => ({ className: 'font-bebas' }),
  Manrope: () => ({ className: 'font-manrope' }),
}));

vi.mock('@/lib/client/copy-text', () => ({
  copyText: vi.fn().mockResolvedValue(undefined),
}));

const pressKey = (key: string) => {
  fireEvent.keyDown(window, { key });
};

const getSlider = () => screen.getByRole('slider', { name: 'Niveau d’absurdité' });
const getUrlParams = () => new URLSearchParams(window.location.search);
const menuResponse = () => Response.json({
  menu: {
    title: 'Menu partagé',
    complement: 'du chef',
    price: 42,
    theme: { nom: 'Sans thème', palette: DEFAULT_THEME_PALETTE },
    entree: [],
    plat: [],
    dessert: [],
  },
});

describe('app/main.tsx', () => {
  const scrollTo = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'scrollTo');

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
      configurable: true,
      value: vi.fn(),
    });
  });

  afterAll(() => {
    if (scrollTo) {
      Object.defineProperty(HTMLElement.prototype, 'scrollTo', scrollTo);
    } else {
      Reflect.deleteProperty(HTMLElement.prototype, 'scrollTo');
    }
  });

  beforeEach(() => {
    window.localStorage.clear();
    window.history.replaceState(null, '', '/');
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('toggles themes with the t keyboard shortcut and shows a toast', async () => {
    render(<Main />);

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 't' }));
    });

    await waitFor(() => {
      expect(window.localStorage.getItem(THEMES_ENABLED_STORAGE_KEY)).toBe('true');
    });
    expect(toast.success).toHaveBeenCalledWith('Thèmes activés');

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 't' }));
    });

    await waitFor(() => {
      expect(window.localStorage.getItem(THEMES_ENABLED_STORAGE_KEY)).toBe('false');
    });
    expect(toast.success).toHaveBeenCalledWith('Thèmes désactivés');
  });

  it('opens settings from home or with P and returns only with the close button', () => {
    render(<Main />);
    const settingsButton = () => screen.getByRole('button', { name: 'Paramètres' });

    const informationButton = screen.getByRole('button', { name: 'Informations' });
    expect(settingsButton().nextElementSibling).toBe(informationButton);
    expect(settingsButton().parentElement).toHaveClass('flex');
    expect(settingsButton().parentElement).not.toHaveClass('md:flex-col');

    fireEvent.click(settingsButton());
    expect(screen.getByRole('heading', { name: 'Paramètres' })).toHaveFocus();
    fireEvent.click(screen.getByRole('button', { name: 'Fermer les paramètres' }));
    expect(settingsButton()).toHaveFocus();

    pressKey('i');
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
    expect(screen.getByText('Voir la page paramètres')).toBeInTheDocument();
    expect(screen.queryByRole('slider')).toBeNull();

    pressKey('P');
    expect(getSlider()).toBeInTheDocument();
    pressKey('p');
    expect(getSlider()).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Fermer les paramètres' }));
    expect(screen.getByRole('heading', { name: 'Informations' })).toHaveFocus();
  });

  it('returns to the same menu side and scroll position from settings', async () => {
    const fetchMenu = vi.fn(async () => menuResponse());
    vi.stubGlobal('fetch', fetchMenu);
    render(<Main />);
    const settingsButton = () => screen.getByRole('button', { name: 'Paramètres' });

    for (const sideClass of [
      'md:translate-x-[calc(100%-60px)]',
      'md:-translate-x-[calc(100%-60px)]',
    ]) {
      pressKey('r');
      pressKey('p');
      expect(screen.queryByRole('heading', { name: 'Paramètres' })).toBeNull();
      expect(screen.queryByRole('button', { name: 'Paramètres' })).toBeNull();

      const gear = await screen.findByRole('button', { name: 'Paramètres' });
      const title = screen.getByRole('heading', { name: 'Menu partagé' });
      const menuSection = title.closest('section')!;
      const navSection = gear.closest('section');
      expect(navSection).toHaveClass(sideClass);
      menuSection.scrollTop = 175;
      const menuUrl = window.location.href;

      fireEvent.click(settingsButton());
      expect(screen.queryByRole('heading', { name: 'Menu partagé' })).toBeNull();
      expect(menuSection.scrollTop).toBe(0);
      fireEvent.click(screen.getByRole('button', { name: 'Fermer les paramètres' }));

      expect(screen.getByRole('heading', { name: 'Menu partagé' })).toBeInTheDocument();
      expect(navSection).toHaveClass(sideClass);
      expect(menuSection.scrollTop).toBe(175);
      expect(settingsButton()).toHaveFocus();
      expect(window.location.href).toBe(menuUrl);
    }

    expect(fetchMenu).toHaveBeenCalledTimes(2);
  });

  it('places the slider after themes and remembers the value on remount without rolling', () => {
    const fetchMenu = vi.fn();
    vi.stubGlobal('fetch', fetchMenu);
    const { unmount } = render(<Main />);
    pressKey('p');

    const slider = getSlider();
    const themeButton = screen.getByRole('button', { name: 'Thèmes' });
    expect(themeButton.compareDocumentPosition(slider) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(slider).toHaveAttribute('min', '0');
    expect(slider).toHaveAttribute('max', '20');
    expect(slider).toHaveAttribute('step', '1');
    expect(slider).toHaveValue('0');
    const handle = screen.getByText('0 / 20').parentElement;
    expect(handle).toHaveClass('border-white', 'bg-transparent', 'text-white');
    const hint = screen.getByText('Plus le niveau est élevé, plus le tirage peut ignorer certaines règles de compatibilité.');
    expect(screen.getByText('Niveau d’absurdité').nextElementSibling).toBe(hint);
    expect(slider).toHaveAccessibleDescription(hint.textContent);

    expect(screen.getAllByRole('slider')).toHaveLength(1);
    fireEvent.change(slider, { target: { value: '17' } });
    expect(slider).toHaveValue('17');
    expect(handle).toHaveClass('bg-white', 'text-primary');
    expect(screen.getByText('17 / 20')).toHaveAttribute('class', expect.stringContaining('invisible'));
    expect(fetchMenu).not.toHaveBeenCalled();
    expect(window.location.search).toBe('');

    unmount();
    render(<Main />);
    pressKey('p');
    expect(getSlider()).toHaveValue('17');
  });

  it('retries the shared settings and uses local settings for subsequent rolls', async () => {
    window.history.replaceState(null, '', '/?seed=0&inconsistentLevel=20&themes=0');
    window.localStorage.setItem(THEMES_ENABLED_STORAGE_KEY, 'true');
    const fetchMenu = vi.fn()
      .mockResolvedValueOnce(new Response(null, { status: 429 }))
      .mockImplementation(async () => menuResponse());
    vi.stubGlobal('fetch', fetchMenu);
    render(<Main />);
    pressKey('p');
    fireEvent.change(getSlider(), { target: { value: '9' } });

    pressKey('r');
    await waitFor(() => expect(toast.error).toHaveBeenCalled());
    expect(window.location.search).toBe('?seed=0&inconsistentLevel=20&themes=0');

    pressKey('r');
    await screen.findByText('Menu partagé');
    expect(fetchMenu.mock.calls.slice(0, 2)).toEqual([
      ['/generate?seed=0&inconsistentLevel=20&themes=0'],
      ['/generate?seed=0&inconsistentLevel=20&themes=0'],
    ]);

    pressKey('p');
    expect(getSlider()).toHaveValue('9');
    expect(screen.getByRole('button', { name: 'Thèmes', pressed: true })).toBeInTheDocument();
    fireEvent.change(getSlider(), { target: { value: '10' } });
    expect(fetchMenu).toHaveBeenCalledTimes(2);
    pressKey('m');
    fireEvent.click(screen.getByRole('button', { name: 'Partager' }));
    expect(copyText).toHaveBeenCalledWith(expect.stringContaining('?seed=0&inconsistentLevel=20&themes=0'));

    pressKey('r');
    await waitFor(() => expect(getUrlParams().get('inconsistentLevel')).toBe('10'));
    expect(fetchMenu).toHaveBeenLastCalledWith(`/generate?${getUrlParams()}`);
    expect(getUrlParams().get('themes')).toBe('1');
  });

  it.each([
    ['?seed=42', '0'],
    ['?seed=42&inconsistentLevel=99&themes=invalid', '0'],
    ['?inconsistentLevel=20&themes=0', '7'],
  ])('uses the correct fallback preferences for %s', async (query, level) => {
    window.history.replaceState(null, '', `/${query}`);
    window.localStorage.setItem(THEMES_ENABLED_STORAGE_KEY, 'true');
    const fetchMenu = vi.fn(async () => menuResponse());
    vi.stubGlobal('fetch', fetchMenu);
    render(<Main />);
    pressKey('p');
    fireEvent.change(getSlider(), { target: { value: '7' } });

    pressKey('r');
    await screen.findByText('Menu partagé');
    expect(getUrlParams().get('inconsistentLevel')).toBe(level);
    expect(getUrlParams().get('themes')).toBe('1');
    if (query.startsWith('?seed=42')) {
      expect(getUrlParams().get('seed')).toBe('42');
    }
  });
});
