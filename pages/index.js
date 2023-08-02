import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { homeQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
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
              <m.div variants={fade} className="h-[calc(100vh-12px)] w-full mb-3">
                <div className="w-full h-full border-b border-black relative flex items-start lg:items-center justify-center pt-24 lg:pt-0">
                  <div className="flex absolute top-[60vw] lg:top-[45%] left-0 right-0 w-full text-[14vw]/none lg:text-[8vw]/none text-white z-[10]">
                    <span className="block mr-auto">A</span>
                    <span className="block mx-auto">R</span>
                    <span className="block ml-auto">C</span>
                  </div>

                  <div className="w-[90vw] lg:w-[55vw] lg:max-w-[85vh] h-[75vw] lg:h-[48vw] lg:max-h-[70vh] lg:translate-y-[-3vw] z-[1] triangle relative overflow-hidden bg-orange">
                    <div className="absolute inset-0 bg-orange opacity-90 z-10 mix-blend-soft-light will-change-transform"></div>
                    <SanityImage
                      image={home.heroImage}
                      alt="Arc Triangle"
                      className="w-full will-change-transform mix-blend-multiply grayscale opacity-70"
                      priority
                    />
                  </div>

                  <span className="absolute bottom-3 left-0 w-[80%] max-w-[480px] text-base/tight hidden lg:block">{home.heroText}</span>

                  <div className="absolute bottom-3 left-0 lg:left-auto lg:right-0">
                    <span className="block lg:hidden w-[85%] max-w-[480px] text-base/tight mb-8 lg:mb-0">{home.heroText}</span>

                    <div className="flex space-x-3 items-end mix-blend-color-burn">
                      <div className="w-[80px] lg:w-[100px] mix-blend-color-burn">
                        <Image
                          src="/images/riba.jpg"
                          width={174}
                          height={82}
                          className="w-full"
                          quality={30}
                          alt="RIBA accrediation logo"
                          priority
                        />
                      </div>
                      <div className="w-[120px] lg:w-[140px] mb-[5px] mix-blend-color-burn">
                        <Image
                          src="/images/arb.jpg"
                          width={250}
                          height={62}
                          className="w-full"
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
                      <div className="rounded-tl-[95vw] lg:rounded-tl-[50vw] relative overflow-hidden h-[95vw] lg:h-[50vw] mix-blend-multiply bg-black/15">
                        {/* <Image
                          src="/images/home-01.png"
                          fill
                          alt="Some members of Arc Design Studio gathered around some work"
                          quality={20}
                          className="w-full absolute inset-0 h-full mix-blend-multiply object-center object-cover"
                        /> */}
                        <SanityImage
                          image={home.overviewImage}
                          className="grayscale mix-blend-multiply"
                          alt="Some members of Arc Design Studio gathered around some work"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex lg:items-center lg:justify-center">
                      <div className="w-11/12 lg:w-8/12 max-w-[500px]">
                        <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-6 lg:mb-10 inline-block">Overview</span>
                        <div className="content mb-6 lg:mb-10 indent-12">
                          <p>{home.overviewText}</p>
                        </div>

                        <Link scroll={false} href="/process" className="bg-black text-white p-2 px-4 rounded-full inline-block">Our Process</Link>
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
                    <div className="w-full lg:w-7/12">
                      <div className="rounded-t-[45vw] lg:rounded-t-[32vw] relative overflow-hidden h-[45vw] lg:h-[32vw] mix-blend-multiply bg-black/15">
                        {/* <Image
                          src="/images/home-02.png"
                          fill
                          alt="A shot of the Arc Design Studio office space"
                          quality={20}
                          className="w-full mix-blend-multiply absolute inset-0 object-center object-cover"
                        /> */}
                        <SanityImage
                          image={home.footerImage}
                          className="grayscale mix-blend-multiply"
                          alt="A shot of the Arc Design Studio office space"
                        />
                      </div>
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