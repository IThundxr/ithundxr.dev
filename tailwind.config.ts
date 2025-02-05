import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        container: {
            padding: "1rem",
        },
        extend: {
            colors: {
                background: "var(--background-color)",
                foreground: "var(--foreground-color)",
                element: "var(--element-color)",
                elementBorder: "var(--element-border-color)",
                elementHover: "var(--element-hover-color)",
                elementAccent: "var(--element-accent-color)",
                elementAccentBorder: "var(--element-accent-border-color)",
                elementAccentHover: "var(--element-accent-hover-color)",
                primary: "var(--text-primary-color)",
                secondary: "var(--text-secondary-color)",
                shadow: "var(--shadow-color)",
                highlight: "var(--highlight-color)",
            },
            borderRadius: {
                lg: "var(--default-border-radius)",
                md: "calc(var(--default-border-radius) - 2px)",
                sm: "calc(var(--default-border-radius) - 4px)",
            },
        },
    },
    plugins: [],
} satisfies Config;
