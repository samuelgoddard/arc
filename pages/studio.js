import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m, useWillChange } from 'framer-motion'
import IconLogo from '@/icons/logo.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { studioQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
import SanityImage from '@/components/sanity-image'
import CornerScroller from '@/components/corner-scroller'
const pageService = new SanityPageService(studioQuery)

export default function Studio(initialData) {
  const { data: { studio, contact }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={studio.title} />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="pb-3 pt-14 lg:pt-16">
            <Container>
              <m.article variants={fade} className="relative z-[1]">
                <div className="border-b border-black pb-3">
                  <h1 className="text-[10vw]/[0.95] lg:text-[5.5vw]/[0.95] w-[100%] lg:w-[80%] mb-16 lg:mb-[15vw]">{studio.heroHeading}</h1>

                  <div className="flex flex-wrap items-end w-[95%] lg:w-[80%]">
                    <div className="w-full lg:w-auto">
                      <span className="bg-black/10 p-1 font-mono uppercase text-xs/none inline-block mb-3 lg:mb-0 mr-28">The Team</span>
                    </div>

                    <div className="content flex-1">
                      <p>{studio.theTeamText}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 mb-3 border-b border-black">
                  {studio.team.map((e, i) => {
                    let shape = 'rounded-[50px]'
                    
                    i == 0 && (shape = 'rounded-bl-[200px] group-hover:rounded-bl-[0]')
                    i == 1 && (shape = 'rounded-[70px] rounded-br-[0%] group-hover:rounded-[0]')
                    i == 2 && (shape = 'rounded-tr-[100px] rounded-bl-[100px] rounded-[0px] group-hover:rounded-tr-[0] group-hover:rounded-bl-[0]')
                    i == 3 && (shape = 'rounded-tl-[150px] rounded-[0px] group-hover:rounded-tl-[0]')
                    i == 4 && (shape = 'rounded-t-[150px] rounded-[0px] group-hover:rounded-t-[0]')
                    i == 5 && (shape = 'rounded-tr-[150px] rounded-[0px] group-hover:rounded-tr-[0]')
                    i == 6 && (shape = 'rounded-br-[150px] rounded-[0px] group-hover:rounded-br-[0]')
                    i == 7 && (shape = 'rounded-tl-[150px] rounded-[0px] group-hover:rounded-tl-[0]')

                    return (
                      <div key={i} className={`col-span-3 lg:col-span-1 border-b border-black pb-3 lg:pb-0 group ${ (((i+1)%3) === 0) ? '' : 'lg:border-r' } ${i == 6 || i == 7 ? 'lg:border-b-0' : '' } ${i+1 == 8 ? 'border-b-0' : '' }`}>
                        <div className={`mb-3 lg:mb-[7vw] py-2 ${i == 0 || i == 3 || i == 6 ? 'lg:p-2 lg:pl-0' : 'lg:p-2' } ${i == 2 || i == 5 ? 'lg:pr-0 ' : '' }`}>
                          <div className={`w-full h-[60vw] lg:h-[22vw] bg-black/25 ${shape} relative overflow-hidden will-change-transform group-hover:bg-orange transition-all ease-custom duration-[450ms] rounded-fix`}>
                            {e.image && (
                              <>
                              <SanityImage image={e.image} alt={`Portrait of ${e.name}`} className="grayscale mix-blend-multiply" />
                              <div className="absolute inset-0 w-full h-full bg-orange mix-blend-soft-light z-[10] opacity-0 transition-opacity ease-custom duration-[450ms]"></div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="w-11/12 lg:w-10/12 p-2">
                          <p className={`text-lg lg:text-xl ${e.jobTitle ? 'mb-[2px]' : 'mb-3' }`}><strong>{e.name}</strong></p>
                          {e.jobTitle && (
                            <p className="text-base/[1.2] mb-5 text-black text-opacity-60"><strong>{e.jobTitle}</strong></p>
                          )}
                          {e.text && (
                            <p className="text-base/[1.2]">{e.text}</p>
                          )}
                        </div>
                      </div>
                    )
                  })}

                  <div className={`col-span-3 lg:col-span-1 border-t lg:border-t-0 lg:border-r border-black pb-3 lg:pb-0 group`}>
                    <div className="w-full p-2 h-full flex flex-wrap">
                      <div className="mb-12 lg:mb-auto w-10/12 h-[33vw] lg:h-[22vw] flex items-end">
                        <div>
                          <p className={`text-2xl lg:text-3xl mb-2`}><strong>ARC Alumni</strong></p>
                          <p className="text-base/[1.2]">{studio.alumniText}</p>
                        </div>
                      </div>

                      <div className="mt-auto w-full lg:pt-[7vw]">
                        {studio.alumni?.map((e,i) => {
                          return (
                            <div key={i} className="flex mb-1">
                              <p className={`text-base/[1.2]`}><strong>{e.name}</strong></p>
                              {e.jobTitle && (
                                <p className="text-base/[1.2] text-black text-opacity-60 ml-auto text-right">{e.jobTitle}</p>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative w-full mb-3 border-b border-black pb-3">
                  <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-20 lg:mb-[13vw] inline-block">The Space</span>

                  <h2 className="text-[7.5vw]/[0.95] lg:text-[3.5vw]/[0.95] w-[90%] lg:w-[82%] mb-0 pb-0">{studio.theSpaceHeading}</h2>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-8/12 lg:pr-3 mb-3 lg:mb-0">
                    {/* <Image
                      src="/images/studio-01.png"
                      width={2100}
                      height={1488}
                      className="w-full mix-blend-multiply"
                    /> */}

                    {/* <div className="rounded-tr-[30vw] lg:rounded-tr-[20vw] relative overflow-hidden h-[68vw] lg:h-[45vw] mix-blend-multiply bg-black/15 will-change-transform">
                      <SanityImage
                        image={studio.theSpaceImage}
                        alt="All of the members of the Arc Design Studio team"
                        className="grayscale mix-blend-multiply"
                      />
                    </div> */}

                    <CornerScroller
                      layout="bottomLeft"
                      image={studio.theSpaceImage}
                      height="h-[68vw] lg:h-[45vw]"
                      offset={["-100vh", "0vh"]}
                      amount="500px"
                    />
                  </div>
                  <div className="flex-1 lg:border-l lg:border-black lg:pl-3 flex flex-col">
                    <div className="content w-full lg:w-2/3 max-w-[400px] mb-3 lg:mb-0">
                      <p>{studio.theSpaceText}</p>
                    </div>

                    <div className="mt-auto flex items-end">
                      <div className="w-1/2">
                        <a href="https://www.arc-space.co.uk/" target="_blank" rel="noopener noreferrer" className="bg-orange text-white p-2 px-4 rounded-full inline-block group relative overflow-hidden">
                          <span className="block relative z-[10] overflow-hidden">
                            <span className="block will-change-transform translate-y-0 group-hover:translate-y-[-100%] transition-transform ease-custom duration-[400ms]">See Arc Space</span>
                            <span className="block will-change-transform translate-y-full absolute inset-0 group-hover:translate-y-0 transition-transform ease-custom duration-[400ms]">See Arc Space</span>
                          </span>
                          <span className="absolute inset-0 z-[1] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[400ms]">
                            <span className="block w-[10px] h-[10px] rounded-full bg-gradient-radial from-black/10 via-black/10 to-transparent transition-all ease-custom duration-[400ms] group-hover:scale-[14]"></span>
                          </span>
                        </a>
                      </div>

                      <IconLogo className="hidden lg:block w-[33%] lg:w-[40%] ml-auto max-w-[180px]" />
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