import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface AgendaItem {
    Time: string;
    Activity: string;
    Details?: string;
    Venue: string;
}

interface DayData {
    day: string;
    agenda: AgendaItem[];
}

interface AgendaProps {
    data: DayData[];
}

const splitTime = (range: string): [string, string] => {
    const parts = range.split('-').map((s) => s.trim());
    return parts.length >= 2 ? [parts[0], parts[1]] : [range, ''];
};

const AgendaItemRow: React.FC<{ item: AgendaItem }> = ({ item }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [start, end] = splitTime(item.Time);

    const borderColor = theme.palette.grey[400];
    const textColor = theme.palette.text.primary;
    const linkColor = theme.palette.primary.main;
    const subTextColor = theme.palette.text.secondary;

    // ✅ Danh sách có link
    const hasLink = [
        "Environmental Sustainability and Green Technology",
        "Parallel Session #1",
        "Parallel Session #3",
        "Parallel Session #4",
        "Parallel Session #5",
        "Sustainability Challenge Finals",
    ].some((keyword) => item.Activity.includes(keyword));

    // ✅ URL tương ứng từng activity
    const getLinkUrl = () => {
        if (item.Activity.includes("Environmental Sustainability and Green Technology"))
            return "https://conference.vgu.edu.vn/parallel_session.jpg";
        if (item.Activity.includes("Green Living Lab"))
            return "https://conference.vgu.edu.vn/a_university_campus_as_green_living_lab.jpg";
        if (item.Activity.includes("Parallel Session #3"))
            return "https://conference.vgu.edu.vn/parallel_sessions_3.jpg";
        if (item.Activity.includes("Parallel Session #5"))
            return "/documents";
        if (item.Activity.includes("Sustainability Challenge Finals"))
            return "https://conference.vgu.edu.vn/24_Oct_Afternoon_Student_Sustainability_Challenge.png";
        if (item.Activity.includes("Parallel Session #1"))
            return "https://icsud.vgu.edu.vn/";
        return "https://icsud.vgu.edu.vn/";
    };

    const linkUrl = getLinkUrl();
    const isInternal = linkUrl.startsWith("/documents/");

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isInternal) {
            navigate(linkUrl); // ✅ điều hướng nội bộ không reload
        } else {
            window.open(linkUrl, "_blank", "noopener,noreferrer"); // ✅ link ngoài mở tab mới
        }
    };

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'grid',
                gridTemplateAreas: {
                    xs: `"time content" "time meta"`,
                    sm: `"time content venue"`,
                },
                gridTemplateColumns: {
                    xs: '72px 1fr',
                    sm: '120px 1fr 150px',
                    md: '120px 1fr 180px',
                },
                columnGap: { xs: 1.5, sm: 2 },
                rowGap: { xs: 0.5, sm: 1 },
                py: 1.5,
                borderLeft: { xs: `2px solid ${borderColor}`, sm: `3px solid ${borderColor}` },
                pl: { xs: 1.5, sm: 2 },
                ml: { xs: 0.5, sm: 1 },
            }}
        >
            {/* Cột thời gian */}
            <Box
                sx={{
                    gridArea: 'time',
                    color: subTextColor,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 0.25,
                }}
            >
                <Typography variant="caption" sx={{ fontWeight: 500, lineHeight: 1.2 }}>
                    {start}
                </Typography>
                {!!end && (
                    <Typography variant="caption" sx={{ fontWeight: 400, lineHeight: 1.2 }}>
                        {end}
                    </Typography>
                )}
            </Box>

            {/* Cột nội dung */}
            <Box sx={{ gridArea: 'content', minWidth: 0 }}>
                {hasLink ? (
                    <Link
                        href={linkUrl}
                        underline="hover"
                        onClick={handleClick} // ✅ dùng navigate nội bộ
                        sx={{
                            color: linkColor,
                            fontWeight: 600,
                            display: 'inline-block',
                            cursor: 'pointer',
                        }}
                    >
                        <Typography
                            variant="body1"
                            fontWeight="inherit"
                            sx={{
                                wordBreak: 'break-word',
                                color: 'inherit',
                            }}
                        >
                            {item.Activity}
                        </Typography>
                    </Link>
                ) : (
                    <Typography
                        variant="body1"
                        fontWeight={600}
                        sx={{
                            color: textColor,
                            wordBreak: 'break-word',
                        }}
                    >
                        {item.Activity}
                    </Typography>
                )}

                {item.Details && (
                    <Typography
                        variant="body2"
                        sx={{
                            mt: 0.25,
                            fontStyle: 'italic',
                            color: subTextColor,
                            '& ul': { marginY: 0.5, pl: 3 },
                            '& li': { mb: 0.3 },
                        }}
                        dangerouslySetInnerHTML={{ __html: item.Details }}
                    />
                )}
            </Box>

            {/* Cột địa điểm */}
            <Box
                sx={{
                    gridArea: { xs: 'meta', sm: 'venue' },
                    color: subTextColor,
                    textAlign: 'right',
                }}
            >
                <Typography variant="body2" fontWeight={400}>
                    {item.Venue}
                </Typography>
            </Box>
        </Box>
    );
};

const DaySection: React.FC<{ dayData: DayData }> = ({ dayData }) => (
    <Box sx={{ my: 3 }}>
        <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', mb: 2, pl: { xs: 1, sm: 2 } }}
        >
            {dayData.day}
        </Typography>
        {dayData.agenda.map((item, idx) => (
            <AgendaItemRow key={idx} item={item} />
        ))}
    </Box>
);

const Agenda: React.FC<AgendaProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <Typography>No agenda data available.</Typography>;
    }

    return (
        <Box
            sx={{
                maxWidth: { xs: '100%', sm: 720, md: 800 },
                mx: 'auto',
                px: { xs: 1, sm: 2 },
                py: { xs: 1, sm: 2 },
            }}
        >
            {data.map((dayData, index) => (
                <DaySection key={index} dayData={dayData} />
            ))}
        </Box>
    );
};

export default Agenda;
