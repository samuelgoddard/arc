import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Image from 'next/image'
import { processQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import Orbit from '@/components/orbit'
import CornerScroller from '@/components/corner-scroller'
const pageService = new SanityPageService(processQuery)

export default function Process(initialData) {
  const { data: { process, contact }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={process.title} />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="pb-3 pt-14 lg:pt-16">
            <Container>
              <m.article variants={fade} className="relative z-[1]">
                <div className="w-full border-b border-black pb-3 mb-3">
                  <h1 className="text-[10vw]/[0.9] lg:text-[5.5vw]/[0.9] w-[100%] lg:w-[90%]">{process.heroHeading}</h1>
                </div>

                <div className="w-full border-b border-black pb-3 mb-3 relative z-[10]">
                  <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0">
                      <CornerScroller
                        layout="topRight"
                        image={process.ourViewImagee}
                        height="h-[75vw] lg:h-[50vw]"
                        amount={"250%"}
                        offset={["-50vh", "250vh"]}
                        orange
                      />

                      {/* <Image
                        src="/images/process-01.png"
                        fill
                        quality={20}
                        alt="Some members of the Arc Design Studio working on an easel"
                        className="w-full absolute inset-0 h-full mix-blend-multiply object-center object-cover"
                      /> */}
                      
                      {/* <SanityImage
                        image={process.ourViewImagee}
                        alt="Some members of the Arc Design Studio working on an easel"
                        className="grayscale mix-blend-multiply"
                      /> */}
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex lg:items-center lg:justify-center">
                      <div className="w-11/12 lg:w-8/12 max-w-[500px]">
                        <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-6 lg:mb-10 inline-block">Our View</span>
                        <div className="content mb-6 lg:mb-10 indent-12">
                          <p>{process.ourViewText}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full pb-0">
                  <div className="relative w-full mb-3 border-b border-black pb-3">

                    <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-8 lg:mb-10 inline-block">The Network</span>

                    <h2 className="text-[8vw]/[0.95] lg:text-[4.5vw]/[0.95] w-[90%] lg:w-[50%] mb-5 lg:mb-8 pb-0">{process.theNetworkHeading}</h2>

                    <div className="w-full flex flex-wrap items-start">
                      <div className="w-full lg:w-5/12 order-2 lg:order-1 lg:pb-[15vw]">
                        <div className="content mb-6 lg:mb-10 indent-12 w-[85%] lg:w-[80%] max-w-[550px]">
                          <p>{process.theNetworkText}</p>
                        </div>

                        <ul className="leading-[1.2]">
                          {process.theNetworkListItems.map((e,i) => {
                            let color = 'bg-[#CF5700]'
                            e.department == 'arcTeam' && (color = 'bg-[#CF5700]')
                            e.department == 'supportingExpers' && (color = 'bg-[#C6A689]')
                            e.department == 'widerNetwork' && (color = 'bg-[#F2E8DE]')
                            return (
                              <li key={i}><span className={`w-3 h-3 inline-block rounded-full border border-black/70 mr-2 ${color}`}></span>{e.title}</li>
                            )
                          })}
                        </ul>
                      </div>

                      <Orbit />
{/* 
                      <Image
                          src="/images/process-map.png"
                          width={1912}
                          height={1594}
                          alt="A illustration of the Arc Design Studio ecosystem"
                          className="w-full"
                        /> */}
                    </div>
                  </div>
                </div>

                <div className="w-full pb-0">
                  <div className="relative w-full mb-3 border-b border-black pb-3">
                    <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-20 lg:mb-[15vw] inline-block">The Response</span>

                    <h2 className="text-[8vw]/[0.95] lg:text-[3.5vw]/[0.95] w-[95%] lg:w-[90%] mb-0 pb-0">{process.theResponseHeading}</h2>
                  </div>

                  <div className="grid grid-cols-3 lg:gap-3 mb-3 lg:mb-3 border-b border-black">
                    {process.theResponseItems.map((e,i) => {
                      return (
                        <div key={i} className={`col-span-3 lg:col-span-1 mb-6 lg:mb-0 border-b lg:border-b-0 border-black pb-3 lg:pb-0 bg-light-orange ${ i+1 == process.theResponseItems.length ? '' : 'lg:border-r' }`}>
                          {e.image && (
                            <div className="w-1/2 h-[28vw] lg:h-[10.5vw] my-12 lg:mt-[5vw] mb-[6vw] bg-light-orange relative overflow-hidden">
                              <SanityImage
                                image={e.image}
                                className="mix-blend-multiply scale-[1.003] bg-light-orange"
                                noBg
                              />
                            </div>
                          )}

                          <div className="w-10/12 lg:pb-3">
                            <p className="text-lg lg:text-xl mb-3"><strong>{e.title}</strong></p>
                            
                            <p className="text-base/[1.2]">{e.text}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="flex flex-wrap items-end justify-end">
                    <div className="w-full lg:flex-1 order-2 lg:order-1">
                      <div className="w-10/12 lg:w-7/12 max-w-[450px] content mb-4">
                        <p>{process.footerText}</p>
                      </div>
                      <a href="mailto:enquiry@arcdesignstudio.co.uk" target="_blank" rel="noopener noreferrer" className="bg-orange text-white p-2 px-4 rounded-full inline-block group relative overflow-hidden">
                        <span className="block relative z-[10] overflow-hidden">
                          <span className="block will-change-transform translate-y-0 group-hover:translate-y-[-100%] transition-transform ease-custom duration-[400ms]">Get in touch</span>
                          <span className="block will-change-transform translate-y-full absolute inset-0 group-hover:translate-y-0 transition-transform ease-custom duration-[400ms]">Get in touch</span>
                        </span>
                        <span className="absolute inset-0 z-[1] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[400ms]">
                          <span className="block w-[10px] h-[10px] rounded-full bg-gradient-radial from-black/10 via-black/10 to-transparent transition-all ease-custom duration-[400ms] group-hover:scale-[14]"></span>
                        </span>
                      </a>
                    </div>
                    <div className="w-full lg:w-7/12 order-1 lg:order-2 mb-4 lg:mb-0 bg-light-orange">
                      {/* <Image
                        src="/images/process-02.png"
                        width={2082}
                        height={1486}
                        className="w-full mix-blend-multiply"
                      /> */}

                      <CornerScroller
                        layout="bottomRight"
                        image={process.footerImage}
                        height="h-[68vw] lg:h-[40vw]"
                        offset={["-100vh", "100vh"]}
                        amount="1400px"
                      />                      
                    </div>
                  </div>
                </div>
              </m.article>
            </Container>
          </main>
          
          <m.div variants={fade}>
            <Footer contact={contact} />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props: props
  };
}
