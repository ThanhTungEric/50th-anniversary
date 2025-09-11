import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Button, Box, Typography, Container } from "@mui/material"
import { ImageWithFallback } from "./imgFallback/ImageWithFallback"

import Logo from "../../assets/conference/logo.png"
import BgImage from "../../assets/conference/bg3.png" 


export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top,
        behavior: "smooth",
      })
    }
  }
  const scrollToEvents = () => {
    const element = document.getElementById("events")
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top,
        behavior: "smooth",
      })
    }
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={BgImage}
          alt="Sustainable Energy Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-blue-900/30 to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-green-400/20 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-center">
                <img
                  src={Logo}
                  alt="Green Hydrogen Hub Viet Nam"
                  className="h-42 md:h-50 object-contain"
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Driving Viet Nam's Green Hydrogen Future
          </motion.p>

          <motion.p
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A central platform for meetings, workshops and technological showcases, 
            based at the Vietnamese-German University (VGU) campus in Binh Duong.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              variant="contained"
              size="large"
              onClick={scrollToAbout}
              sx={{
                background: 'linear-gradient(45deg, #4ade80 30%, #60a5fa 90%)',
                px: 4,
                py: 1.5,
                '&:hover': {
                  background: 'linear-gradient(45deg, #22c55e 30%, #3b82f6 90%)',
                }
              }}
            >
              Learn More
            </Button>
            <Button 
              onClick={scrollToEvents}
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                px: 4,
                py: 1.5,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                }
              }}
            >
              View Events 2025
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  )
}