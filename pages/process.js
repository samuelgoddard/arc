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
const pageService = new SanityPageService(processQuery)

export default function Process(initialData) {
  const { data: { process }  } = pageService.getPreviewHook(initialData)()
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
              <m.article variants={fade}>
                <div className="w-full border-b border-black pb-3 mb-3">
                  <h1 className="text-[10vw]/[0.9] lg:text-[5.5vw]/[0.9] w-[100%] lg:w-[90%]">{process.heroHeading}</h1>
                </div>

                <div className="w-full border-b border-black pb-3 mb-3 relative z-[10]">
                  <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0">
                      <div className="rounded-tr-[50vw] lg:rounded-tr-[25vw] relative overflow-hidden h-[75vw] lg:h-[50vw] bg-orange will-change-transform">
                        {/* <Image
                          src="/images/process-01.png"
                          fill
                          quality={20}
                          alt="Some members of the Arc Design Studio working on an easel"
                          className="w-full absolute inset-0 h-full mix-blend-multiply object-center object-cover"
                        /> */}
                        <div className="absolute inset-0 bg-orange opacity-80 z-10 mix-blend-soft-light will-change-transform"></div>
                        <SanityImage
                          image={process.ourViewImagee}
                          alt="Some members of the Arc Design Studio working on an easel"
                          className="grayscale mix-blend-multiply"
                        />
                      </div>
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
                            return (
                              <li key={i}>{e}</li>
                            )
                          })}
                        </ul>
                      </div>

                      <div className="w-full lg:w-7/12 order-1 lg:order-2 mb-8">
                        <Image
                          src="/images/process-map.png"
                          width={1912}
                          height={1594}
                          alt="A illustration of the Arc Design Studio ecosystem"
                          className="w-full"
                        />
                      </div>
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
                        <div key={i} className={`col-span-3 lg:col-span-1 mb-6 lg:mb-0 border-b lg:border-b-0 border-black pb-3 lg:pb-0 ${ i+1 == process.theResponseItems.length ? '' : 'lg:border-r' }`}>
                          {e.image && (
                            <div className="w-1/2 h-[28vw] lg:h-[10.5vw] relative my-12 lg:mt-[5vw] mb-[6vw]">
                              <SanityImage
                                image={e.image}
                                className="mix-blend-multiply"
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
                      <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="bg-orange text-white p-2 px-4 rounded-full inline-block">Get in touch</a>
                    </div>
                    <div className="w-full lg:w-7/12 order-1 lg:order-2 mb-3 lg:mb-0">
                      {/* <Image
                        src="/images/process-02.png"
                        width={2082}
                        height={1486}
                        className="w-full mix-blend-multiply"
                      /> */}

                      <div className="rounded-br-[50vw] lg:rounded-br-[25vw] relative overflow-hidden h-[68vw] lg:h-[40vw] mix-blend-multiply bg-black/10 will-change-transform">
                        <SanityImage
                          image={process.footerImage}
                          alt="Some members of the Arc Design Studio in a meeting"
                          className="grayscale mix-blend-multiply"
                        />
                        {/* <Image
                          src="/images/process-02.png"
                          quality={20}
                          fill
                          alt="Some members of the Arc Design Studio in a meeting"
                          className="w-full absolute inset-0 h-full mix-blend-multiply object-center object-cover"
                        /> */}
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
