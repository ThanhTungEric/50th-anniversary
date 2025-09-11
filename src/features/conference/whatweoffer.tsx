import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, GraduationCap, Network } from "lucide-react"
import { Card, CardContent } from "@mui/material"

export function WhatWeOffer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const offerings = [
    {
      icon: BookOpen,
      title: "Knowledge sharing",
      description: "Access cutting-edge green hydrogen knowledge & technologies",
      details: "Stay at the forefront of green hydrogen innovation with our comprehensive knowledge base and technology insights.",
      color: "from-orange-400 to-orange-500",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: GraduationCap,
      title: "Capacity building",
      description: "Gain valuable insights through exclusive green hydrogen webinars & training sessions",
      details: "Build expertise through hands-on training programs and expert-led webinars designed for industry professionals.",
      color: "from-blue-400 to-blue-500",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Network,
      title: "Networking",
      description: "Connect key players & discover green hydrogen partnership and joint venture opportunities",
      details: "Expand your network and explore collaboration opportunities with industry leaders and innovators.",
      color: "from-green-300 to-green-400",
      bgColor: "from-green-50 to-green-100"
    }
  ]

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700 mb-6">
            WHAT THE HUB OFFERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions to accelerate Vietnam's green hydrogen ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <Card
                sx={{ border: "none", boxShadow: "none" }}
                className="h-full hover:shadow-2xl transition-all duration-500 group border-0 overflow-hidden">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${offering.bgColor} p-8 group-hover:scale-105 transition-transform duration-500`}>
                    <div className={`w-20 h-20 bg-gradient-to-r ${offering.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500`}>
                      <offering.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                      {offering.title}
                    </h3>
                    <p className="text-gray-700 text-center leading-relaxed mb-4">
                      {offering.description}
                    </p>
                    <p className="text-sm text-gray-600 text-center">
                      {offering.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}