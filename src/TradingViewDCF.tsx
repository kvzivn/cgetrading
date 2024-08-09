import React, { useEffect, useRef } from "react"

declare global {
  interface Window {
    TradingView: {
      chart: new (config: any) => any
    }
  }
}

const TradingViewDCF: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://s3.tradingview.com/tv.js"
    script.async = true
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.chart({
          container_id: "tradingview_chart_dcf",
          chart: "l2KwpTTE",
          autosize: true,
        })
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="relative h-96">
      <div className="absolute top-0 z-10 left-1/2 -translate-x-1/2 w-full h-[4px] bg-[#150D23]" />
      <div className="absolute bottom-0 z-10 left-1/2 -translate-x-1/2 w-full h-[23px] bg-[#150D23]" />
      <div className="absolute bottom-0 z-10 left-0 w-[4px] h-96 bg-[#150D23]" />
      <div className="absolute bottom-0 z-10 -right-0.5 w-[4px] h-96 bg-[#150D23]" />
      <div id="tradingview_chart_dcf" ref={containerRef} className="h-96" />
    </div>
  )
}

export default TradingViewDCF
