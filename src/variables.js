const breakpoints = { sp: 600,  pc:1200 }

const mq = Object.keys(breakpoints).reduce((obj, type) => {
  obj[type] = `@media (min-width: ${breakpoints[type]}px)`
  return obj
}, {})

const theme = {
  light: {
    primaryColor: '#222',
    bgColor: '#fff'
  },
  dark: {
    primaryColor: '#dee1e8',
    bgColor: '#161725'
  }
}

export { breakpoints, mq, theme };
