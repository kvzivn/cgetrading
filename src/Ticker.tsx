import React, { useEffect, useRef } from "react"

const Ticker: React.FC = () => {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
    script.type = "text/javascript"
    script.async = true

    const widgetConfig = {
      symbols: [
        {
          description: "EUR/USD",
          proName: "ICMARKETS:EURUSD",
        },
        {
          description: "USD/JPY",
          proName: "ICMARKETS:USDJPY",
        },
        {
          description: "GBP/USD",
          proName: "ICMARKETS:GBPUSD",
        },
        {
          description: "AUD/USD",
          proName: "ICMARKETS:AUDUSD",
        },
        {
          description: "USD/CAD",
          proName: "ICMARKETS:USDCAD",
        },
        {
          description: "USD/CHF",
          proName: "ICMARKETS:USDCHF",
        },
        {
          description: "NZD/USD",
          proName: "ICMARKETS:NZDUSD",
        },
        {
          description: "XAU/USD",
          proName: "ICMARKETS:XAUUSD",
        },
      ],
      showSymbolLogo: true,
      isTransparent: false,
      displayMode: "adaptive",
      colorTheme: "dark",
      locale: "en",
    }

    script.textContent = JSON.stringify(widgetConfig)

    if (container.current) {
      container.current.innerHTML = ""
      container.current.appendChild(script)
    }

    return () => {
      if (container.current) {
        container.current.innerHTML = ""
      }
    }
  }, [])

  return <div ref={container}></div>
}

export default Ticker
