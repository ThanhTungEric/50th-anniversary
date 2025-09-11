import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, Divider, Box, Grid } from "@mui/material"

import membersImage from "../../assets/sidewall.png"

// Logos
import Giz from "../../assets/conference/giz.png"
import Ahk from "../../assets/conference/ahk.png"
import Vgu from "../../assets/conference/vgu.png"
import Indefol from "../../assets/conference/indefol.png"
import Bosch from "../../assets/conference/bosch.png"
import Siemens from "../../assets/conference/siemens.png"
import Tuv from "../../assets/conference/tuv.png"
import Enertrag from "../../assets/conference/enertrag.png"
import Messer from "../../assets/conference/messer.png"
import IbConsulting from "../../assets/conference/ib-consulting.png"

import qrCode from "../../assets/conference/QR_Dang_ky_nhan_thong_tin.png"
import solar from "../../assets/conference/logo2.png"

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const partners = [
    { category: "Public Partner", description: "Deutsche Gesellschaft für Internationale Zusammenarbeit", logo: Giz },
    { category: "International Partner", description: "German-Vietnamese Chamber of Commerce", logo: Ahk },
    { category: "Educational Partner", description: "Vietnamese-German University", logo: Vgu },
    { category: "Technology Partner", description: "Industrial Solutions Provider", logo: Indefol },
    { category: "Technology Partner", description: "Global Technology Solutions", logo: Bosch },
    { category: "Technology Partner", description: "Industrial Automation & Digitalization", logo: Siemens },
    { category: "Certification Partner", description: "Technical Safety & Certification", logo: Tuv },
    { category: "Energy Partner", description: "Renewable Energy Solutions", logo: Enertrag },
    { category: "Industrial Partner", description: "Industrial Gases Solutions", logo: Messer },
    { category: "Consulting Partner", description: "Strategic Business Consulting", logo: IbConsulting },
  ]

  const partnerRows = [
    partners.slice(0, 3),
    partners.slice(3, 7),
    partners.slice(7, 10),
  ]

  return (
    <section id="partners" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            OUR <span className="text-green-600">PARTNERS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Working together with leading organizations to drive Vietnam&apos;s green hydrogen future
          </p>
        </motion.div>

        {/* Members Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={membersImage}
              alt="Green Hydrogen Hub Viet Nam Our Members"
              className="w-full h-auto"
            />
          </div>
        </motion.div>

        {/* Partnership Model */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Public-Private Partnership Model
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The Hub operates as a{" "}
              <span className="font-semibold text-green-600">
                public-private partnership (PPP)
              </span>{" "}
              project with GIZ as the public partner and a consortium of
              international & Vietnamese companies as the private partner.
            </p>
          </div>
        </motion.div>

        {/* Key Partners (3-4-3 layout) */}
        {partnerRows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 + rowIndex * 0.2 }}
            className="grid gap-8 mb-12"
            style={{ gridTemplateColumns: `repeat(${row.length}, minmax(0, 1fr))` }}
          >
            {row.map((partner, idx) => (
              <Card
                key={idx}
                elevation={0}
                sx={{ border: "none", boxShadow: "none" }}
                className="h-full hover:shadow-xl transition-all duration-300 group bg-gradient-to-br from-white to-gray-50"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center items-center h-16">
                    <img
                      src={partner.logo}
                      alt={partner.category}
                      className="h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-sm text-blue-600 font-medium mb-2">{partner.category}</div>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        ))}
        <Divider sx={{ height: 3, border: "none", borderRadius: 1, background: "linear-gradient(90deg, #10b981, #06b6d4)", my: 3, }} />
        {/* Stay Connected QR Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 mt-8"
        >
          {/* Solar image with pulsing */}
          <motion.img
            src={solar}
            alt="Solar"
            className="w-54 h-32 md:w-100 md:h-50 object-contain"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <Box>
            <Grid container spacing={2} alignItems="center">
              {/* Left: Text */}
              <Grid item xs={12} md={6}>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-blue-700 mb-3">
                    Stay connected
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Scan the QR code now!
                  </p>
                </div>
              </Grid>

              {/* Right: QR Code */}
              <Grid item xs={12} md={6} className="flex justify-center md:justify-start">
                <img
                  src={qrCode}
                  alt="Stay connected QR"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </div>
    </section>
  )
}
