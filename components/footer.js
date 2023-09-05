import Container from '@/components/container'
import FancyLink from './fancyLink'

export default function Footer({ contact }) {
  return (
    <footer className="">
      <Container>
        <div className="border-t border-black py-3">
          <div className="flex flex-wrap text-xs">
            <div className="space-x-1 mb-3 md:mb-0 hidden lg:flex">
              <span className="block text-base/none lg:text-lg/none ">© {new Date().getFullYear()}{contact && (<>, {contact.companyName} — {contact.companyNumber}</>)}</span>
            </div>

            <div className="lg:ml-auto w-full lg:w-auto">
              <nav className="ml-auto lg:flex lg:space-x-3 text-base/none lg:text-lg/none  w-auto">
                <a href="https://www.instagram.com/arc_ds/" target="_blank" rel="noopener noreferrer" className="block mb-2 lg:mb-0 group">Instagram <span className={`block border-b border-black translate-y-[3px] w-0 mx-auto lg:group-hover:w-[75%] transition-all ease-custom duration-[220ms]`}></span></a>

                <span className="hidden lg:block text-xs/none lg:text-xs/none translate-y-[3px]">&bull;</span>

                <FancyLink destination="/privacy" a11yText="Navigate to the Privacy policy page" label="Privacy Policy" className="block mb-2 lg:mb-0" />

                <span className="hidden lg:block text-xs/none lg:text-xs/none translate-y-[3px]">&bull;</span>

                <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer" className="block mb-2 lg:mb-0 group">Site By ShiftWalk <span className={`block border-b border-black translate-y-[3px] w-0 mx-auto lg:group-hover:w-[75%] transition-all ease-custom duration-[220ms]`}></span></a>
              </nav>

              <div className="flex lg:hidden space-x-1">
                <span className="block text-base/none lg:text-lg/none ">© {new Date().getFullYear()}{contact && (<>, {contact.companyName} — {contact.companyNumber}</>)}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}