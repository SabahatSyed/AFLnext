'use client'
import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
// import type { ThemeProviderProps } from "next-themes/dist/types";?

export function ThemeProvider({ children, ...props }) {
  return (
    <NextThemesProvider {...props}>
      <ProgressBar height='4px' color='#E34C0F' shallowRouting />
      {children}
    </NextThemesProvider>
  )
}
