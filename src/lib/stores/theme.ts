import {writable} from 'svelte/store';
import {browser} from '$app/environment';

type Theme = 'dark' | 'light';

function createThemeStore() {
    const {subscribe, set, update} = writable<Theme>('dark');

    return {
        subscribe,
        initialize: () => {
            if (browser) {
                const savedTheme = localStorage.getItem('theme') as Theme | null;
                if (savedTheme) {
                    set(savedTheme);
                } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                    set('light');
                }
            }
        },
        toggle: () => {
            update((current) => {
                const newTheme = current === 'dark' ? 'light' : 'dark';
                if (browser) {
                    localStorage.setItem('theme', newTheme);
                    document.documentElement.classList.remove('light', 'dark');
                    document.documentElement.classList.add(newTheme);
                }
                return newTheme;
            });
        },
        set: (theme: Theme) => {
            if (browser) {
                localStorage.setItem('theme', theme);
                document.documentElement.classList.remove('light', 'dark');
                document.documentElement.classList.add(theme);
            }
            set(theme);
        }
    };
}

export const theme = createThemeStore();
