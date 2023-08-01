import Container from '@/components/container'
import FancyLink from './fancyLink'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="border-t border-black py-3">
          <div className="flex flex-wrap text-xs">
            <div className="space-x-1 mb-3 md:mb-0 hidden lg:flex">
              <span className="block text-base/none lg:text-lg/none ">© {new Date().getFullYear()}, Arc Design Studio Limited — 13116151</span>
            </div>

            <div className="lg:ml-auto w-full lg:w-auto">
              <nav className="ml-auto lg:flex lg:space-x-3 text-base/none lg:text-lg/none  w-auto">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block mb-2 lg:mb-0">Instagram</a>

                <span className="hidden lg:block text-xs/none lg:text-xs/none translate-y-[3px]">&bull;</span>

                <FancyLink destination="/" a11yText="Navigate to the Privacy policy page" label="Privacy Policy" className="block mb-2 lg:mb-0" />

                <span className="hidden lg:block text-xs/none lg:text-xs/none translate-y-[3px]">&bull;</span>

                <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer" className="block mb-2 lg:mb-0">Site By ShiftWalk</a>
              </nav>

              <div className="flex lg:hidden space-x-1">
                <span className="block text-base/none lg:text-lg/none ">© {new Date().getFullYear()}, Arc Design Studio Limited — 13116151</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}