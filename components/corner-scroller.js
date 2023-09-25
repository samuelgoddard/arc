import { useScroll, m, useTransform } from "framer-motion"
import { useRef } from "react"
import SanityImage from "./sanity-image"

export default function CornerScroller({image, height, layout, offset, amount, orange}) {
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
  layout == 'topRight' && ( layoutStyle = { borderTopRightRadius: y, borderTopLeftRadius: 0 } )
  layout == 'bottomRight' && ( layoutStyle = { borderBottomRightRadius: y, borderTopLeftRadius: 0, borderTopRightRadius: 0 } )
  layout == 'bottomLeft' && ( layoutStyle = { borderBottomLeftRadius: y, borderTopLeftRadius: 0, borderTopRightRadius: 0 } )
  return(
    <div className="mix-blend-multiply relative z-[10]">
      <m.div ref={ref} style={layoutStyle} className={`relative z-[100] overflow-hidden will-change-transform rounded-fix ${height} ${ orange ? 'bg-orange' : 'bg-black/10'} `}>
        <m.div style={{scale: scale}} className="w-full h-full absolute z-[0] inset-0 mix-blend-multiply">
          <SanityImage
            image={image}
            className="grayscale mix-blend-multiply absolute z-[0]"
            alt="Some members of Arc Design Studio gathered around some work"
          />
          {orange && (
            <div className="absolute inset-0 w-full h-full bg-orange opacity-100 mix-blend-soft-light z-[10]"></div>
          )}
        </m.div>
      </m.div>
    </div>
  )
}