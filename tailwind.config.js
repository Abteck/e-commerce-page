/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "375px",
      },
      colors: {
        //  Primary
        Orange: "hsl(26, 100%, 55%)",
        "Pale-orange": "hsl(25, 100%, 94%)",

        //  Neutral
        "Very-dark-blue": "hsl(220, 13%, 13%)",
        "Dark-grayish-blue": "hsl(219, 9%, 45%)",
        "Grayish-blue": "hsl(220, 14%, 75%)",
        "Light-grayish-blue": "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black: "hsl(0, 0%, 0%)", // (with 75% opacity for lightbox background)
      },
      fontFamily: {
        "Kumbh-Sans": "'Kumbh Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
