import '@/styles/main.css'
import { AnimatePresence } from 'framer-motion'
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

  router.asPath == '/projects' && (
    colorTheme = 'text-black bg-white selection:bg-black selection:text-white' 
  )

  return (
    <ReactLenis root options={{ lerp: 0.125 }}>
      <DefaultSeo {...SEO} /> 

      <div className={`${Suisse.variable} font-sans transition-colors ease-custom duration-[330ms] ${colorTheme}`}>
        { pageProps.preview && (<div className={'fixed bottom-0 left-0 w-auto px-3 py-2 bg-orange text-white justify-center flex z-[1000000] uppercase font-sans text-sm m-3'}>Preview Mode - <a className={'px-1 underline'} href={`/api/exit-preview?currentRoute=${router.route}`}>Click To Exit</a></div>)}

        <Header colorTheme={colorTheme} />
        
        <div className="grain"></div>

        <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </div>
    </ReactLenis>
  )
}