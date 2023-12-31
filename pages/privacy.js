import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import { fade } from '@/helpers/transitions'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import IconLogo from '@/icons/logo.svg'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { privacyQuery } from '@/helpers/queries'
import SanityPageService from '@/services/sanityPageService'
const pageService = new SanityPageService(privacyQuery)
import {PortableText} from '@portabletext/react'

export default function Privacy(initialData) {
  const { data: { privacy, contact }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={privacy.title} />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="pb-3 pt-14 lg:pt-16">
            <Container>
              <m.article variants={fade}>
                <div className="border-b border-black pb-3 mb-3">
                  <h1 className="text-[10vw]/[0.95] lg:text-[5.5vw]/[0.95] w-[100%] lg:w-[80%] mb-16 lg:mb-[15vw]">Our privacy policy.</h1>
                </div>

                <div className="mb-3 pb-3 border-b border-black">
                  <div className="content w-[90%] lg:w-[75%] max-w-[720px]">
                  <PortableText
                    className="content"
                    value={privacy.content}
                  />
                  </div>
                </div>                

                <div className="flex flex-wrap">
                  <div className="w-full lg:w-8/12 lg:pr-3 mb-3 lg:mb-0">
                    <div className="rounded-br-[50vw] lg:rounded-br-[25vw] relative overflow-hidden h-[68vw] lg:h-[40vw] mix-blend-multiply bg-black/5">
                      <Image
                        src="/images/process-02.png"
                        quality={20}
                        fill
                        className="w-full absolute inset-0 h-full mix-blend-multiply object-center object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1 lg:border-l lg:border-black lg:pl-3 flex flex-col">
                    <div className="content w-full lg:w-2/3 max-w-[400px] mb-3 lg:mb-0">
                      <p>We feel that it is our responsibility to consider the long term impact of the decisions that we make in practice. By looking at each and every design in this context we can try to make sure that the buildings which we create do not burden future generations by contributing to the challenges of our own time.</p>
                    </div>

                    <div className="mt-auto flex items-end">
                      <div className="w-1/2">
                        <Link scroll={false} href="/contact" className="bg-orange text-white p-2 px-4 rounded-full inline-block">Contact Us</Link>
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