import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import IconLogo from '@/icons/logo.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'

export default function Studio() {
  return (
    <Layout>
      <NextSeo title="Studio" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="pb-3 pt-14 lg:pt-16">
            <Container>
              <m.article variants={fade}>
                <div className="border-b border-black pb-3">
                  <h1 className="text-[10vw]/[0.95] lg:text-[5.5vw]/[0.95] w-[100%] lg:w-[80%] mb-16 lg:mb-[15vw]">A friendly, approachable team of architects, technicians, and construction experts.</h1>

                  <div className="flex flex-wrap items-end w-[95%] lg:w-[80%]">
                    <div className="w-full lg:w-auto">
                      <span className="bg-black/10 p-1 font-mono uppercase text-xs/none inline-block mb-3 lg:mb-0 mr-3">The Team</span>
                    </div>

                    <div className="content flex-1">
                      <p>The core team at ARC comes from an eclectic background of Architects, Developers, Technologists and Construction specialists. We manage a much larger network of contractors, engineers and specialists who we have spent years building strong relationships with. Between our core team and our wider network we are perfectly placed to design, detail and develop projects of scale across the country.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 mb-3 border-b border-black">
                  {[...Array(8)].map((e, i) => {
                    return (
                      <div key={i} className={`col-span-3 lg:col-span-1 border-b border-black pb-3 lg:pb-0 ${ (((i+1)%3) === 0) ? '' : 'lg:border-r' } ${i == 6 || i == 7 ? 'lg:border-b-0' : '' } ${i+1 == 8 ? 'border-b-0' : '' }`}>
                        <div className={`mb-3 lg:mb-[7vw] py-2 ${i == 0 || i == 3 || i == 6 ? 'lg:p-2 lg:pl-0' : 'lg:p-2' } ${i == 2 || i == 5 ? 'lg:pr-0 ' : '' }`}>
                          <div className="w-full h-[45vw] lg:h-[17.5vw] bg-black/10"></div>
                        </div>
                        <div className="w-11/12 lg:w-10/12 p-2">
                          <p className="text-lg lg:text-xl mb-3"><strong>Ewan Cassel</strong></p>
                          
                          <p className="text-base/[1.2]">We are strong believers in collaboration - a problem shared is a problem halved. Our network of expertise, from structural engineers to contractors, product manufacturers and more, ensures our projects are continually optimised, and have the right blend of people on hand to see it through to a successful completion.</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                <div className="relative w-full mb-3 border-b border-black pb-3">
                  <span className="bg-black/10 p-1 font-mono uppercase text-xs/none mb-20 lg:mb-[13vw] inline-block">The Space</span>

                  <h2 className="text-[7.5vw]/[0.95] lg:text-[3.5vw]/[0.95] w-[90%] lg:w-[82%] mb-0 pb-0">We share our spacious studio, the aptly-named ARC Space, with a host of local creative talent, to foster collaboration and community spirit.</h2>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-8/12 lg:pr-3 mb-3 lg:mb-0">
                    <Image
                      src="/images/studio-01.png"
                      width={2100}
                      height={1488}
                      className="w-full mix-blend-multiply"
                    />
                  </div>
                  <div className="flex-1 lg:border-l lg:border-black lg:pl-3 flex flex-col">
                    <div className="content w-full lg:w-2/3 max-w-[400px] mb-3 lg:mb-0">
                      <p>We feel that it is our responsibility to consider the long term impact of the decisions that we make in practice. By looking at each and every design in this context we can try to make sure that the buildings which we create do not burden future generations by contributing to the challenges of our own time.</p>
                    </div>

                    <div className="mt-auto flex items-end">
                      <div className="w-1/2">
                        <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="bg-orange text-white p-2 px-4 rounded-full inline-block">See Arc Space</a>
                      </div>

                      <IconLogo className="hidden lg:block w-[33%] lg:w-[40%] ml-auto max-w-[180px]" />
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
