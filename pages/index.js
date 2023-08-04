import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade, fadeGrain } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import PinnedArc from '@/components/pinned-arc'
import CornerScroller from '@/components/corner-scroller'
import Zoomer from '@/components/zoomer'
const pageService = new SanityPageService(homeQuery)

export default function Home(initialData) {
  const { data: { home }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={home.title} />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="block">
            <Container>
              <m.div variants={fade} className="h-[calc(100vh-12px)] w-full mb-3 relative z-[100]">
                <PinnedArc />
                <div className="w-full h-full border-b border-black relative flex items-start lg:items-center justify-center pt-24 lg:pt-0">
                  <div className="absolute inset-0 w-full h-full flex items-start lg:items-center justify-center">
                    <div className="w-[90vw] lg:w-[55vw] lg:max-w-[85vh] h-[75vw] lg:h-[48vw] lg:max-h-[70vh] lg:translate-y-[-3vw] z-[1] triangle overflow-hidden bg-orange relative mt-[45vw] lg:mt-0">
                      <div className="absolute inset-0 bg-orange opacity-90 z-[20] mix-blend-soft-light will-change-transform"></div>
                      <Zoomer image={home.heroImage} />
                    </div>
                  </div>

                  <span className="absolute bottom-3 left-0 w-[80%] max-w-[480px] text-base/tight hidden lg:block">{home.heroText}</span>

                  <div className="absolute bottom-3 left-0 lg:left-auto lg:right-0">
                    <span className="block lg:hidden w-[85%] max-w-[480px] text-base/tight mb-8 lg:mb-0">{home.heroText}</span>

                    <div className="flex space-x-3 items-end">
                      <div className="w-[80px] lg:w-[100px] relative z-[1] opacity-1 bg-off-white">
                        <Image
                          src="/images/riba.jpg"
                          width={174}
                          height={82}
                          className="w-full relative z-[1] mix-blend-color-burn"
                          quality={30}
                          alt="RIBA accrediation logo"
                          priority
                        />
                      </div>
                      <div className="w-[120px] lg:w-[140px] mb-[5px] relative z-[1] opacity-1 bg-off-white">
                        <Image
                          src="/images/arb.jpg"
                          width={250}
                          height={62}
                          className="w-full mix-blend-color-burn "
                          alt="ARB accrediation logo"
                          quality={30}
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
              
              <m.article variants={fade} className="w-full">
                <div className="w-full border-b border-black pb-3 mb-3 relative z-[10]">
                  <h1 className="text-[9.5vw]/[0.95] lg:text-[5.5vw]/[0.95] w-[100%] lg:w-[90%] mb-8 lg:mb-32">{home.overviewHeading}</h1>
                  <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0 bg-off-white">
                      <CornerScroller
                        layout="topLeft"
                        image={home.overviewImage}
                        height="h-[95vw] lg:h-[50vw]"
                        amount="150%"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex lg:items-center lg:justify-center">
                      <div className="w-11/12 lg:w-8/12 max-w-[500px]">
                        <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-6 lg:mb-10 inline-block">Overview</span>
                        <div className="content mb-6 lg:mb-10 indent-12">
                          <p>{home.overviewText}</p>
                        </div>

                        <Link scroll={false} href="/process" className="bg-orange text-white p-2 px-4 rounded-full inline-block group relative overflow-hidden">
                          <span className="block relative z-[10] overflow-hidden">
                            <span className="block will-change-transform translate-y-0 group-hover:translate-y-[-100%] transition-transform ease-custom duration-[400ms]">Our Process</span>
                            <span className="block will-change-transform translate-y-full absolute inset-0 group-hover:translate-y-0 transition-transform ease-custom duration-[400ms]">Our Process</span>
                          </span>
                          <span className="absolute inset-0 z-[1] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[400ms]">
                            <span className="block w-[10px] h-[10px] rounded-full bg-gradient-radial from-black/10 via-black/10 to-transparent transition-all ease-custom duration-[400ms] group-hover:scale-[14]"></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full pb-0">
                  <div className="relative w-full mb-3 border-b border-black pb-3">
                    <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-20 lg:mb-[15vw] inline-block">Mission</span>

                    <h2 className="text-[7.5vw]/[0.95] lg:text-[3.5vw]/[0.95] w-[80%] lg:w-[82%] mb-0 pb-0">{home.missionHeading}</h2>
                    <span className="block absolute bottom-3 right-0 text-orange w-[10vw] lg:w-[15.5vw] z-0">
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 238 587">
                      <path fill="currentColor" d="M237.846 587H126.204V148.522H0V72.476c84.945-2.427 124.586-8.09 152.901-72.001h84.945V587Z"/>
                    </svg>

                    </span>
                  </div>
                  <div className="grid grid-cols-3 lg:gap-3 mb-12 lg:mb-[7vw]">
                    {home.missionItems.map((e,i) => {
                      return (
                        <div key={i} className={`col-span-3 lg:col-span-1 mb-6 lg:mb-0 border-b lg:border-b-0 border-black pb-3 lg:pb-0 ${ i+1 == home.missionItems.length ? '' : 'lg:border-r' }`}>
                          <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[12vw]">{i+1}</span>

                          <div className="w-10/12">
                            <p className="text-lg lg:text-xl mb-3"><strong>{e.title}</strong></p>
                            
                            <p className="text-base/[1.2]">{e.text}</p>
                          </div>
                        </div>    
                      )
                    })}
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="w-full lg:w-7/12 bg-off-white">
                      <CornerScroller
                        layout="top"
                        image={home.footerImage}
                        height="h-[45vw] lg:h-[32vw]"
                        offset={["-100vh", "100vh"]}
                        amount="2200px"
                      />
                    </div>
                  </div>
                </div>
              </m.article>
            </Container>
          </main>

          <m.div variants={fade}>
            <Footer />
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