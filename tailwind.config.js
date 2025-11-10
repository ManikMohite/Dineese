export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#FF4D4D",   // Vibrant red (Zomato style)
        accent: "#FF8A00",    // Orange highlight
        background: "#FFF7F5",
        surface: "#FFFFFF",
        textDark: "#1A1A1A",
        textLight: "#6B6B6B",
      },
      boxShadow: {
        card: "0px 8px 24px rgba(0,0,0,0.08)",
        cardHover: "0px 12px 36px rgba(0,0,0,0.14)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
