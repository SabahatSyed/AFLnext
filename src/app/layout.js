import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/app/theme-provider";
import Header from "@/components/header";

import Head from "next/head";
// import { switchThemeDuration } from "./constants";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AFL",
  description: "AFL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Home/logo.svg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Header /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
