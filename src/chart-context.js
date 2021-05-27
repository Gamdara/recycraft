import React, { createContext } from 'react'

const ChartContext = createContext({
    chart: {},
    setChart : () => {}
  })

export default ChartContext
