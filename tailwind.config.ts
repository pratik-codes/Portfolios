import type { Config } from "tailwindcss";

export default {
     content: [
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
     ],
     theme: {
          extend: {
               fontFamily: {
                    mono: ['JetBrains Mono', 'monospace'], // Add JetBrains Mono as the primary monospace font
               },
               colors: {
                    background: "var(--background)",
                    foreground: "var(--foreground)",
                    terminal: {
                         green: {
                              DEFAULT: "var(--primary-green)",
                              dark: "var(--secondary-green)",
                              light: "#4eff4e",
                              glow: "rgba(0, 255, 0, 0.5)",
                         },
                         black: "#000e00",
                         gray: "#ededed",
                    },
               },
               boxShadow: {
                    'terminal': 'var(--terminal-glow)',
                    'terminal-hover': '0 0 15px rgba(0, 255, 0, 0.7)',
               },
               animation: {
                    'terminal-blink': 'blink 1s step-end infinite',
                    'terminal-pulse': 'terminal-pulse 4s ease infinite',
               },
          },
     },
     plugins: [],
} satisfies Config;
