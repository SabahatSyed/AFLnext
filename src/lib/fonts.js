import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
})

export const magistral = localFont({
  src: '../../public/fonts/Magistral-Book.woff',
  variable: '--font-magistral',
})
export const magistraal = localFont({
  src: '../../public/fonts/Magistral-ExtraBold.woff',
  variable: '--font-magistraal',
})
