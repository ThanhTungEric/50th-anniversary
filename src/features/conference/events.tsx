import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"
import { Card, CardContent } from "@mui/material"

import eventImage from "../../assets/events.png"

export function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-white"
      ref={ref}
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="text-6xl md:text-8xl font-bold text-blue-600 mr-4">
              EVENTS
            </div>
            <div className="text-right">
              <div className="text-2xl md:text-3xl text-teal-500 font-medium">
                of
              </div>
              <div className="text-4xl md:text-6xl font-bold text-teal-600">
                2025
              </div>
            </div>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
        </motion.div>

        {/* Vertical Layout: Top Card → Image → Bottom Card */}
        <div className="flex flex-col items-center gap-12 mb-16">
          {/* Top Event */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl"
          >
            <Card className="border-0 bg-gradient-to-br from-yellow-50 to-orange-50 border-l-4 border-l-yellow-500">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Pre-Event Workshop - July 2025
                </h3>
                <p className="text-gray-600">
                  A hands-on workshop on hydrogen technologies, bringing
                  together industry leaders and students to collaborate on
                  real-world challenges.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Middle Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={eventImage}
                alt="Green Hydrogen Hub Viet Nam Events"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Bottom Event */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-3xl"
          >
            <Card className="border-0 bg-gradient-to-br from-red-50 to-pink-50 border-l-4 border-l-red-500">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-red-600" />
                  <span className="text-red-600 font-semibold">
                    Featured Event
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Grand Opening - October 2025
                </h3>
                <p className="text-gray-600">
                  Join us for the official opening ceremony of the Green
                  Hydrogen Hub Vietnam and the Vietnam Hydrogen Symposium.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
