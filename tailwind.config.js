/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0a0f1c",
        panel: "#0f1626",
        panel2: "#131c30",
        line: "#1e293f",
        azure: "#3b82f6",
        azureSoft: "#60a5fa",
        gold: "#f5c542",
        goldSoft: "#fbd96b",
        mute: "#8a99b5",
      },
      fontFamily: {
        display: ['"Sora"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -12px rgba(59,130,246,0.45)",
        gold: "0 0 36px -14px rgba(245,197,66,0.5)",
      },
    },
  },
  plugins: [],
};
