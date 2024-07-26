import React from "react"
import { BackgroundGradient } from "./BackgroundGradient"
import FadeIn from "react-fade-in"
import Ticker from "./Ticker"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { cn } from "./utils/cn"
import { Spotlight } from "./Spotlight"

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
      logo: "/ctrader.png",
      heading: "Join my $100K USD challenge",
      text: "Subscribe to DCF Bets with cTrader Copy and watch your portfolio soar. Here's the deal:",
      items: [
        "Performance fee: 25%",
        "Management fee: 5%",
        "Let's make some serious gains together!",
      ],
      ctaText: "Join challenge",
      link: "https://ct-sc.icmarkets.com/copy/strategy/85959?u=CGE_Trading",
    },
    {
      logo: "/mql5.png",
      heading: "Visit my MQL5 store",
      text: "Discover the magic behind our 4.8-star rated tools (based on 25 reviews) and transform your trading game with:",
      items: ["Breakout Lines", "The Trap Play", "Trading Cycle Array"],
      ctaText: "Visit the store",
      link: "https://www.mql5.com/en/users/411623/seller",
    },
    {
      logo: "/tradingview.png",
      heading: "Free DCF bets on TradingView",
      text: "Follow me on TradingView for exclusive access to:",
      items: [
        "Consistent profits with my proven capital flow strategies",
        "Valuable market insights through detailed trade analysis",
        "Daily trade picks to give you an edge in the market",
      ],
      ctaText: "Follow me",
      link: "https://www.tradingview.com/u/CGE_Trading/",
    },
    {
      logo: "/discord.png",
      heading: "Join the ultimate Discord trading server",
      text: "Here's what we've got for you:",
      items: [
        "Live DCF Bets from 08-16 GMT+2 ($100K USD Challenge)",
        "Exclusive, invite-only Scripts on TradingView",
        "Top-notch Support",
      ],
      ctaText: "Join Discord",
      link: "https://whop.com/cge-trading/",
    },
  ]

  return (
    <HeroHighlight>
      <div className="pt-10 pb-16">
        <Spotlight
          className="hidden lg:block -left-[27.5rem] -top-[70rem]"
          fill="white"
        />
        <div className="w-full relative flex flex-col items-center justify-center">
          <div className="flex flex-col z-10 items-center justify-center w-full py-12 md:py-24 lg:py-8 text-slate-300">
            <div className="px-4 md:px-6 text-center">
              <div className="space-y-4 mb-8">
                <FadeIn delay={600}>
                  <h1 className="text-4xl max-w-xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Navigate the Evolving Forex Landscape
                  </h1>
                </FadeIn>

                <FadeIn delay={800}>
                  <h2 className="text-[1rem] sm:text-[1.15rem] uppercase font-bold tracking-wider text-purple-400/80">
                    Insights from CGE Trading{" "}
                  </h2>
                </FadeIn>
              </div>

              <FadeIn delay={1000}>
                <div className="px-5">
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

              <FadeIn delay={1200}>
                <p className="max-w-[38rem] mx-auto text-muted-foreground md:text-xl mt-10">
                  By combining the strongest and weakest currencies, you can
                  identify optimal pairs for trading, leveraging minimal
                  resistance and capitalizing on market trends. This strategy,
                  informed by the score range of -7 to +7, ensures robust and
                  effective trading decisions.
                </p>
              </FadeIn>

              <FadeIn delay={1400}>
                <div className="mt-10 flex flex-col gap-16 sm:flex-row items-center sm:justify-center">
                  <a
                    href="https://whop.com/cge-trading/"
                    target="_blank"
                    className="w-[15rem] h-12 inline-flex items-center justify-center px-8 font-medium text-lg text-white bg-purple-700 rounded-xl shadow transition-colors hover:text-white hover:border-transparent hover:bg-purple-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-11 pt-3"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.07451 1.82584C5.03267 1.81926 4.99014 1.81825 4.94803 1.82284C4.10683 1.91446 2.82673 2.36828 2.07115 2.77808C2.02106 2.80525 1.97621 2.84112 1.93869 2.88402C1.62502 3.24266 1.34046 3.82836 1.11706 4.38186C0.887447 4.95076 0.697293 5.55032 0.588937 5.98354C0.236232 7.39369 0.042502 9.08728 0.0174948 10.6925C0.0162429 10.7729 0.0351883 10.8523 0.0725931 10.9234C0.373679 11.496 1.02015 12.027 1.66809 12.4152C2.32332 12.8078 3.08732 13.1182 3.70385 13.1778C3.85335 13.1922 4.00098 13.1358 4.10282 13.0255C4.2572 12.8581 4.5193 12.4676 4.71745 12.1643C4.80739 12.0267 4.89157 11.8953 4.95845 11.7901C5.62023 11.9106 6.45043 11.9801 7.50002 11.9801C8.54844 11.9801 9.37796 11.9107 10.0394 11.7905C10.1062 11.8957 10.1903 12.0269 10.2801 12.1643C10.4783 12.4676 10.7404 12.8581 10.8947 13.0255C10.9966 13.1358 11.1442 13.1922 11.2937 13.1778C11.9102 13.1182 12.6742 12.8078 13.3295 12.4152C13.9774 12.027 14.6239 11.496 14.925 10.9234C14.9624 10.8523 14.9813 10.7729 14.9801 10.6925C14.9551 9.08728 14.7613 7.39369 14.4086 5.98354C14.3003 5.55032 14.1101 4.95076 13.8805 4.38186C13.6571 3.82836 13.3725 3.24266 13.0589 2.88402C13.0214 2.84112 12.9765 2.80525 12.9264 2.77808C12.1708 2.36828 10.8907 1.91446 10.0495 1.82284C10.0074 1.81825 9.96489 1.81926 9.92305 1.82584C9.71676 1.85825 9.5391 1.96458 9.40809 2.06355C9.26977 2.16804 9.1413 2.29668 9.0304 2.42682C8.86968 2.61544 8.71437 2.84488 8.61428 3.06225C8.27237 3.03501 7.90138 3.02 7.5 3.02C7.0977 3.02 6.72593 3.03508 6.38337 3.06244C6.28328 2.84501 6.12792 2.61549 5.96716 2.42682C5.85626 2.29668 5.72778 2.16804 5.58947 2.06355C5.45846 1.96458 5.2808 1.85825 5.07451 1.82584ZM11.0181 11.5382C11.0395 11.5713 11.0615 11.6051 11.0838 11.6392C11.2169 11.843 11.3487 12.0385 11.4508 12.1809C11.8475 12.0916 12.352 11.8818 12.8361 11.5917C13.3795 11.2661 13.8098 10.8918 14.0177 10.5739C13.9852 9.06758 13.7993 7.50369 13.4773 6.21648C13.38 5.82759 13.2038 5.27021 12.9903 4.74117C12.7893 4.24326 12.5753 3.82162 12.388 3.5792C11.7376 3.24219 10.7129 2.88582 10.0454 2.78987C10.0308 2.79839 10.0113 2.81102 9.98675 2.82955C9.91863 2.881 9.84018 2.95666 9.76111 3.04945C9.71959 3.09817 9.68166 3.1471 9.64768 3.19449C9.953 3.25031 10.2253 3.3171 10.4662 3.39123C11.1499 3.6016 11.6428 3.89039 11.884 4.212C12.0431 4.42408 12.0001 4.72494 11.788 4.884C11.5759 5.04306 11.2751 5.00008 11.116 4.788C11.0572 4.70961 10.8001 4.4984 10.1838 4.30877C9.58933 4.12585 8.71356 3.98 7.5 3.98C6.28644 3.98 5.41067 4.12585 4.81616 4.30877C4.19988 4.4984 3.94279 4.70961 3.884 4.788C3.72494 5.00008 3.42408 5.04306 3.212 4.884C2.99992 4.72494 2.95694 4.42408 3.116 4.212C3.35721 3.89039 3.85011 3.6016 4.53383 3.39123C4.77418 3.31727 5.04571 3.25062 5.35016 3.19488C5.31611 3.14738 5.27808 3.09831 5.23645 3.04945C5.15738 2.95666 5.07893 2.881 5.01081 2.82955C4.98628 2.81102 4.96674 2.79839 4.95217 2.78987C4.28464 2.88582 3.25999 3.24219 2.60954 3.5792C2.42226 3.82162 2.20825 4.24326 2.00729 4.74117C1.79376 5.27021 1.61752 5.82759 1.52025 6.21648C1.19829 7.50369 1.01236 9.06758 0.97986 10.5739C1.18772 10.8918 1.61807 11.2661 2.16148 11.5917C2.64557 11.8818 3.15003 12.0916 3.5468 12.1809C3.64885 12.0385 3.78065 11.843 3.9138 11.6392C3.93626 11.6048 3.95838 11.5708 3.97996 11.5375C3.19521 11.2591 2.77361 10.8758 2.50064 10.4664C2.35359 10.2458 2.4132 9.94778 2.63377 9.80074C2.85435 9.65369 3.15236 9.71329 3.29941 9.93387C3.56077 10.3259 4.24355 11.0201 7.50002 11.0201C10.7565 11.0201 11.4392 10.326 11.7006 9.93386C11.8477 9.71329 12.1457 9.65369 12.3663 9.80074C12.5869 9.94779 12.6465 10.2458 12.4994 10.4664C12.2262 10.8762 11.8041 11.2598 11.0181 11.5382ZM4.08049 7.01221C4.32412 6.74984 4.65476 6.60162 5.00007 6.59998C5.34538 6.60162 5.67603 6.74984 5.91966 7.01221C6.16329 7.27459 6.30007 7.62974 6.30007 7.99998C6.30007 8.37021 6.16329 8.72536 5.91966 8.98774C5.67603 9.25011 5.34538 9.39833 5.00007 9.39998C4.65476 9.39833 4.32412 9.25011 4.08049 8.98774C3.83685 8.72536 3.70007 8.37021 3.70007 7.99998C3.70007 7.62974 3.83685 7.27459 4.08049 7.01221ZM9.99885 6.59998C9.65354 6.60162 9.3229 6.74984 9.07926 7.01221C8.83563 7.27459 8.69885 7.62974 8.69885 7.99998C8.69885 8.37021 8.83563 8.72536 9.07926 8.98774C9.3229 9.25011 9.65354 9.39833 9.99885 9.39998C10.3442 9.39833 10.6748 9.25011 10.9184 8.98774C11.1621 8.72536 11.2989 8.37021 11.2989 7.99998C11.2989 7.62974 11.1621 7.27459 10.9184 7.01221C10.6748 6.74984 10.3442 6.60162 9.99885 6.59998Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    Join Discord
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>

        <div>
          <section className="w-full py-12">
            <div className="relative mb-14 lg:px-[4.25rem]">
              <div className="hidden lg:block absolute top-0 left-[4.25rem] w-40 h-[46px] bg-gradient-to-r from-black to-transparent" />
              <div>
                <Ticker />
              </div>
              <div className="hidden lg:block absolute top-0 right-[4.25rem] w-40 h-[46px] bg-gradient-to-l from-black to-transparent " />
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 lg:px-16 lg:gap-12">
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
  <div className="border border-slate-800 bg-[#170e27]/90 rounded-xl">
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
