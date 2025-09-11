import Grid from "@mui/material/Grid"
import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Box,
  Typography,
  Container,
  Paper,
  Divider,
} from "@mui/material"

import imgLogo from "../../assets/conference/logo2.png"
import imgQR from "../../assets/conference/QR_Dang_ky_nhan_thong_tin.png"
import imgBG from "../../assets/conference/bg3.png"

export function Events() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const events = [
    { date: "15 May", title: "PtX Economics: Levelized Cost of Green Hydrogen (LCOGH)" },
    { date: "26 - 29 May", title: "German Training Week 2025 on Green Hydrogen" },
    { date: "3 July", title: "Webinar \"Leipzig - Ho Chi Minh City: GH2HubVN Meets City Partnership\"" },
    { date: "9 - 10 July", title: "Green Hydrogen Hub Viet Nam booth at Solar & Storage event in HCMC" },
    { date: "30 July", title: "PtX Safety Training" },
    { date: "11 Aug", title: "Roundtable: Bankability of green hydrogen projects" },
    { date: "9 Sep", title: "Green Hydrogen Hub Viet Nam booth at German Career Truck 2025 (Ho Chi Minh City)" },
    { date: "23 - 25 Sep", title: "3-day basic training on GH2 & PtX in Hanoi" },
    { date: "Oct", title: "Viet Nam Hydrogen Symposium" },
    { date: "23 - 24 Oct", title: "Opening of the Green Hydrogen Hub Viet Nam" },
    { date: "5 - 7 Nov", title: "3-day basic training on GH2 & PtX in HCMC" },
  ]

  return (
    <section
      id="events"
      className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-hidden"
    >
      {/* Background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: `url(${imgBG}) no-repeat center center`,
          backgroundSize: "cover",
          opacity: 0.4,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Paper
            elevation={0}
            sx={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,253,244,0.8) 50%, rgba(236,254,255,0.9) 100%)",
              borderRadius: 4,
              border: "2px solid #10b981",
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Header */}
            <Box sx={{ p: 4, pb: 2 }}>
              <Grid container alignItems="center" justifyContent="space-between">
                <Grid item>
                  <Box>
                    
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: "#1e40af",
                        lineHeight: 1.2,
                      }}
                    >
                      EVENTS
                    </Typography>

                    
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "baseline",
                        gap: 1,
                        lineHeight: 1.2,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{ fontSize: "1.25rem", fontWeight: 400, color: "#6b7280" }}
                      >
                        of
                      </Box>

                      {/* 2025 with gradient */}
                      <Box
                        component="span"
                        sx={{
                          background: "linear-gradient(90deg, #10b981, #06b6d4)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontWeight: "bold",
                        }}
                      >
                        2025
                      </Box>
                    </Typography>
                  </Box>
                </Grid>

                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <Box sx={{ maxWidth: 250 }}>
                      <img
                        src={imgLogo}
                        alt="Green Hydrogen Hub Viet Nam"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>



            <Divider
              sx={{
                height: 3,
                border: "none",
                borderRadius: 1,
                background: "linear-gradient(90deg, #10b981, #06b6d4)",
                my: 3,
              }}
            />

            {/* Events List */}
            <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
              <Box sx={{ width: "100%", maxWidth: 700 }}>
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
                  >
                    {/* Row: consistent 2-column grid (fixed date column + flexible content column) */}
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "100px 1fr", sm: "140px 1fr" },
                        gap: 2,
                        alignItems: "start",
                        py: 2,
                      }}
                    >
                      {/* Date column (right aligned) */}
                      <Box sx={{ textAlign: "right", pr: { xs: 1, sm: 2 } }}>
                        <Typography
                          component="div"
                          sx={{
                            fontSize: { xs: "1rem", sm: "1.25rem" },
                            fontWeight: 700,
                            lineHeight: 1.1,
                            background: "linear-gradient(90deg, #10b981, #06b6d4)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            // fallback color for non-webkit:
                            color: "rgba(16,185,129,1)",
                          }}
                        >
                          {event.date}
                        </Typography>
                      </Box>

                      {/* Title/content column (left aligned) */}
                      <Box>
                        <Typography variant="body1" sx={{ color: "#374151", lineHeight: 1.6 }}>
                          {event.title}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Divider outside the row grid */}
                    {index < events.length - 1 && (
                      <Box sx={{ width: "100%", maxWidth: 700, mx: "auto" }}>
                        <Divider
                          sx={{
                            height: 1.5 ,
                            border: "none",
                            borderRadius: 5,
                            background: "linear-gradient(90deg, #10b981, #06b6d4)",
                            my: 2,
                          }}
                        />
                      </Box>
                    )}

                  </motion.div>
                ))}
              </Box>
            </Box>


            <Divider
              sx={{
                height: 3,
                border: "none",
                borderRadius: 1,
                background: "linear-gradient(90deg, #10b981, #06b6d4)",
                my: 3,
              }}
            />

            {/* Bottom Section */}
            <Box sx={{ p: 4 }}>
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                {/* Left: QR / Join us */}
                <Grid item xs={12} md={6}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, justifyContent: "center" }}>
                    <Box
                      component="img"
                      src={imgQR}
                      alt="QR Code"
                      sx={{
                        width: 100,
                        height: 100,
                        border: "3px solid #1e40af",
                        borderRadius: 2,
                        background: "white",
                      }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ color: "#1e40af", fontWeight: "bold", mb: 0.5 }}>
                        Join us!
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.4 }}>
                        Scan the QR code to stay<br />
                        updated on GH2HubVN<br />
                        & access our events.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* Right: Who can join */}
                <Grid item xs={12} md={6}>
                  <Box textAlign="center">
                    <Typography variant="h6" sx={{ color: "#1e40af", fontWeight: "bold", mb: 1 }}>
                      Who can join?
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#6b7280", lineHeight: 1.6 }}>
                      Private sector, policymakers,<br />
                      researchers, investors & other<br />
                      stakeholders interested in GH2.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </section>
  )
}
