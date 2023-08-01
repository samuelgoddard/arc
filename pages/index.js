import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="block">
            <Container>
              <m.div variants={fade} className="h-[calc(100vh-16px)] w-full mb-3">
                <div className="w-full h-full border-b border-black relative flex items-start lg:items-center justify-center pt-24 lg:pt-0">
                  <div className="flex absolute top-[60vw] lg:top-[45%] left-0 right-0 w-full text-[14vw]/none lg:text-[8vw]/none text-white z-[10]">
                    <span className="block mr-auto">A</span>
                    <span className="block mx-auto">R</span>
                    <span className="block ml-auto">C</span>
                  </div>

                  <div className="w-[90vw] lg:w-[55vw] max-w-[85vh] lg:translate-y-[-3vw] z-[1]">
                    <Image
                      src="/images/hero-home.png"
                      width={1570}
                      height={1352}
                      className="w-full will-change-transform"
                      priority
                    />
                  </div>

                  <span className="absolute bottom-3 left-0 w-[80%] max-w-[480px] text-base/tight hidden lg:block">ARC Design Studio is a RIBA Chartered architecture practice based in Nottingham, UK. We are a diverse community of thinkers, designers and makers.</span>

                  <div className="absolute bottom-3 left-0 lg:left-auto lg:right-0">
                    <span className="block lg:hidden w-[80%] max-w-[480px] text-base/tight mb-8 lg:mb-0">ARC Design Studio is a RIBA Chartered architecture practice based in Nottingham, UK. We are a diverse community of thinkers, designers and makers.</span>

                    <div className="flex space-x-3 items-end mix-blend-color-burn">
                      <div className="w-[100px] mix-blend-color-burn">
                        <Image
                          src="/images/riba.jpg"
                          width={174}
                          height={82}
                          className="w-full"
                          priority
                        />
                      </div>
                      <div className="w-[140px] mb-[5px] mix-blend-color-burn">
                        <Image
                          src="/images/arb.jpg"
                          width={250}
                          height={62}
                          className="w-full"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
              
              <m.article variants={fade} className="w-full">
                <div className="w-full border-b border-black pb-3 mb-3 relative z-[10]">
                  <h1 className="text-[8vw]/[0.95] lg:text-[5.5vw]/[0.95] w-[95%] lg:w-[90%] mb-16 lg:mb-32">Creating a healthier, more sustainable relationship between people & place.</h1>
                  <div className="grid grid-cols-2">
                    <div className="col-span-2 lg:col-span-1 mb-6 lg:mb-0 bg-off-white">
                      <Image
                        src="/images/home-01.png"
                        width={1394}
                        height={1428}
                        className="w-full mix-blend-multiply"
                      />
                    </div>

                    <div className="col-span-2 lg:col-span-1 flex lg:items-center lg:justify-center">
                      <div className="w-11/12 lg:w-8/12 max-w-[500px]">
                        <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-6 lg:mb-10 inline-block">Overview</span>
                        <div className="content mb-6 lg:mb-10 indent-12">
                          <p>As Architects, the output of our trade is typically a portfolio of built projects - many of which will still be standing long after our own lifetimes. As such, we feel that it is our responsibility to consider the long term impact of the decisions that we make in practice. By looking at each and every design in this context we can try to make sure that the buildings which we create do not burden future generations by contributing to the challenges of our own time. Our ambition is to make sure that the world we leave behind is an enhancement on the one that we inherited and we do not believe that this has to compromise our current quality of life. We can make a positive contribution to our personal health and wellbeing, as well as that of our wider society, through thoughtful, intelligent design whilst ensuring the long term health of our planet.</p>
                        </div>

                        <Link scroll={false} href="/process" className="bg-black text-white p-2 px-4 rounded-full inline-block">Our Process</Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full pb-0">
                  <div className="relative w-full mb-3 border-b border-black pb-3">
                    <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-20 lg:mb-[15vw] inline-block">Overview</span>

                    <h2 className="text-[5.5vw]/[0.95] lg:text-[3.5vw]/[0.95] w-[80%] lg:w-[82%] mb-0 pb-0">ARC Design Studio was founded on the simple idea that architecture can be both ambitious, and used as a tool for the common good.</h2>
                    <span className="block absolute bottom-3 right-0 text-orange w-[10vw] lg:w-[15.5vw] z-0">
                    <svg className="w-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 238 587">
                      <path fill="currentColor" d="M237.846 587H126.204V148.522H0V72.476c84.945-2.427 124.586-8.09 152.901-72.001h84.945V587Z"/>
                    </svg>

                    </span>
                  </div>
                  <div className="grid grid-cols-3 lg:gap-3 mb-12 lg:mb-[7vw]">
                    <div className="col-span-3 lg:col-span-1 mb-6 lg:mb-0 border-b lg:border-b-0 lg:border-r border-black pb-3 lg:pb-0">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[12vw]">1</span>

                      <div className="w-10/12">
                        <p className="text-lg lg:text-xl mb-3"><strong>People Power</strong></p>
                        
                        <p className="text-base/[1.2]">We are strong believers in collaboration - a problem shared is a problem halved. Our network of expertise, from structural engineers to contractors, product manufacturers and more, ensures our projects are continually optimised, and have the right blend of people on hand to see it through to a successful completion.</p>
                      </div>
                    </div>

                    <div className="col-span-3 lg:col-span-1 mb-6 lg:mb-0 border-b lg:border-b-0 lg:border-r border-black pb-3 lg:pb-0">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[12vw]">2</span>

                      <div className="w-10/12">
                        <p className="text-lg lg:text-xl mb-3"><strong>Planet above all else</strong></p>
                        
                        <p className="text-base/[1.2]">Our ambition is simple: to use our practice to promote long-term thinking; ensuring that the world we leave behind is an enhancement on the one that we inherited. Recognising the enormous environmental impact of our industry, we do not want to sit back and contribute to the business-as-usual approach to architecture.</p>
                      </div>
                    </div>

                    <div className="col-span-3 lg:col-span-1 mb-6 lg:mb-0 pb-3 lg:pb-0">
                      <span className="w-8 h-8 lg:w-10 lg:h-10 bg-black rounded-full flex items-center justify-center text-off-white text-lg lg:text-xl mb-3 lg:mb-[12vw]">3</span>

                      <div className="w-10/12">
                        <p className="text-lg lg:text-xl mb-3"><strong>Respecting the craft</strong></p>
                        
                        <p className="text-base/[1.2]">As part of our dedication to self-improvement as a studio, we share our time between practice and academia, testing and evolving our approach to ensure that our services are always informed by the very latest thinking and methods. We believe this systematic approach is key to delivering great work.</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end justify-end">
                    <div className="w-full lg:w-7/12">
                      <Image
                        src="/images/home-02.png"
                        width={2082}
                        height={1182}
                        className="w-full mix-blend-multiply"
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
