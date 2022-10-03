module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      'sans':['"Italianno"','cursive']
    },
    extend: {
      backgroundImage: {
        heart: "url('img/hearthand2.jpg')",
        navBar: "url('img/ekgg.png')",
      },
      invert: {
        25: ".25",
        50: ".5",
        75: ".75",
      },
      saturate: {
        25: ".25",
        75: ".75",
        4915: ".4915",
      },
      shadowInset: {
        shadowInset:
          "inset 0 0 30px rgba(187,247,208,12), 0 0 10px 2px rgba(0,0,0,0.6)",
        shadowBox: "0 0 200px  rgba(0,0,0,0.6)",
      },

      keyframes: {
        x: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(420px)" },
        },
        cog: {
          "100%": { transform: "rotate(360deg)" },
        },

        sun1: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },

      },
        sun2: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        sun3: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },

        sun4: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },

        sun5: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },

        sun6: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },

        navBarOpen:{
          "0%": { left:"-100px" },
          "100%": { left:"0"},

        },
        nameShow:{
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },

        blur: {
          "0%": { filter: "blur(70px)" },
          "100%": { filter: "blur(0px)" },
        },
        hide: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        hoverColor: {
          "0%": {},
          "100%": { backgroundColor: "rgba(187,247,208,0.3)"  },
        },
        hoverShadow: {
          "0%": { boxShadow: "0 0 20px 10px rgba(0,0,0,0.6)" },
          "100%": { boxShadow: "0 0 20px 10px rgba(255,250,255,0.6)",},
        },
        hoverShadowSecondary: {
          "0%": { boxShadow: "0 0 20px 10px rgba(0,0,0,0.6)" },
          "100%": { boxShadow: "0 0 20px 10px rgba(253, 227, 167,0.2)" },
        },
        heartBeat: {
          "0%": { transform: "scale(1) rotate(45deg)" },
          "20%": { transform: "scale(1) rotate(45deg)" },
          "40%": { transform: "scale(1.2) rotate(45deg)" },
          "60%": { transform: "scale(1.1) rotate(45deg)" },
          "80%": { transform: "scale(1.2) rotate(45deg)" },
          "100%": { transform: "scale(1.) rotate(45deg)" },
        },
      },
      animation: {
        "ping-slow1": "ping 5.1s 2.2s linear infinite",
        "ping-slow2": "ping 5.1s 2.2s linear infinite",
        "ping-slow3": "ping 5.1s 2.2s linear infinite",
        "ping-slow4": "ping 5.1s 2.2s linear infinite",
        "ping-slow5": "ping 5.1s 2.2s linear infinite",
        "ping-slow6": "ping 5.1s 2.2s linear infinite",
        "ping-slow7": "ping 5.1s 2.2s linear infinite",
        "ping-slow8": "ping 5.1s 2.2s linear infinite",
        move: "x 4s 1s linear infinite",
        moveSec: "x s  linear infinite ",
        cogAnimation: "cog 6s linear infinite",
        cogAnimationReverse: "cog 6s linear infinite reverse",
        sun1: "sun1 1.5s 1.5s linear forwards ",
        sun2: "sun2 1.5s 1.8s linear forwards",
        sun3: "sun3 1.5s 2.1s  linear forwards",
        sun4: "sun4 1.5s 2.4s  linear forwards",
        sun5: "sun5 1.5s 2.7s  linear forwards",
        sun6: "sun6 1.5s 3s   linear forwards",
        blur: "blur 1.3s linear ",
        hide: "hide 2s linear",
        hoverColor: "hoverColor 0.16s linear forwards",
        hoverShadow: "hoverShadow 0.15s linear forwards",
        heartBeat: "heartBeat 7s  linear infinite",
        hoverShadowSecondary: "hoverShadowSecondary 0.15s linear forwards",
        navBarOpen: "navBarOpen 3s 1s linear forwards",
        nameShow:"nameShow 2s 4s linear forwards"
      },
    },
  },
  plugins: [],
};
