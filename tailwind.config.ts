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
                    sans: ['STIX Two Text', 'serif'],
               },
               colors: {
                    background: "var(--background)",
                    foreground: "var(--foreground)",
               },
               typography: {
                    DEFAULT: {
                         css: {
                              color: '#22c55e', // text-green-500
                              a: {
                                   color: '#4ade80', // text-green-400
                                   '&:hover': {
                                        color: '#86efac', // text-green-300
                                   },
                              },
                              h1: {
                                   color: '#86efac', // text-green-300
                              },
                              h2: {
                                   color: '#86efac', // text-green-300
                              },
                              h3: {
                                   color: '#86efac', // text-green-300
                              },
                              h4: {
                                   color: '#86efac', // text-green-300
                              },
                              blockquote: {
                                   color: '#4ade80', // text-green-400
                                   borderLeftColor: '#22c55e', // text-green-500
                              },
                              code: {
                                   color: '#86efac', // text-green-300
                              },
                              pre: {
                                   backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                   color: '#86efac', // text-green-300
                              },
                         },
                    },
               },
          },
     },
     plugins: [
          require('@tailwindcss/typography'),
     ],
} satisfies Config;
