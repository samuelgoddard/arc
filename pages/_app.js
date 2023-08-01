import '@/styles/main.css'
import { AnimatePresence, color } from 'framer-motion'
import { useRouter } from 'next/router'
import { DefaultSeo } from 'next-seo'
import SEO from '@/helpers/seo.config';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis'
import { Suisse } from '@/helpers/fonts';
import Header from '@/components/header';

export default function App({ Component, pageProps }) {
  const router = useRouter()
  let colorTheme = 'text-black bg-off-white selection:bg-black selection:text-off-white'

  router.asPath == '/studio' && (
    colorTheme = 'text-black bg-grey selection:bg-black selection:text-grey' 
  )
  
  router.asPath == '/process' && (
    colorTheme = 'text-black bg-light-orange selection:bg-black selection:text-light-orange' 
  )

  return (
    <ReactLenis root options={{ lerp: 0.125 }}>
      <DefaultSeo {...SEO} /> 

      <div className={`${Suisse.variable} font-sans transition-colors ease-custom duration-[300ms] ${colorTheme}`}>
        <Header colorTheme={colorTheme} />
        
        <div className="grain"></div>

        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ReactLenis>
  )
}