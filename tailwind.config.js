module.exports = {
  purge: {
    enabled: false,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          10 : "#CCCCCC",
          20: "#F6F6F6",
         
        },
        dark : {
          10: "#363636",
          20: "#555555",
        },
        purple: {
          10: "#85318B",
          20: "#914697"
        },
        green: {
          10 : "#25B34B"
        },
        red: {
          10 : "#ED1C24"
        },
        blue: {
          10: "#0083CA"
       
        },
        yellow: {
          10: "#E8DA48",
          20: "#E6D634"
        }
      },
      maxWidth:  {
        "1468px" : "1468px"
      },
      dropShadow: {
        '10': "0px 2px 4px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
    
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
