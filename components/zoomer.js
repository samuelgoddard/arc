import { useScroll, m, useTransform } from "framer-motion"
import SanityImage from "./sanity-image"

export default function Zoomer({image, video}) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY,[0, 750],[1, 1.1],{ clamp: true })

  return(
    <m.div style={{ scale: y }} className="absolute inset-0 w-full mix-blend-multiply grayscale">
      { video && (
        <video
          loop={true}
          autoPlay={true}
          controls={false}
          playsInline={true}
          muted
          className={`object-cover object-center w-full h-full absolute inset-0`}
        >
          <source src={ video } type="video/mp4" />

          Sorry. Your browser does not support the video tag.
        </video>
      )}
      {image && (
        <SanityImage
          image={image}
          alt="Arc Triangle"
          className="w-full will-change-auto opacity-70"
          priority
        />
      )}
    </m.div>
  )
}