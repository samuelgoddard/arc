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
  const { data: { home, contact }  } = pageService.getPreviewHook(initialData)()
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
                    <div className="w-[90vw] lg:w-[55vw] lg:max-w-[85vh] h-[75vw] lg:h-[48vw] lg:max-h-[70vh] lg:translate-y-[-3vw] z-[1] triangle overflow-hidden bg-orange relative mt-[30vw] lg:mt-0">
                      <div className="absolute inset-0 bg-orange opacity-90 z-[20] mix-blend-soft-light will-change-transform"></div>
                      <Zoomer image={home.heroImage} />
                    </div>
                  </div>

                  <span className="absolute bottom-3 left-0 w-[80%] max-w-[480px] text-base/tight hidden lg:block">{home.heroText}</span>

                  <div className="absolute bottom-3 left-0 lg:left-auto lg:right-0">
                    <span className="block lg:hidden w-[85%] max-w-[480px] text-base/tight mb-8 lg:mb-0">{home.heroText}</span>

                    <div className="flex space-x-4 items-center">
                      <div className="w-[90px] lg:w-[160px] relative z-[1] opacity-1 bg-off-white">
                        <svg className="w-full" fill="none" viewBox="0 0 164 41"><g fill="#0E0E0E" clip-path="url(#a)"><path d="m8.272 16.657-7.054-2.205a.295.295 0 0 1-.192-.386c.302-.943.68-1.86 1.133-2.74a.29.29 0 0 1 .406-.129l6.562 3.405c-.342.66-.628 1.347-.855 2.055Zm24.43 0a12.276 12.276 0 0 0-.855-2.055l6.561-3.405a.291.291 0 0 1 .407.129c.452.88.83 1.797 1.132 2.74a.335.335 0 0 1-.192.386l-7.053 2.205Zm-22.015-4.39L5.023 7.516a.306.306 0 0 1-.043-.428 19.398 19.398 0 0 1 2.095-2.098.305.305 0 0 1 .427.042l4.766 5.653c-.579.473-1.109 1.004-1.581 1.584Zm19.6 0a11.074 11.074 0 0 0-1.582-1.583L33.45 5.03a.306.306 0 0 1 .427-.042c.75.644 1.451 1.346 2.095 2.098a.306.306 0 0 1-.043.428l-5.643 4.753Zm-15.71-3.146-3.42-6.552a.293.293 0 0 1 .128-.407c.88-.453 1.795-.832 2.736-1.134a.333.333 0 0 1 .385.192l2.223 7.066c-.708.215-1.395.494-2.052.835Zm11.82 0a14.322 14.322 0 0 0-2.052-.857L26.567 1.2a.297.297 0 0 1 .267-.21c.04-.003.08.003.118.017.938.312 1.853.691 2.736 1.135a.29.29 0 0 1 .128.407l-3.42 6.573Zm-7.032-1.392L18.723.364a.283.283 0 0 1 .278-.321C19.493 0 19.984 0 20.476 0c.492 0 .983.021 1.475.043a.292.292 0 0 1 .278.321l-.642 7.365a19.281 19.281 0 0 0-1.111-.043 9.645 9.645 0 0 0-1.111.043ZM40.589 18.776l-7.353.621c.021.364.043.728.043 1.092 0 3.401-1.35 6.663-3.75 9.069a12.792 12.792 0 0 1-9.053 3.756 12.792 12.792 0 0 1-9.053-3.756 12.836 12.836 0 0 1-3.75-9.069c0-.364.022-.728.043-1.092l-7.353-.62a.282.282 0 0 0-.32.278C0 19.525 0 20.018 0 20.489c0 5.44 2.157 10.657 5.997 14.503A20.458 20.458 0 0 0 20.476 41c5.43 0 10.639-2.161 14.479-6.008a20.528 20.528 0 0 0 5.997-14.503c0-.47-.021-.963-.043-1.434a.284.284 0 0 0-.32-.279ZM55.678 23.294H53.22v5.545h-2.629V12.825h5.087c3.292 0 5.536 2.269 5.536 5.245 0 2.933-2.244 5.224-5.536 5.224Zm-.021-7.986H53.22v5.503h2.437c1.902 0 2.97-1.2 2.97-2.762 0-1.563-1.09-2.74-2.97-2.74ZM62.411 11.925h2.48V28.84h-2.48V11.925ZM66.515 23.208c0-3.232 2.35-5.866 5.429-5.866 1.624 0 2.97.835 3.612 1.734v-1.52h2.48V28.84h-2.48v-1.52c-.641.9-1.988 1.734-3.612 1.734-3.1.022-5.43-2.633-5.43-5.845Zm9.233 0c0-2.034-1.368-3.618-3.356-3.618-1.987 0-3.355 1.584-3.355 3.618s1.368 3.619 3.355 3.619c1.988 0 3.356-1.606 3.356-3.619ZM80.151 17.556h2.48v1.542c.705-1.156 1.966-1.756 3.42-1.756 2.607 0 4.295 1.841 4.295 4.71v6.787h-2.479v-6.38c0-1.798-.898-2.869-2.351-2.869-1.646 0-2.907 1.263-2.907 3.704v5.545h-2.48V17.556h.022ZM91.629 23.208c0-3.34 2.287-5.866 5.792-5.866 3.441 0 5.878 2.634 5.621 6.466h-8.955c.064 1.713 1.41 3.061 3.398 3.061 1.261 0 2.33-.492 2.843-1.584h2.586c-.663 2.098-2.629 3.768-5.514 3.768-3.356.022-5.771-2.462-5.771-5.845Zm2.522-1.156h6.241c-.385-1.82-1.667-2.633-3.035-2.633-1.56 0-2.864.899-3.206 2.633ZM105.436 25.2V19.76h-2.351v-2.205h2.351V14.43h2.48v3.126h3.206v2.205h-3.206v5.032c0 1.413.598 1.927 1.902 1.927.453.014.904-.066 1.325-.236v2.205a6.22 6.22 0 0 1-1.838.257c-2.18 0-3.869-1.199-3.869-3.747ZM115.973 12.825l5.579 7.579 5.6-7.58h2.415V28.84h-2.65V17.363l-3.741 5.096a1.987 1.987 0 0 1-2.501.597 1.996 1.996 0 0 1-.705-.597l-3.783-5.117V28.84h-2.629V12.825h2.415ZM131.32 23.208c0-3.232 2.351-5.866 5.429-5.866 1.624 0 2.971.835 3.612 1.734v-1.52h2.479V28.84h-2.479v-1.52c-.641.9-1.988 1.734-3.612 1.734-3.1.022-5.429-2.633-5.429-5.845Zm9.233 0c0-2.034-1.368-3.618-3.356-3.618-1.987 0-3.355 1.584-3.355 3.618s1.368 3.619 3.355 3.619c1.988 0 3.356-1.606 3.356-3.619ZM144.935 17.556h2.479v2.013a3.165 3.165 0 0 1 2.971-2.12 4.47 4.47 0 0 1 .962.086v2.547a3.493 3.493 0 0 0-1.24-.192c-1.411 0-2.693 1.199-2.693 3.447v5.502h-2.479V17.556ZM155.451 23.401v5.438h-2.48V11.925h2.48v9.934l4.296-4.282h3.12l-5.023 5.032L164 28.86h-3.185l-5.364-5.459Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h164v41H0z"/></clipPath></defs></svg>
                      </div>
                      <div className="w-[100px] lg:w-[140px] mb-[5px] relative z-[1] opacity-1 bg-off-white">
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
                      <div className="w-[70px] lg:w-[100px] relative z-[1] opacity-1 bg-off-white">
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
                          <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[5vw]">{i+2}</span>

                          {e.image && (
                            <div className="w-[45%] lg:w-[40%] h-[60vw] lg:h-[20vw] my-12 lg:mt-[5vw] mb-[5vw] bg-off-white relative overflow-hidden">
                              <SanityImage
                                image={e.image}
                                className="mix-blend-multiply scale-[1.003] bg-off-red"
                                noBg
                              />
                            </div>
                          )}

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