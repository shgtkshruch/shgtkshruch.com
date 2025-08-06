const breakpoints = { sp: 600, pc: 1200 };

type MQ = {
  sp?: string;
  pc?: string;
};

const mq: MQ = Object.keys(breakpoints).reduce((obj, type) => {
  obj[type as keyof typeof breakpoints] =
    `@media (min-width: ${breakpoints[type as keyof typeof breakpoints]}px)`;
  return obj;
}, {} as MQ);

const theme = {
  light: {
    primaryColor: "#222",
    bgColor: "#fff",
    accentColor: "red",
  },
  dark: {
    primaryColor: "#dee1e8",
    bgColor: "#161725",
    accentColor: "#ef40b8",
  },
};

export { breakpoints, mq, theme };
