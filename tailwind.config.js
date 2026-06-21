/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],

  theme: {
    extend: {

      colors: {
        background: "#0F172A",
        primary: "#8B5CF6",
        secondary: "#3B82F6",
        surface: "#111827",
        text: "#F8FAFC",
        muted: "#94A3B8"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"]
      },

      boxShadow: {
        glow: "0 0 40px rgba(139,92,246,0.35)"
      },

      animation: {
        blob: "blob 12s infinite",
        float: "float 6s ease-in-out infinite"
      },

      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)"
          },
          "33%": {
            transform: "translate(40px,-60px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-30px,20px) scale(0.95)"
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)"
          }
        },

        float: {
          "0%,100%": {
            transform: "translateY(0px)"
          },

          "50%": {
            transform: "translateY(-10px)"
          }
        }
      }
    }
  },

  plugins: []
};