import React from "react"
import { BackgroundGradient } from "./BackgroundGradient"
import FadeIn from "react-fade-in"
import Ticker from "./Ticker"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "./utils/cn"
import { Spotlight } from "./Spotlight"
import DiscordBtn from "./DiscordBtn"
import TradingViewChart from "./TradingViewChart"
import TradingViewDCF from "./TradingViewDCF"

const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}) => {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return
    let { left, top } = currentTarget.getBoundingClientRect()

    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }
  return (
    <div
      className={cn(
        "relative flex items-center bg-black justify-center w-full group",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-800  pointer-events-none" />
      <motion.div
        className="pointer-events-none bg-dot-thick-purple-500 absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  )
}

const App = () => {
  const cardsData = [
    {
      logo: "/mql5.png",
      heading: "Visit my MQL5 store",
      text: "Discover the magic behind our 4.8-star rated tools (based on 25 reviews) and transform your trading game with:",
      items: ["Breakout Lines", "The Trap Play", "Trading Cycle Array"],
      ctaText: "Visit the store",
      link: "https://www.mql5.com/en/users/411623/seller",
    },
    {
      logo: "/discord.png",
      heading: "Join my Discord server",
      text: "Supercharge your trading journey and reach your financial targets, here's what we offer in our Discord server:",
      items: [
        "Real-time Liquidity Alerts",
        "Exclusive, invite-only Scripts on TradingView",
        "Top-notch Support",
      ],
      ctaText: "Join Discord",
      link: "https://whop.com/cge-trading/",
    },
    {
      logo: "/ig.png",
      heading: "Start trading with IG",
      text: "For my Swedish clients – open an ISK account and receive 500 SEK when you start trading.",
      items: [
        "Low flat-rate tax on ISK accounts (1-2%)",
        "Turbo24 and Knock-Outs",
        "Over 16,000 markets",
      ],
      ctaText: "Sign up",
      link: "https://refer.ig.com/carlgustave-6",
    },
  ]

  return (
    <HeroHighlight>
      <div className="pb-16">
        <Spotlight
          className="hidden lg:block -left-[27.5rem] -top-[70rem]"
          fill="white"
        />

        <div className="md:hidden relative mb-8 mt-6 md:mt-0">
          <Ticker />
        </div>

        <div className="hidden md:block relative mb-8">
          <div className="absolute top-0 left-0 w-40 h-[47px] bg-gradient-to-r from-black to-transparent" />
          <div>
            <Ticker />
          </div>
          <div className="absolute top-0 right-0 w-40 h-[47px] bg-gradient-to-l from-black to-transparent " />
        </div>

        <div className="w-full relative flex flex-col items-center justify-center">
          <div className="flex flex-col z-10 items-center justify-center w-full pt-0 pb-12 md:py-24 lg:pb-8 lg:pt-0 text-slate-300">
            <div className="px-4 md:px-6 text-center">
              <img src="/logo2.png" alt="logo" className="h-16 w-16 mx-auto" />

              <div className="space-y-4 mt-4 mb-8">
                <FadeIn delay={600}>
                  <h1 className="text-4xl max-w-xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-l from-purple-400 via-purple-300 to-white inline-block text-transparent bg-clip-text">
                    Navigate the Evolving Gold & Forex Market
                  </h1>
                </FadeIn>

                <FadeIn delay={800}>
                  <h2 className="text-[1rem] sm:text-[1.15rem] uppercase font-bold tracking-wider text-purple-400/80">
                    Insights from CGE Trading{" "}
                  </h2>
                </FadeIn>
              </div>

              <div className="flex flex-col gap-12 w-full xl:flex-row xl:w-[80rem]">
                <FadeIn delay={1000} className="w-full">
                  <div className="relative px-5 w-full">
                    <BackgroundGradient className="rounded-xl bg-background p-0.25">
                      <div className="relative w-full pt-[56.25%] overflow-hidden shadow-md rounded-[1rem] border-2 border-gray-800">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full border-0 p-0 m-0"
                          loading="lazy"
                          src="https://www.canva.com/design/DAGOj4Rfvus/xchvtNzuUhAxCBx-yQCcjg/view?embed"
                          allow="fullscreen"
                        ></iframe>
                      </div>
                    </BackgroundGradient>
                  </div>
                </FadeIn>
                <FadeIn delay={1200} className="w-full">
                  <div className="relative px-5 w-full">
                    <BackgroundGradient className="rounded-xl bg-background p-0.25">
                      <div className="relative w-full pt-[56.25%] overflow-hidden shadow-md rounded-[1rem] border-2 border-gray-800">
                        <iframe
                          className="absolute top-0 left-0 w-full h-full border-0 p-0 m-0"
                          loading="lazy"
                          src="https://www.canva.com/design/DAGI-sMGDBs/H8fsyHF4FIeLoGGDILZcjg/view?embed"
                          allow="fullscreen"
                        ></iframe>
                      </div>
                    </BackgroundGradient>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={1200}>
                <p className="max-w-[44rem] mx-auto text-muted-foreground md:text-xl mt-14">
                  Get ready to supercharge your trading game! This model helps
                  you effortlessly capitalize on minimal resistance and market
                  trends. Guided by a score range of -7 to +7, it ensures your
                  trading decisions are both savvy and effective, while also
                  alerting you to potential liquidity traps.
                </p>
              </FadeIn>

              <FadeIn delay={1400}>
                <div className="mt-10 flex flex-col gap-12 sm:flex-row items-center sm:justify-center">
                  <a
                    href="https://www.mql5.com/en/users/411623/seller"
                    target="_blank"
                    className="inline-flex w-64 h-16 items-center justify-center px-8 font-medium text-lg text-white bg-purple-700 rounded-xl shadow transition-colors hover:text-white hover:border-transparent hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Visit my{" "}
                    <img
                      src="/mql5btn.png"
                      alt="mql5"
                      className="h-8 rounded-full mx-1"
                    />{" "}
                    store
                  </a>

                  <a
                    href="https://www.mql5.com/en/market/product/101755"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-64 h-16 items-center justify-center rounded-xl bg-white text-black px-6 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-purple-200 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Buy my{" "}
                    <img
                      src="/quant-logo.png"
                      alt="quant"
                      className="h-7 mr-1.5 ml-2"
                    />{" "}
                    TrapBot
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-16 w-full text-center text-slate-600 py-4">
          <p>
            &copy; {new Date().getFullYear()} CGE Trading. All rights reserved.
          </p>
        </div>
      </div>
    </HeroHighlight>
  )
}

const Card = ({ logo, heading, text, items, ctaText, link }) => (
  <div className="border border-slate-700 bg-[#170e27]/90 rounded-xl">
    <div className="grid gap-8 p-8">
      <img
        src={logo}
        alt={`${heading} logo`}
        className="h-20 w-20 rounded-full"
      />
      <div>
        <h3 className="text-3xl font-semibold text-white">{heading}</h3>
        <p className="mt-2 text-xl text-purple-400/90">{text}</p>

        <ul className="mt-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center mt-1 text-slate-300/90 text-lg"
            >
              <span className="bullet text-2xl mr-2">&#8226;</span> {item}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-purple-700 text-white px-6 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-purple-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default App
