import { useScroll, m, useTransform } from "framer-motion"
import { useRef } from "react"
import SanityImage from "./sanity-image"

export default function CornerScroller({image, height, layout, offset, amount}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset ? offset : ["-100vh", "200vh"]
  })
  const y = useTransform(scrollYProgress,[0, 1],['10vw', amount ? amount : '100vw'],{ clamp: false })

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY,[0, 750],[1, 1.025],{ clamp: false })

  let layoutStyle = { borderTopLeftRadius: y }
  layout == 'top' && ( layoutStyle = { borderTopLeftRadius: y, borderTopRightRadius: y } )
  return(
    <m.div ref={ref} style={layoutStyle} className={`relative overflow-hidden ${height} mix-blend-multiply bg-black/15 will-change-transform`}>
      <m.div style={{scale: scale}} className="w-full h-full absolute inset-0">
        <SanityImage
          image={image}
          className="grayscale mix-blend-multiply"
          alt="Some members of Arc Design Studio gathered around some work"
        />
      </m.div>
    </m.div>
  )
}