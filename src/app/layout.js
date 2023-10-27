import './globals.css'
import { ApolloWrapper } from '../lib/apollo-wrapper'
import { ThemeProvider } from '@/app/theme-provider'
import Header from '@/components/header'
import { magistraal, magistral, roboto } from '@/lib/fonts'

// import { switchThemeDuration } from "./constants";

export const metadata = {
  title: 'AFL',
  description: 'AFL',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/Home/logo.svg' />
      </head>

      <body
        className={`${magistral.variable} ${magistraal.variable} ${roboto.variable}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Header />
          <ApolloWrapper>{children}</ApolloWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
