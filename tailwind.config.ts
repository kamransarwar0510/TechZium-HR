import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },

      /* 🤎 FULL BROWN SHADE SYSTEM */
      colors: {
        background: "#1C120D", // dark espresso
        foreground: "#F5ECE3", // soft cream

        border: "#3B2A22",
        input: "#3B2A22",
        ring: "#A47148", // caramel glow

        primary: {
          DEFAULT: "#8B5E3C", // warm mocha
          foreground: "#FFFFFF",
        },

        secondary: {
          DEFAULT: "#3B2A22",
          foreground: "#EADDD2",
        },

        accent: {
          DEFAULT: "#A47148", // caramel
          foreground: "#1C120D",
        },

        muted: {
          DEFAULT: "#4A342A",
          foreground: "#CBB6A8",
        },

        destructive: {
          DEFAULT: "#7A2E1E", // dark brick (still brownish)
          foreground: "#FFFFFF",
        },

        card: {
          DEFAULT: "#241711", // dark chocolate
          foreground: "#F5ECE3",
        },

        popover: {
          DEFAULT: "#241711",
          foreground: "#F5ECE3",
        },

        highlight: {
          DEFAULT: "#C08A5D", // light caramel
          light: "#D9A77A",
        },

        sidebar: {
          DEFAULT: "#140D09",
          foreground: "#F5ECE3",
          primary: "#8B5E3C",
          "primary-foreground": "#FFFFFF",
          accent: "#A47148",
          "accent-foreground": "#1C120D",
          border: "#3B2A22",
          ring: "#C08A5D",
        },
      },

      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(25px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
