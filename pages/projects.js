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
import { projects } from '@/helpers/projects'
import Project from '@/components/project'
const pageService = new SanityPageService(studioQuery)

export default function Projects(initialData) {
  const { data: { studio, contact }  } = pageService.getPreviewHook(initialData)()
  return (
    <Layout>
      <NextSeo title={"Projects"} />
      
      <LazyMotion features={domAnimation}>
        <m.div
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <main className="pb-3 pt-14 lg:pt-16">
            <a href="mailto:enquiry@arcdesignstudio.co.uk" target="_blank" rel="noopener noreferrer" className="bg-orange text-white p-2 px-4 rounded-full inline-block group overflow-hidden fixed bottom-3 right-3 z-[100]">
              <span className="block relative z-[10] overflow-hidden">
                <span className="block will-change-transform translate-y-0 group-hover:translate-y-[-100%] transition-transform ease-custom duration-[400ms]">Get in touch</span>
                <span className="block will-change-transform translate-y-full absolute inset-0 group-hover:translate-y-0 transition-transform ease-custom duration-[400ms]">Get in touch</span>
              </span>
              <span className="absolute inset-0 z-[1] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[400ms]">
                <span className="block w-[10px] h-[10px] rounded-full bg-gradient-radial from-black/10 via-black/10 to-transparent transition-all ease-custom duration-[400ms] group-hover:scale-[14]"></span>
              </span>
            </a>
            <Container>
              <m.article variants={fade} className="relative z-[1]">
                <div className="pb-3">
                  <h1 className="text-[10vw]/[0.95] lg:text-[5.5vw]/[0.95] w-[100%] lg:w-[80%] mb-16 lg:mb-[15vw]">A selection of our recent projects across residential, commercial, and civic spaces.</h1>
                </div>

                <div className="mb-3">
                  {projects.map((e, i) => {
                    return (
                      <Project
                        i={i}
                        title={e.title}
                        images={[{ image: ''}, { image: ''}, { image: '' }]}
                        tags={e.tags}
                        price={e.price}
                        type={e.type}
                      />
                    )
                  })}
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