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
  const [menuOpen, setMenuOpen] = useState(false)
  const contactToggle = () => {
    if (contactOpen) {
      setContactOpen(false)
    } else {
      setContactOpen(true)
    }
  }

  const menuToggle = () => {
    if (menuOpen) {
      setMenuOpen(false)
    } else {
      setMenuOpen(true)
    }
  }
  return (
    <LazyMotion features={domAnimation}>
      <header className={`py-3 border-b border-black fixed top-0 left-0 right-0 w-full z-[999] transition-colors ease-custom duration-[300ms] ${colorTheme}`}>
        <Container>
          <div className="flex flex-wrap items-center">
            <Link scroll={false} href="/" className="flex space-x-1 items-end mr-auto">
              <IconLogo className="w-[25px] lg:w-[28px]" />
              <span className="block text-base/none lg:text-xl/none  leading-none">Arc Design Studio</span>
            </Link>

            <div className="mx-auto flex space-x-1 text-base/none lg:text-xl/none ">
              <a href="mailto:email@email.com" className="hidden lg:block">Email,</a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hidden lg:block">Instagram</a>
            </div>

            <nav className="ml-auto flex space-x-1 text-base/none lg:text-xl/none  w-auto">
              <FancyLink destination="/" a11yText="Navigate to the home page" active={router.asPath == '/'} label="Overview," className="hidden lg:block" />

              <FancyLink destination="/studio" a11yText="Navigate to the studio page" active={router.asPath == '/studio'} label="Studio," className="hidden lg:block" />

              <FancyLink destination="/process" a11yText="Navigate to the process page" active={router.asPath == '/process'} label="Process," className="hidden lg:block" />
              
              <button className="hidden lg:block" onClick={contactToggle}>Contact</button>
              
              <button className="block lg:hidden" onClick={menuToggle}>Menu</button>
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
                <h2 className="text-[10vw]/[1] lg:text-[4.3vw]/[1] mb-4 pb-0">Get in touch.</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1 flex flex-col">
                  <div className="text-sm/[1.2] lg:text-base/[1.2] border-b border-black pb-4 mb-4">
                    <p className="w-[90%] mb-3 lg:mb-5">We&apos;re here to help! If you have any questions, comments, or requests, please don&apos;t hesitate to contact us. You can reach us by any of the methods below. We&apos;ll get back to you as soon as possible.</p>

                    <p className="w-[90%] mb-3 lg:mb-5"><strong>Email Us</strong>: enquiries@arcdesignstudio.co.uk</p>
                    <p className="w-[90%] mb-3 lg:mb-5"><strong>Phone number</strong>: 01234 567 890</p>
                    <p className="w-[90%] mb-3 lg:mb-5"><strong>Address</strong>: ARC Space, Western House, Nottingham, NG1 3AZ</p>
                  </div>

                  <div className="mt-auto">
                    <p className=" mb-3">How can we help?</p>
                    <form>
                      <textarea className="w-full placeholder:text-black/30 bg-black/5 p-4 mb-4 hidden lg:block text-sm/[1.2] lg:text-base/[1.2]" rows={8} placeholder="Please leave a name, contact email or number, and a brief overview of your enquiry." />

                      <textarea className="w-full placeholder:text-black/30 bg-black/5 p-3 mb-4 block lg:hidden text-sm/[1.2] lg:text-base/[1.2]" rows={3} placeholder="Please leave a name, contact email or number, and a brief overview of your enquiry." />

                      <button type="submit" className="bg-orange text-white p-2 px-4 rounded-full inline-block">Send Message</button>
                    </form>
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1 hidden lg:block">
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
        <AnimatePresence>
        {menuOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
              exit={{ opacity: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
              className="z-[999] fixed inset-0 bg-orange flex flex-col lg:hidden"
            >
              <div className="p-3 border-b border-black w-full z-[999] transition-colors ease-custom duration-[300ms] mb-auto">
                <div className="flex flex-wrap items-center">
                  <Link scroll={false} onClick={menuToggle} href="/" className="flex space-x-1 items-end mr-auto">
                    <IconLogo className="w-[25px] lg:w-[28px]" />
                    <span className="block text-base/none lg:text-xl/none  leading-none">Arc Design Studio</span>
                  </Link>

                  <nav className="ml-auto flex space-x-1 text-base/none lg:text-xl/none  w-auto">                    
                    <button className="block lg:hidden" onClick={menuToggle}>Close</button>
                  </nav>
                </div>
              </div>

              <div className="w-full border-black p-3 mb-auto">
                <nav className="mb-8">
                  <div className="overflow-hidden relative border-b border-t border-black">
                    <m.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.55, delay: 0.1, ease: [0.71,0,0.17,1] }}}
                      exit={{ y: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
                    >
                      {router.asPath == '/' && (
                        <span className="block absolute top-[50%] right-3 w-2 h-2 rounded-full bg-black"></span>
                      )}
                      <FancyLink onClick={menuToggle} destination="/" a11yText="Navigate to the home page" label="Overview" className="block text-[17vw]/[1] w-full text-left" />
                    </m.div>
                  </div>

                  <div className="overflow-hidden relative border-b border-black">
                    <m.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.55, delay: 0.1, ease: [0.71,0,0.17,1] }}}
                      exit={{ y: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
                    >
                      {router.asPath == '/studio' && (
                        <span className="block absolute top-[50%] right-3 w-2 h-2 rounded-full bg-black"></span>
                      )}
                      <FancyLink onClick={menuToggle} destination="/studio" a11yText="Navigate to the studio page" label="Studio" className="block text-[17vw]/[1] w-full text-left" />
                    </m.div>
                  </div>

                  <div className="overflow-hidden relative border-b border-black">
                    <m.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.55, delay: 0.1, ease: [0.71,0,0.17,1] }}}
                      exit={{ y: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
                    >
                      {router.asPath == '/process' && (
                        <span className="block absolute top-[50%] right-3 w-2 h-2 rounded-full bg-black"></span>
                      )}
                      <FancyLink onClick={menuToggle} destination="/process" a11yText="Navigate to the process page" label="Process" className="block text-[17vw]/[1] w-full text-left" />
                    </m.div>
                  </div>

                  <div className="overflow-hidden relative border-b border-black">
                    <m.div
                      initial={{ y: '100%' }}
                      animate={{ y: 0, transition: { duration: 0.55, delay: 0.1, ease: [0.71,0,0.17,1] }}}
                      exit={{ y: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
                    >
                      <button className="block text-[17vw]/[1] w-full text-left" onClick={contactToggle}>Contact</button>
                    </m.div>
                  </div>
                </nav>
              </div>
              
              <div className="p-3 w-full mt-auto mx-auto">
                <div className="overflow-hidden relative border-b border-black py-[6px]">
                  <m.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.55, delay: 0.1, ease: [0.71,0,0.17,1] }}}
                    exit={{ y: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
                  >
                    <a href="mailto:email@email.com" className="block text-[6.5vw]/[1]">Email</a>
                  </m.div>
                </div>
                
                <div className="overflow-hidden relative py-[6px]">
                  <m.div
                    initial={{ y: '100%' }}
                    animate={{ y: 0, transition: { duration: 0.55, delay: 0.1, ease: [0.71,0,0.17,1] }}}
                    exit={{ y: 0, transition: { duration: 0.55, ease: [0.71,0,0.17,1] }}}
                  >
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block text-[6.5vw]/[1]">Instagram</a>
                  </m.div>
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}