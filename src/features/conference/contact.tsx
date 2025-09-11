import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react";
import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Card, CardContent, Button, TextField, Box, Typography, Container, Grid } from "@mui/material";
import { ImageWithFallback } from "./imgFallback/ImageWithFallback";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      info: "Vietnamese-German University (VGU)",
      details: "Binh Duong Province, Vietnam",
      color: "from-red-400 to-red-500"
    },
    {
      icon: Mail,
      title: "Email",
      info: "info@gh2hubvn.org",
      details: "Contact us for partnerships",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: Phone,
      title: "Phone",
      info: "+84 (0) 274 123 456",
      details: "Monday - Friday, 8AM - 5PM",
      color: "from-green-400 to-green-500"
    },
    {
      icon: Globe,
      title: "Website",
      info: "www.gh2hubvn.org",
      details: "Visit our official website",
      color: "from-purple-400 to-purple-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            GET IN <span className="text-green-600">TOUCH</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to be part of Vietnam's green hydrogen future? Contact us today
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with the Green Hydrogen Hub Vietnam team. We're here to answer 
                your questions and explore partnership opportunities.
              </p>
            </div>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="border-0 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <contact.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-1">
                          {contact.title}
                        </h4>
                        <p className="text-blue-600 font-medium">
                          {contact.info}
                        </p>
                        <p className="text-sm text-gray-500">
                          {contact.details}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="relative h-64 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1657673985908-949e0d79cb48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwY2VudGVyfGVufDF8fHx8MTc1NzQwMTgyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Conference Center"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                  <MapPin className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-gray-800">VGU Campus</p>
                  <p className="text-sm text-gray-600">Binh Duong, Vietnam</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send us a Message
                </h3>
                <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 2 }}>
                    <TextField
                      label="First Name"
                      placeholder="Your first name"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#22c55e',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#22c55e',
                          },
                        },
                      }}
                    />
                    <TextField
                      label="Last Name"
                      placeholder="Your last name"
                      variant="outlined"
                      fullWidth
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '&:hover fieldset': {
                            borderColor: '#22c55e',
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#22c55e',
                          },
                        },
                      }}
                    />
                  </Box>
                  
                  <TextField
                    label="Email"
                    type="email"
                    placeholder="your.email@example.com"
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#22c55e',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#22c55e',
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    label="Organization"
                    placeholder="Your company or organization"
                    variant="outlined"
                    fullWidth
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#22c55e',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#22c55e',
                        },
                      },
                    }}
                  />
                  
                  <TextField
                    label="Message"
                    placeholder="Tell us about your interest in green hydrogen..."
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={5}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                          borderColor: '#22c55e',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#22c55e',
                        },
                      },
                    }}
                  />
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      sx={{
                        background: 'linear-gradient(45deg, #4ade80 30%, #60a5fa 90%)',
                        py: 1.5,
                        '&:hover': {
                          background: 'linear-gradient(45deg, #22c55e 30%, #3b82f6 90%)',
                        }
                      }}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}