const breakpoints = { sp: 600,  pc:1200 }

const mq = Object.keys(breakpoints).reduce((obj, type) => {
  obj[type] = `@media (min-width: ${breakpoints[type]}px)`
  return obj
}, {})

export { breakpoints, mq }
