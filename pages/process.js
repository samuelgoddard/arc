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
                  <h1 className="text-[10vw]/[0.9] lg:text-[5.5vw]/[0.9] w-[100%] lg:w-[90%]">Recognising the value of social engagement, we work to build consensus through a transparent, collaborative process.</h1>
                </div>

                <div className="w-full border-b border-black pb-3 mb-3 relative z-[10]">
                  <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0">
                      <div className="rounded-tr-[50vw] lg:rounded-tr-[25vw] relative overflow-hidden h-[75vw] lg:h-[50vw] mix-blend-multiply bg-black/5">
                        <Image
                          src="/images/process-01.png"
                          fill
                          quality={20}
                          alt="Some members of the Arc Design Studio working on an easel"
                          className="w-full absolute inset-0 h-full mix-blend-multiply object-center object-cover"
                        />
                      </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex lg:items-center lg:justify-center">
                      <div className="w-11/12 lg:w-8/12 max-w-[500px]">
                        <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-6 lg:mb-10 inline-block">Our View</span>
                        <div className="content mb-6 lg:mb-10 indent-12">
                          <p>As Architects, the output of our trade is typically a portfolio of built projects - many of which will still be standing long after our own lifetimes. As such, we feel that it is our responsibility to consider the long term impact of the decisions that we make in practice. By looking at each and every design in this context we can try to make sure that the buildings which we create do not burden future generations by contributing to the challenges of our own time. Our ambition is to make sure that the world we leave behind is an enhancement on the one that we inherited and we do not believe that this has to compromise our current quality of life. We can make a positive contribution to our personal health and wellbeing, as well as that of our wider society, through thoughtful, intelligent design whilst ensuring the long term health of our planet.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full pb-0">
                  <div className="relative w-full mb-3 border-b border-black pb-3">

                    <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-8 lg:mb-10 inline-block">The Network</span>

                    <h2 className="text-[8vw]/[0.95] lg:text-[4.5vw]/[0.95] w-[90%] lg:w-[50%] mb-5 lg:mb-8 pb-0">A joined-up approach to problem solving.</h2>

                    <div className="w-full flex flex-wrap items-start">
                      <div className="w-full lg:w-5/12 order-2 lg:order-1 lg:pb-[15vw]">
                        <div className="content mb-6 lg:mb-10 indent-12 w-[85%] lg:w-[80%] max-w-[550px]">
                          <p>As Architects, the output of our trade is typically a portfolio of built projects - many of which will still be standing long after our own lifetimes. As such, we feel that it is our responsibility to consider the long term impact of the decisions that we make in practice. By looking at each and every design in this context we can try to make sure that the buildings which we create do not burden future generations by contributing to the challenges of our own time. Our ambition is to make sure that the world we leave behind is an enhancement on the one that we inherited and we do not believe that this has to compromise our current quality of life. We can make a positive contribution to our personal health and wellbeing, as well as that of our wider society, through thoughtful, intelligent design whilst ensuring the long term health of our planet.</p>
                        </div>

                        <ul className="leading-[1.2]">
                          <li>Architects</li>
                          <li>Project Managers</li>
                          <li>Developers</li>
                          <li>Technicians</li>
                          <li>Interior Designers</li>
                          <li>Property Consultants</li>
                          <li>Manufacturers</li>
                          <li>Graphic Designers</li>
                          <li>Visualisers</li>
                          <li>Investors</li>
                          <li>Structural Engineers</li>
                          <li>Civil Engineers</li>
                          <li>M&E Engineers</li>
                          <li>Heritage Specialists</li>
                          <li>Building Control</li>
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

                    <h2 className="text-[8vw]/[0.95] lg:text-[3.5vw]/[0.95] w-[95%] lg:w-[90%] mb-0 pb-0">We do not impose a templated, pre-defined approach on the work that we do. Instead, we look at each project afresh, with a series of focused appraisals that help to identity unique opportunities and constraints that will inform a considered response.</h2>
                  </div>

                  <div className="grid grid-cols-3 lg:gap-3 mb-3 lg:mb-3 border-b border-black">
                    <div className="col-span-3 lg:col-span-1 mb-6 lg:mb-0 border-b lg:border-b-0 lg:border-r border-black pb-3 lg:pb-0">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[12vw]">1</span>

                      <div className="w-10/12 lg:pb-3">
                        <p className="text-lg lg:text-xl mb-3"><strong>Understanding the brief</strong></p>
                        
                        <p className="text-base/[1.2]">We are strong believers in collaboration - a problem shared is a problem halved. Our network of expertise, from structural engineers to contractors, product manufacturers and more, ensures our projects are continually optimised, and have the right blend of people on hand to see it through to a successful completion.</p>
                      </div>
                    </div>

                    <div className="col-span-3 lg:col-span-1 mb-6 lg:mb-0 border-b lg:border-b-0 lg:border-r border-black pb-3 lg:pb-0">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[12vw]">2</span>

                      <div className="w-10/12 lg:pb-3">
                        <p className="text-lg lg:text-xl mb-3"><strong>Building the team</strong></p>
                        
                        <p className="text-base/[1.2]">Our ambition is simple: to use our practice to promote long-term thinking; ensuring that the world we leave behind is an enhancement on the one that we inherited. Recognising the enormous environmental impact of our industry, we do not want to sit back and contribute to the business-as-usual approach to architecture.</p>
                      </div>
                    </div>

                    <div className="col-span-3 lg:col-span-1 mb-6 lg:mb-0 pb-3 lg:pb-0">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[12vw]">3</span>

                      <div className="w-10/12 lg:pb-3">
                        <p className="text-lg lg:text-xl mb-3"><strong>Crafting the response</strong></p>
                        
                        <p className="text-base/[1.2]">As part of our dedication to self-improvement as a studio, we share our time between practice and academia, testing and evolving our approach to ensure that our services are always informed by the very latest thinking and methods. We believe this systematic approach is key to delivering great work.</p>
                      </div>
                    </div>
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

                      <div className="rounded-br-[50vw] lg:rounded-br-[25vw] relative overflow-hidden h-[68vw] lg:h-[40vw] mix-blend-multiply bg-black/5">
                        <Image
                          src="/images/process-02.png"
                          quality={20}
                          fill
                          alt="Some members of the Arc Design Studio in a meeting"
                          className="w-full absolute inset-0 h-full mix-blend-multiply object-center object-cover"
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
