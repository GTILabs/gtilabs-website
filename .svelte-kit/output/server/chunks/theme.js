import {w as writable} from "./index.js";

function createThemeStore() {
    const {subscribe, set, update} = writable("dark");
    return {
        subscribe,
        initialize: () => {
        },
        toggle: () => {
            update((current) => {
                const newTheme = current === "dark" ? "light" : "dark";
                return newTheme;
            });
        },
        set: (theme2) => {
            set(theme2);
        }
    };
}

createThemeStore();
