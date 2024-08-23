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
    // {
    //   logo: "/ctrader.png",
    //   heading: "Join my $100K USD challenge",
    //   text: "Subscribe to DCF Bets with cTrader Copy and watch your portfolio soar. Here's the deal:",
    //   items: [
    //     "Performance fee: 25%",
    //     "Management fee: 5%",
    //     "Let's make some serious gains together!",
    //   ],
    //   ctaText: "Join challenge",
    //   link: "",
    // },
  ]

  return (
    <HeroHighlight>
      <div className="pt-10 pb-16">
        <Spotlight
          className="hidden lg:block -left-[27.5rem] -top-[70rem]"
          fill="white"
        />

        <div className="w-full relative flex flex-col items-center justify-center">
          <div className="flex flex-col z-10 items-center justify-center w-full py-12 md:py-24 lg:pb-8 lg:pt-0 text-slate-300">
            <div className="px-4 md:px-6 text-center">
              <div className="space-y-4 mb-8">
                <FadeIn delay={600}>
                  <h1 className="text-4xl max-w-xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-l from-purple-400 via-purple-300 to-white inline-block text-transparent bg-clip-text">
                    Navigate the Evolving Gold Market
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
                          src="https://www.canva.com/design/DAGOj4Rfvus/xchvtNzuUhAxCBx-yQCcjg/view"
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
                          src="https://www.canva.com/design/DAGOj7PMOds/SndLg9a1sPJV2ZUKRIXFNA/view"
                          allow="fullscreen"
                        ></iframe>
                      </div>
                    </BackgroundGradient>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={1200}>
                <p className="max-w-[38rem] mx-auto text-muted-foreground md:text-xl mt-10">
                  This model allows you to take advantage of minimal resistance and capitalize on market trends.
                  Driven by a score range of -7 to +7, this method ensures well-informed and effective trading
                  decisions while warning of potential liquidity traps.
                </p>
              </FadeIn>

              <FadeIn delay={1400}>
                <div className="mt-10 flex flex-col gap-16 sm:flex-row items-center sm:justify-center">
                  <DiscordBtn />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        {/* mobile ticker */}
        <div className="md:hidden relative mb-8 mt-6 md:mt-0">
          <Ticker />
        </div>

        <div className="px-6 sm:px-16 xl:px-32">
          <section className="w-full py-12">
            {/* desktop ticker */}
            <div className="hidden md:block relative mb-14">
              <div className="absolute top-0 left-0 w-40 h-[47px] bg-gradient-to-r from-black to-transparent" />
              <div>
                <Ticker />
              </div>
              <div className="absolute top-0 right-0 w-40 h-[47px] bg-gradient-to-l from-black to-transparent " />
            </div>

            <div>
              <div className="container mx-auto mb-12 grid grid-cols-1 xl:grid-cols-2 gap-12 p-8 md:py-12 xl:py-16 xl:px-16 lg:gap-24 border border-slate-700 bg-[#170e27]/90 rounded-xl">
                <div className="grid place-items-center">
                  <div>
                    <h2 className="text-4xl mb-6 font-bold tracking-tighter md:text-6xl bg-gradient-to-r from-purple-500 via-purple-300 to-white inline-block text-transparent bg-clip-text">
                      Unveiling The Trap
                      <br /> Play Indicator
                    </h2>
                    <p className="text-xl text-gray-300 max-w-lg">
                      We’re excited to announce that the Trap Play Indicator,
                      a premium liquidity tool, is now ready for launch on the
                      TradingView platform. Be among the first to access this
                      exclusive tool.
                    </p>
                    <div className="flex gap-4 mt-8">
                      <a
                        href="https://www.tradingview.com/script/ky5wsKTC-The-Trap-Play/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-white text-black px-6 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-purple-200 hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Explore
                      </a>
                      <a
                        href="https://whop.com/cge-trading/?pass=prod_op7Sw860geSzs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-purple-700 text-white px-6 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-purple-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        7-day free trial
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <TradingViewChart />
                </div>
              </div>
            </div>

            <div>
              <div className="container mx-auto mb-12 flex flex-col-reverse xl:flex-row gap-12 p-8 md:py-12 xl:py-16 xl:px-16 lg:gap-2 border border-slate-700 bg-[#170e27]/90 rounded-xl">
                <div className="w-full">
                  <TradingViewDCF />
                </div>
                <div className="grid place-items-center w-full">
                  <div>
                    <h2 className="text-4xl mb-6 font-bold tracking-tighter md:text-[3.75rem] md:leading-[1.15] bg-gradient-to-r from-purple-500 via-purple-300 to-white inline-block text-transparent bg-clip-text">
                      DCF Bets
                      <br /> on TradingView
                    </h2>
                    <p className="mt-2 text-xl text-purple-400/90">
                      Follow me on TradingView for exclusive access to:
                    </p>
                    <ul className="mt-6">
                      <li className="flex items-center mt-1 text-slate-300/90 text-lg">
                        <span className="bullet text-2xl mr-2">&#8226;</span>{" "}
                        Consistent profits with my proven capital flow
                        strategies
                      </li>
                      <li className="flex items-center mt-1 text-slate-300/90 text-lg">
                        <span className="bullet text-2xl mr-2">&#8226;</span>{" "}
                        Valuable market insights through detailed trade analysis
                      </li>

                      <li className="flex items-center mt-1 text-slate-300/90 text-lg">
                        <span className="bullet text-2xl mr-2">&#8226;</span>{" "}
                        Daily trade picks to give you an edge in the market
                      </li>
                    </ul>
                    <div className="mt-8">
                      <a
                        href="https://www.tradingview.com/u/CGE_Trading/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-purple-700 text-white px-6 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-purple-800 hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      >
                        Follow me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
              {cardsData.map((card, index) => (
                <Card
                  key={index}
                  logo={card.logo}
                  heading={card.heading}
                  items={card.items}
                  text={card.text}
                  ctaText={card.ctaText}
                  link={card.link}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="mt-20 w-full text-center text-slate-600 py-4">
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
