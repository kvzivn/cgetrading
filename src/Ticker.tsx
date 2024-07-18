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
          proName: "FOREXCOM:SPXUSD",
          title: "S&P 500 Index",
        },
        {
          proName: "FOREXCOM:NSXUSD",
          title: "US 100 Cash CFD",
        },
        {
          proName: "FX_IDC:EURUSD",
          title: "EUR to USD",
        },
        {
          proName: "BITSTAMP:BTCUSD",
          title: "Bitcoin",
        },
        {
          proName: "BITSTAMP:ETHUSD",
          title: "Ethereum",
        },
        {
          description: "Gold",
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
