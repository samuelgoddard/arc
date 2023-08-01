import FancyLink from '@/components/fancyLink'
import Container from '@/components/container'
import IconLogo from '@/icons/logo.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import Image from 'next/image'

export default function Header({ colorTheme }) {
  const router = useRouter()
  const [contactOpen, setContactOpen] = useState(false)
  const contactToggle = () => {
    if (contactOpen) {
      setContactOpen(false)
    } else {
      setContactOpen(true)
    }
  }
  return (
    <LazyMotion features={domAnimation}>
      <header className={`py-3 border-b border-black fixed top-0 left-0 right-0 w-full z-[999] transition-colors ease-custom duration-[300ms] ${colorTheme}`}>
        <Container>
          <div className="flex flex-wrap items-center">
            <Link scroll={false} href="/" className="flex space-x-1 items-end mr-auto">
              <IconLogo className="w-[25px] lg:w-[28px]" />
              <span className="block text-base/none lg:text-xl/none font-medium leading-none">Arc Design Studio</span>
            </Link>

            <div className="mx-auto flex space-x-1 text-base/none lg:text-xl/none font-medium">
              <a href="mailto:email@email.com" a11yText="Contact us by email" className="hidden lg:block">Email,</a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" a11yText="Visit our Instagram profile" className="hidden lg:block">Instagram</a>
            </div>

            <nav className="ml-auto flex space-x-1 text-base/none lg:text-xl/none font-medium w-auto">
              <FancyLink destination="/" a11yText="Navigate to the home page" active={router.asPath == '/'} label="Overview," className="hidden lg:block" />

              <FancyLink destination="/studio" a11yText="Navigate to the studio page" active={router.asPath == '/studio'} label="Studio," className="hidden lg:block" />

              <FancyLink destination="/process" a11yText="Navigate to the process page" active={router.asPath == '/process'} label="Process," className="hidden lg:block" />
              
              <button a11yText="Navigate to the contact page" className="hidden lg:block" onClick={contactToggle}>Contact</button>

              <FancyLink destination="/menu" a11yText="Navigate to the menu" label="Menu" className="block lg:hidden" />
            </nav>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {contactOpen && (
          <>
            <m.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
              exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
              className="z-[1000] fixed inset-0 bg-black/60 w-full h-full"
              onClick={contactToggle}
            ></m.button>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
              exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
              className="z-[1001] fixed bottom-0 right-0 w-[90%] lg:w-[65%] bg-white p-4"
            >
              <div className="w-full border-b border-black mb-4 pb-0">
                <h2 className="text-[4.3vw]/[1]">Get in touch.</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 flex flex-col">
                  <div className="content border-b border-black pb-4 mb-4">
                    <p className="w-[90%]">We&apos;re here to help! If you have any questions, comments, or requests, please don&apos;t hesitate to contact us. You can reach us by any of the methods below. We&apos;ll get back to you as soon as possible.</p>

                    <p className="w-[90%]">Email us: enquiries@arcdesignstudio.co.uk</p>
                    <p className="w-[90%]">Phone number: 01234 567 890</p>
                    <p className="w-[90%]">Address: ARC Space, Western House, Nottingham, NG1 3AZ</p>
                  </div>

                  <div className="mt-auto">
                    <p className="font-medium mb-3">How can we help?</p>
                    <form>
                      <textarea className="w-full bg-black/5 p-4" rows={8} placeholder="Please leave a name, contact email or number, and a brief overview of your enquiry." />

                      <button type="submit" className="bg-orange text-white p-2 px-4 rounded-full inline-block">Send Message</button>
                    </form>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <Image
                    src="/images/map.jpg"
                    width={970}
                    height={1158}
                    className="w-full"
                  />
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}