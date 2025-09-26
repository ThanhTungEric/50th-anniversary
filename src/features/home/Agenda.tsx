import React from 'react';
import { Box, Typography, Link, useTheme } from '@mui/material';

// Định nghĩa các loại sự kiện chi tiết hơn
export type AgendaItemType = 'default' | 'keynote' | 'session' | 'break' | 'ceremony' | 'exhibition' | 'other';

interface AgendaItemProps {
    item: {
        Time: string;
        Activity: string;
        Details?: string;
        Venue: string;
        type?: AgendaItemType;
    };
}

interface DayData {
    day: string;
    agenda: AgendaItemProps['item'][];
}

interface AgendaProps {
    data: DayData[];
}

// Logic màu sắc chi tiết hơn, sử dụng theme của MUI
const getBorderColor = (type: AgendaItemType | undefined, theme: any): string => {
    switch (type) {
        case 'keynote':
            // Màu Tím nổi bật cho Keynote/Diễn giả chính
            return theme.palette.secondary.main;
        case 'ceremony':
            // Màu Xanh Dương đậm cho các sự kiện chính/lễ khai mạc
            return theme.palette.primary.dark;
        case 'session':
            // Màu Xanh Lam nhạt hơn cho các phiên song song
            return theme.palette.info.main;
        case 'exhibition':
            // Màu Xanh lá cho Triển lãm
            return theme.palette.success.main;
        case 'break':
            // Màu Cam/Vàng cho nghỉ giải lao (CHỈ LÀ VIỀN)
            return theme.palette.warning.light;
        default:
            // Màu Xám nhạt cho hoạt động mặc định
            return theme.palette.grey[400];
    }
};

// Hàm kiểm tra xem có phải hoạt động quan trọng (cần tô nền nhẹ)
const isImportantStylingType = (type: AgendaItemType | undefined): boolean => {
    return type === 'keynote' || type === 'ceremony' || type === 'session' || type === 'exhibition';
};

const splitTime = (range: string): [string, string] => {
    const parts = range.split('-').map((s) => s.trim());
    if (parts.length >= 2) return [parts[0], parts[1]];
    return [range, ''];
};

const AgendaItem: React.FC<AgendaItemProps> = ({ item }) => {
    const theme = useTheme();
    const borderColor = getBorderColor(item.type, theme);
    const [start, end] = splitTime(item.Time);

    // Xác định các loại cần styling đặc biệt (tô nền nhẹ và in đậm chữ)
    const isImportantType = isImportantStylingType(item.type);

    // Đặt màu chữ cơ bản cho các hoạt động quan trọng
    const activityTextColor = isImportantType ? theme.palette.text.primary : theme.palette.text.secondary;

    // Các điều kiện đặc biệt giữ nguyên
    const isParallelSessions1 = item.Activity.includes("Parallel Sessions #1:");
    const isEnvironmentalSession = item.Activity.includes("Environmental Sustainability and Green Technology");

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
                py: 2,
                // Áp dụng màu viền theo loại
                borderLeft: { xs: `2px solid ${borderColor}`, sm: `3px solid ${borderColor}` },
                pl: { xs: 1.5, sm: 2 },
                ml: { xs: 0.5, sm: 1 },
                // Chỉ tô màu nền nhẹ cho các hoạt động quan trọng (Đã Đảo Ngược Logic)
                ...(isImportantType && {
                    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.action.selected : theme.palette.grey[50],
                    borderRadius: '4px',
                    pl: { xs: 1.5, sm: 2 },
                    pr: { xs: 1.5, sm: 2 },
                    my: 0.5, // Thêm margin để tách biệt
                }),
            }}
        >
            {/* TIME */}
            <Box
                sx={{
                    gridArea: 'time',
                    // Thời gian cho hoạt động quan trọng sẽ nổi bật hơn
                    color: isImportantType ? theme.palette.text.primary : theme.palette.text.secondary,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 0.25,
                    minWidth: 0,
                }}
            >
                <Typography
                    variant="caption"
                    // In đậm thời gian cho sự kiện quan trọng
                    sx={{ fontWeight: isImportantType ? 800 : 700, lineHeight: 1.2, display: 'block' }}
                >
                    {start}
                </Typography>
                {!!end && (
                    <Typography
                        variant="caption"
                        sx={{ lineHeight: 1.2, fontWeight: isImportantType ? 700 : 400 }}
                    >
                        {end}
                    </Typography>
                )}
            </Box>

            {/* CONTENT (ACTIVITY & DETAILS) */}
            <Box
                sx={{
                    gridArea: 'content',
                    minWidth: 0,
                }}
            >
                {/* ACTIVITY */}
                {isParallelSessions1 ? (
                    <Link
                        href="https://icsud.vgu.edu.vn/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{
                            color: isImportantType ? activityTextColor : 'primary.main',
                            fontWeight: isImportantType ? 'bold' : 'medium',
                        }}
                    >
                        <Typography
                            variant="body1"
                            fontWeight="inherit"
                            sx={{ wordBreak: 'break-word', color: 'inherit' }}
                        >
                            {item.Activity}
                        </Typography>
                    </Link>
                ) : (
                    <Typography
                        variant="body1"
                        // Hoạt động quan trọng in đậm
                        fontWeight={isImportantType ? 'bold' : 'medium'}
                        sx={{ wordBreak: 'break-word', color: activityTextColor }}
                    >
                        {item.Activity}
                    </Typography>
                )}

                {/* DETAILS */}
                {item.Details && (
                    isEnvironmentalSession ? (
                        <Box sx={{ mt: 1, maxWidth: '100%' }}>
                            {/* Assuming /call-for-abs.jpg exists */}
                            {/* <img src="/call-for-abs.jpg" alt="Call for Abstracts" style={{ width: '100%', height: 'auto' }} /> */}
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mt: 0.25, fontStyle: 'italic' }}
                            >
                                {item.Details}
                            </Typography>
                        </Box>
                    ) : (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mt: 0.25, fontStyle: 'italic', whiteSpace: 'pre-line' }}
                        >
                            {item.Details}
                        </Typography>
                    )
                )}
            </Box>

            {/* VENUE */}
            <Box
                sx={{
                    gridArea: { xs: 'meta', sm: 'venue' },
                    // Địa điểm cho hoạt động quan trọng sẽ nổi bật hơn
                    color: isImportantType ? activityTextColor : 'text.secondary',
                    textAlign: { xs: 'right', sm: 'right' },
                    mt: { xs: 0.25, sm: 0 },
                }}
            >
                <Typography variant="body2" fontWeight={isImportantType ? 700 : 400}>{item.Venue}</Typography>
            </Box>
        </Box>
    );
};

// --- (Các component DaySection và Agenda giữ nguyên) ---

const DaySection: React.FC<{ dayData: DayData }> = ({ dayData }) => {
    return (
        <Box sx={{ my: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, pl: { xs: 1, sm: 2 } }}>
                {dayData.day}
            </Typography>
            {dayData.agenda.map((item, idx) => (
                <AgendaItem key={idx} item={item} />
            ))}
        </Box>
    );
};

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
            {data.map((dayData, dayIndex) => (
                <DaySection key={dayIndex} dayData={dayData} />
            ))}
        </Box>
    );
};

export default Agenda;