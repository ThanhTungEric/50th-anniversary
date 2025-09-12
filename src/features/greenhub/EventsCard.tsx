// === EventsCard.tsx (hoặc đặt trong cùng file) ===
import { Box, Typography } from "@mui/material";
import Logo from "../../assets/conference/logo.png";
import QR from "../../assets/conference/QR_Dang_ky_nhan_thong_tin.png";

const COLORS = {
    blue: "#023e8a",
    midBlue: "#0077b6",
    lightBlue: "#2ea6ff",
    divider: "#7fb3c7",
    text: "#1f2a37",
};

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
];


function splitDateParts(d: string) {

    const m = d.match(/^(.*?)([A-Za-z]+)$/);
    if (!m) return { left: d, month: "" };
    return { left: m[1].trim(), month: m[2].trim() };
}

export default function EventsCard() {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", my: { xs: 4, md: 6 } }}>
            <Box
                sx={{
                    width: "min(860px, 100%)",
                    borderRadius: 4,
                    p: { xs: 3, md: 4 },
                    boxShadow: "0 12px 30px rgba(0,0,0,.15)",

                    background:
                        "radial-gradient(600px 280px at -10% 10%, rgba(0,150,136,0.12), transparent 60%)," +
                        "radial-gradient(600px 280px at 110% 90%, rgba(0,119,182,0.12), transparent 60%)," +
                        "#ffffff",
                }}
            >
                {/* Header: tiêu đề trái + logo phải */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 3 }}>
                    <Box>
                        <Typography
                            sx={{
                                lineHeight: 1,
                                fontWeight: 900,
                                fontSize: { xs: 28, md: 34 },
                                letterSpacing: 0.5,
                                color: COLORS.blue,
                                textTransform: "uppercase",
                            }}
                        >
                            EVENTS <Box component="span" sx={{ fontWeight: 500, textTransform: "none", mx: 0.5, color: "#6b7280" }}>
                                of
                            </Box>{" "}
                            <Box component="span" sx={{ color: COLORS.lightBlue }}>2025</Box>
                        </Typography>
                    </Box>
                    <Box component="img" src={Logo} alt="GH2HubVN" sx={{ height: { xs: 44, md: 56 }, ml: 2 }} />
                </Box>

                {/* Danh sách sự kiện */}
                <Box>
                    {events.map((e, i) => {
                        const { left, month } = splitDateParts(e.date);
                        return (
                            <Box key={i} sx={{ py: 1.5 }}>
                                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                                    {/* Cột ngày-tháng */}
                                    <Typography
                                        sx={{
                                            minWidth: { xs: 130, md: 160 },
                                            fontWeight: 800,
                                            fontSize: { xs: 18, md: 20 },
                                            color: COLORS.blue,
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        <Box component="span" sx={{ fontWeight: 800 }}>{left}</Box>{" "}
                                        <Box component="span" sx={{ color: COLORS.midBlue, fontWeight: 700 }}>{month}</Box>
                                    </Typography>

                                    {/* Nội dung */}
                                    <Typography sx={{ color: COLORS.text, fontSize: { xs: 15, md: 16 } }}>
                                        {e.title}
                                    </Typography>
                                </Box>

                                {/* Divider mảnh màu xanh nhạt, trừ hàng cuối */}
                                {i < events.length - 1 && (
                                    <Box sx={{ borderBottom: `2px solid ${COLORS.divider}`, opacity: 0.6, mt: 1.5 }} />
                                )}
                            </Box>
                        );
                    })}
                </Box>


                <Box
                    sx={{
                        mt: 3,
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 3, md: 0 },
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            pr: { md: 3 },
                            borderRight: { md: `2px solid ${COLORS.divider}` },
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Box component="img" src={QR} alt="QR Code" sx={{ height: 110, width: 110, mr: 2 }} />
                        <Box>
                            <Typography sx={{ fontWeight: 800, color: COLORS.blue, mb: 0.5 }}>Join us!</Typography>
                            <Typography sx={{ color: COLORS.text }}>
                                Scan the QR code to stay updated on{" "}
                                <Box component="span" sx={{ color: COLORS.midBlue, fontWeight: 600 }}>
                                    GH2HubVN
                                </Box>{" "}
                                & access our events.
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ flex: 1, pl: { md: 3 } }}>
                        <Typography sx={{ fontWeight: 800, color: COLORS.blue, mb: 0.5 }}>Who can join?</Typography>
                        <Typography sx={{ color: COLORS.text }}>
                            Private sector, policymakers, researchers, investors & other stakeholders interested in GH2.
                        </Typography>
                    </Box>
                </Box>

            </Box>
        </Box>
    );
}
