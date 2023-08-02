import { useScroll, m, useTransform } from "framer-motion"
import SanityImage from "./sanity-image"

export default function Zoomer({image}) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY,[0, 750],[1, 1.1],{ clamp: true })

  return(
    <m.div style={{ scale: y }} className="absolute inset-0 w-full mix-blend-multiply grayscale">
      <SanityImage
        image={image}
        alt="Arc Triangle"
        className="w-full will-change-auto opacity-70"
        priority
      />
    </m.div>
  )
}