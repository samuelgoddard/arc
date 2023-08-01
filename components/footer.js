import Container from '@/components/container'
import FancyLink from './fancyLink'

export default function Footer() {
  return (
    <footer className="">
      <Container>
        <div className="border-t border-black py-3">
          <div className="flex flex-wrap text-xs">
            <div className="flex space-x-1 mb-3 md:mb-0">
              <span className="block text-base/none lg:text-lg/none font-medium">© {new Date().getFullYear()}, Arc Design Studio Limited — 13116151</span>
            </div>

            <div className="md:ml-auto w-full md:w-auto">
              <nav className="ml-auto flex space-x-1 lg:space-x-3 text-base/none lg:text-lg/none font-medium w-auto">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>

                <span className="block text-xs/none lg:text-xs/none translate-y-[3px]">&bull;</span>

                <FancyLink destination="/" a11yText="Navigate to the Privacy policy page" label="Privacy Policy" className="" />

                <span className="block text-xs/none lg:text-xs/none translate-y-[3px]">&bull;</span>

                <a href="https://shiftwalk.studio" target="_blank" rel="noopener noreferrer">Site By ShiftWalk</a>
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}