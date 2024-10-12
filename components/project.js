import { PortableText } from "@portabletext/react"
import SanityImage from "./sanity-image"
import { useRef, useState } from "react"
import { AnimatePresence, m, useScroll, useTransform } from "framer-motion";

export default function Project({ title, images, tags, meta, text, i }) {
  const [index, setIndex] = useState(0);
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-100vh", "200vh"]
  })
  const y = useTransform(scrollYProgress,[0, 1],['10vw', '50vw'],{ clamp: false })

  const { scrollY } = useScroll()
  const scale = useTransform(scrollY,[0, 750],[1, 1.025],{ clamp: false })

  let layoutStyle = { borderTopLeftRadius: y }
  
  let shape = 'bottomLeft'
  i % 2 === 0 && (shape = 'bottomRight')
  
  shape == 'bottomRight' && ( layoutStyle = { borderBottomRightRadius: y, borderTopLeftRadius: 0, borderTopRightRadius: 0 } )

  shape == 'bottomLeft' && ( layoutStyle = { borderBottomLeftRadius: y, borderTopLeftRadius: 0, borderTopRightRadius: 0 } )

  return(
    <div className="mb-3 border-t border-black pt-3 [*>.test]:bg-red-400 even:flex-row-reverse flex flex-wrap group">
      <div className="lg:grayscale lg:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all ease-in-out duration-[1000ms] w-full lg:w-2/3">
        <m.div ref={ref} style={layoutStyle} className={`relative z-[100] overflow-hidden will-change-transform rounded-fix w-full h-[60vw] lg:h-[40vw]`}>
          <m.div style={{scale: scale}} className="w-full h-full absolute z-[0] inset-0 mix-blend-multiply">
          {images && (
            <AnimatePresence mode="sync">
              {images?.map((e, i) => {
                return index == i && (
                  <m.div
                    initial={{ opacity: 0, scale: 1.025, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 1.025, filter: "blur(10px)" }}
                    transition={{ duration: 1, ease: [0.71,0,0.17,1] }}
                    key={i}
                    className="absolute inset-0"
                  >
                    {e && (
                      <SanityImage
                        image={e}
                        alt={`Image of the project`}
                        className="block w-full"
                      />
                    )}
                  </m.div>
                )
              })}
            </AnimatePresence>
          )}
          </m.div>
        </m.div>
      
        { images && (
        <div className={`gap-3 w-full mt-3 mb-8 lg:mb-[10vw] grid grid-cols-5 sm:grid-cols-4 lg:hidden ${i % 2 === 0 ? 'justify-start' : 'justify-end' }`}>
          {images?.map((e, i) => {
            return (
              <button onClick={()=> setIndex(i)} key={i} className={`col-span-1 aspect-video bg-black/10 relative overflow-hidden transition-all ease-in-out duration-[600ms] ${i == index ? '' : 'grayscale opacity-50 hover:opacity-70' }`}>
                {e && (
                  <SanityImage
                    image={e}
                    alt={`Portrait of ${e.name}`}
                    className="block w-full"
                  />
                )}
              </button>
            )
          })}
        </div>
        )}
      </div>

      <div className={`w-full lg:w-1/3 lg:max-w-[500px] mr-auto py-3 lg:py-0 ${i % 2 === 0 ? 'lg:px-3' : 'lg:pr-3' }`}>
        <div className="w-[90%] test">
          <div className="flex space-x-3 mb-3">
            {tags?.map((e,i) => {
              let color = '#D1C4B3'
              i == 0 && (color = '#D1C4B3')
              i == 1 && (color = '#BDD1B3')
              return (
                <span key={i} className="p-1 font-mono uppercase text-xs/none inline-block" style={{ backgroundColor: color}}>{e}</span>
              )
            })}
          </div>
          <h2 className="text-[7.5vw]/[0.95] lg:text-[3.3vw]/[0.95] mb-1.5 pb-0">{title}</h2>
          
          <div className="mb-12">
            {meta?.map((e,i) => {
              return (
                <span className="block text-lg/[1] mb-1.5" key={i}>{e}</span>
              )
            })}
          </div>
          
          <div className="content">
            { text ? (
              <PortableText
                value={text}
              />
            ) : (
              <p>Update coming soon...</p>
            )}
          </div>
        </div>
      </div>

      <div className={`lg:w-2/3 gap-3 grid-cols-5 sm:grid-cols-4 lg:grid-cols-7 w-full mt-3 lg:mb-[10vw] hidden lg:grayscale lg:opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all ease-in-out duration-[1000ms] lg:grid ${i % 2 === 0 ? 'justify-start' : 'justify-end' }`}>
        {images?.map((e, i) => {
          return (
            <button onClick={()=> setIndex(i)} key={i} className={`col-span-1 aspect-video bg-black/10 relative overflow-hidden transition-all ease-in-out duration-[600ms] ${i == index ? '' : 'grayscale opacity-50 hover:opacity-70' }`}>
              { e && (
                <SanityImage
                  image={e}
                  alt={`Portrait of ${e.name}`}
                  className="block w-full"
                />
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}