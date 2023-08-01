import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import IconLogo from '@/icons/logo.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

export default function Privacy() {
  return (
    <Layout>
      <NextSeo title="Privacy Policy" />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <Container>
            <main>
              <m.div variants={fade} className="h-[calc(100vh-12px)] w-full mb-3">
                <div className="w-full h-full relative flex items-start lg:items-center justify-center pt-24 lg:pt-0">
                  <div className="flex absolute top-[60vw] lg:top-[45%] left-0 right-0 w-full text-[14vw]/none lg:text-[8vw]/none text-white z-[10]">
                    <span className="block mr-auto">4</span>
                    <span className="block mx-auto">0</span>
                    <span className="block ml-auto">4</span>
                  </div>

                  <div className="w-[90vw] lg:w-[55vw] max-w-[85vh] lg:translate-y-[-3vw] z-[1]">
                    <Image
                      src="/images/hero-home.png"
                      width={1570/2}
                      height={1352/2}
                      quality={50}
                      className="w-full will-change-transform"
                      alt="Arc Triangle"
                      priority
                    />
                  </div>

                  <span className="absolute bottom-0 left-0 w-[80%] max-w-[480px] text-base/tight hidden lg:block">Sorry... That page does not seem to exist</span>

                  <div className="absolute bottom-0 left-0 lg:left-auto lg:right-0">
                    <span className="block lg:hidden w-[85%] max-w-[480px] text-base/tight mb-8 lg:mb-0">Sorry... That page does not seem to exist</span>

                    <div className="flex space-x-3 items-end mix-blend-color-burn">
                      <Link scroll={false} href="/" className="bg-black text-white p-2 px-4 rounded-full inline-block">Back Home</Link>
                    </div>
                  </div>
                </div>
              </m.div>
            </main>
          </Container>
          
          <m.div variants={fade}>
            <Footer />
          </m.div>
        </m.div>
      </LazyMotion>
    </Layout>
  )
}
