import { useScroll, m, useTransform } from "framer-motion"
import IconLogo from '@/icons/logo.svg'

export default function Orbit() {
  const { scrollY } = useScroll()
  const slowRotate = useTransform(scrollY,[0, 2000],['0deg', '150deg'],{ clamp: false })
  const slowerRotate = useTransform(scrollY,[0, 2000],['0deg', '100deg'],{ clamp: false })
  const slowestRotate = useTransform(scrollY,[0, 2000],['0deg', '50deg'],{ clamp: false })

  return(
    <div className="w-full lg:w-7/12 order-1 lg:order-2 mb-8 overflow-hidden relative py-[5vw] lg:mt-[-12.5vw]">
      <m.div style={{ rotate: slowRotate }} className="w-full relative will-change-transform animate-spin-slow">
        <div className=" rotate-[20deg]">
          <div className="outer bg-[#E7DCD1] w-[85%] mx-auto aspect-square rounded-[100%] border border-dashed border-black/80"></div>
        </div>

        <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#DFD5CA] border border-black/80 absolute bottom-[20%] right-[14.3%]"></div>
        <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#DFD5CA] border border-black/80 absolute top-[14%] left-[18.8%]"></div>
        <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#DFD5CA] border border-black/80 absolute top-[-0.6%] left-[55%]"></div>
      </m.div>
      
      <div className="absolute inset-0 flex items-center">
        <m.div style={{ rotate: slowestRotate }} className="w-full will-change-transform relative animate-spin-slower">
          <div className="rotate-[20deg] w-full">
            <div className="outer bg-[#D6C6B7] w-[57%] mx-auto aspect-square rounded-[100%] border border-dashed border-black/80 relative">
            </div>
          </div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#C9AB8F] border border-black/80 absolute bottom-[43%] right-[20.8%]"></div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#C9AB8F] border border-black/80 absolute top-[22.8%] left-[24.7%]"></div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#C9AB8F] border border-black/80 absolute top-[73%] left-[24.2%]"></div>
        </m.div>
      </div>

      <div className="absolute inset-0 flex items-center">
        <m.div style={{ rotate: slowestRotate }} className="w-full will-change-transform relative animate-spin-slowest">
          <div className="w-full">
            <div className="outer bg-[#CF5700] w-[25%] mx-auto aspect-square rounded-[100%] border border-dashed border-black/80 relative flex items-center justify-center">
            </div>
          </div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#FFB763] border border-black/80 absolute bottom-[37%] right-[36.8%]"></div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#FFB763] border border-black/80 absolute bottom-[12%] right-[40%]"></div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#FFB763] border border-black/80 absolute top-[22.8%] left-[38.2%]"></div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#FFB763] border border-black/80 absolute top-[-1%] left-[45%]"></div>
          <div className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px] aspect-square rounded-full bg-[#FFB763] border border-black/80 absolute top-[-3%] left-[51%]"></div>
        </m.div>
      </div>

      <div className="absolute inset-0 w-full h-full flex items-center justify-center text-[#FFDEB7] font-mono text-sm xl:text-lg">
        <div className="relative w-[20vw] lg:w-[12vw] text-center uppercase leading-[1]">
          <span className="block relative z-10">THE ARC TEAM</span>

          <div className="absolute inset-0 w-full h-full flex items-center justify-center">
            <IconLogo className="w-[75%] text-[#DE6C19] translate-y-[-10%]" />
          </div>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full flex items-center justify-center text-black font-mono text-sm/[1.15] xl:text-lg/[1.1] mt-[19.5%] lg:mt-[20%]">
        <div className="relative w-[20vw] lg:w-[12vw] text-center uppercase">
          <span className="block relative z-10">Supporting<br/>Experts</span>
        </div>
      </div>

      <div className="absolute inset-0 w-full h-full flex items-center justify-center text-black font-mono text-sm/[1.15] xl:text-lg/[1.1] mt-[35%] lg:mt-[35%]">
        <div className="relative w-[20vw] lg:w-[12vw] text-center uppercase">
          <span className="block relative z-10">Wider<br/>Network</span>
        </div>
      </div>
    </div>
  )
}