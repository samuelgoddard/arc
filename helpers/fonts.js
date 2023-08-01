import localFont from 'next/font/local'

export const Suisse = localFont({
  src: [
    {
      path: '../public/fonts/SuisseIntl-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SuisseIntl-SemiBold.woff2',
      weight: '500',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-Suisse',
})

export const SuisseMono = localFont({
  src: [
    {
      path: '../public/fonts/SuisseIntlMonoTrial.woff2',
      weight: '400',
      style: 'normal',
    }
  ],
  subsets: ['latin'],
  variable: '--font-SuisseMono',
})