import React from "react"
import { Box } from "@mui/material"

import "./../styles/conference.css" // note relative path



import { Hero } from "../features/conference/hero"
import { About } from "../features/conference/about"
import { WhatWeOffer } from "../features/conference/whatweoffer"
import { Events } from "../features/conference/events2"
import { Partners } from "../features/conference/partners"
// import { Contact } from "../features/conference/contact"

const Conference: React.FC = () => {
  return (
    <Box className="conference-wrapper min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white">
      <Hero />
      <About />
      <WhatWeOffer />
      <Events />
      <Partners />
    </Box>
  )
}

export default Conference
