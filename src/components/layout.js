import React from "react"
import { GlobalStyles } from '../styles'
import Navigation from './Navigation';
import "@fontsource/raleway"
import "@fontsource/roboto"

const Layout = () => {
  return (
    <main>
      <GlobalStyles />
      <Navigation />
    </main>
  )
}



export default Layout
