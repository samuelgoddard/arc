import { useScroll, m, useTransform } from "framer-motion"

export default function PinnedArc() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY,[0, 750],['0%', '-41%'],{ clamp: true })

  return(
    <m.div style={{ translateY: y }} className="bg-transparent left-0 right-0 w-full h-screen text-[80px]/none lg:text-[160px]/none text-white z-[100] fixed px-3 pointer-events-none flex items-center will-change-transform">
      <div className="flex w-full mt-[20px] lg:-mt-0">
        <span className="block mr-auto">A</span>
        <span className="block mx-auto">R</span>
        <span className="block ml-auto">C</span>
      </div>
    </m.div>
  )
}