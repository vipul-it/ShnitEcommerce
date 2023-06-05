// tailwind.config.js
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    //  "/src/component/Common.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Thin: ['Roboto-Thin'],
        ExtraLight: ['Roboto-ExtraLight'],
        Light: ['Roboto-Light'],
        Normal: ['Roboto-Regular'],
        Medium: ['Roboto-Medium'],
        SemiBold: ['Roboto-SemiBold'],
        Bold: ['Roboto-Bold'],
        ExtraBold: ['Roboto-ExtraBold'],
        Black: ['Roboto-Black'],
      },
      colors: {
        theme: '#1AAABC',
        ptext: '#364670',
        ltheme: '#E0F8F6',
        atext: '#494949',
        btext: '#A4A4A4',
        blackc: '#000000',
        whitec: '#ffffff',
        pinkc: '#DA35A0',
        stext: '#6E878B',
        bgtext: '#C4C4C4',
        htext: '#333333', 
      },
    },
  },
  plugins: [],
};
