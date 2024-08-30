import React from "react"

const DiscordBtn = () => {
  return (
    <a
      href="https://whop.com/cge-trading/"
      target="_blank"
      className="h-16 inline-flex items-center justify-center px-8 font-medium text-lg text-white bg-purple-700 rounded-xl shadow transition-colors hover:text-white hover:border-transparent hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    >
      Visit my{" "}
      <img src="/mql5btn.png" alt="mql5" className="h-8 rounded-full mx-1" />{" "}
      store
    </a>
  )
}

export default DiscordBtn
