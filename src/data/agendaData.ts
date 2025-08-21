
interface AgendaItemProps {
    item: {
        Time: string;
        Activity: string;
        Details?: string;
        Venue: string;
        type?: 'default' | 'special' | 'other';
    };
}

interface DayData {
    day: string;
    agenda: AgendaItemProps['item'][];
}

export const allAgendaData: DayData[] = [
    {
        "day": "Day 1",
        "agenda": [
            {
                "Time": "09:00 - 10:00",
                "Activity": "Opening Remarks",
                "Details": "",
                "Venue": "Ceremony Hall",
                "type": "default"
            },
            {
                "Time": "10:00 - 10:45",
                "Activity": "Keynote Speaker",
                "Details": "Christina Jaeger (Yunus) - topic",
                "Venue": "Ceremony Hall",
                "type": "default"
            },
            {
                "Time": "10:45 - 11:00",
                "Activity": "Industry Keynote",
                "Details": "Sustainability Benefits from Technology for the Good - Christian Boos (VP & Head of SI at SAP)",
                "Venue": "Ceremony Hall",
                "type": "default"
            },
            {
                "Time": "11:00 - 11:20",
                "Activity": "Refreshment Break",
                "Details": "",
                "Venue": "Ceremony Hall",
                "type": "special"
            },
            {
                "Time": "11:20 - 12:00",
                "Activity": "Introduction & Signing Ceremony",
                "Details": "Green Hydrogen Hub",
                "Venue": "Ceremony Hall",
                "type": "default"
            },
            {
                "Time": "12:00 - 14:00",
                "Activity": "Oktoberfest",
                "Details": "",
                "Venue": "Ceremony Hall",
                "type": "special"
            },
            {
                "Time": "14:00 - 14:45",
                "Activity": "Official Opening Ceremony",
                "Details": "Welcome & Official Launch of the Green Hydrogen Hub",
                "Venue": "Exhibition Hall",
                "type": "default"
            },
            {
                "Time": "14:45 - 15:30",
                "Activity": "Panel Discussion #1",
                "Details": "How can Vietnamese and German stakeholders collaborate develop the Green Hydrogen Market in Vietnam",
                "Venue": "Exhibition Hall",
                "type": "default"
            },
            {
                "Time": "14:45 - 15:30",
                "Activity": "Parallel Sessions #2",
                "Details": "Environmental Sustainability Towards Net 0; Water Technology; Waste Management; and Climate Adaptation",
                "Venue": "Lecture Hall",
                "type": "default"
            },
            {
                "Time": "15:30 - 17:00",
                "Activity": "Green Hydrogen Exhibition",
                "Details": "",
                "Venue": "Exhibition Hall",
                "type": "default"
            },
            {
                "Time": "17:00 - 18:00",
                "Activity": "Free Time",
                "Details": "",
                "Venue": "",
                "type": "default"
            },
            {
                "Time": "18:00 - 20:00",
                "Activity": "Reserved Dinner & Networking (*)",
                "Details": "",
                "Venue": "Becamex Hotel Thu Dau Mot",
                "type": "special"
            }
        ]
    },
    {
        "day": "Day 2",
        "agenda": [
            {
                "Time": "08:30 - 09:30",
                "Activity": "Registration",
                "Details": "",
                "Venue": "Lecture Hall -1-H1-109",
                "type": "default"
            },
            {
                "Time": "09:00 - 10:00",
                "Activity": "Presentation #1",
                "Details": "Sustainability Project Presentations - UEH & RMIT",
                "Venue": "Lecture Hall -1-H1-109",
                "type": "default"
            },
            {
                "Time": "09:00 - 10:00",
                "Activity": "Presentation #2",
                "Details": "Fundamental Engineering Research for Sustainable Technical Solutions",
                "Venue": "Lecture Hall",
                "type": "default"
            },
            {
                "Time": "10:00 - 12:00",
                "Activity": "Parallel Sessions #1",
                "Details": "Transit-Oriented Development (TOD) and Green Transformation Towards Sustainability",
                "Venue": "Lecture Hall",
                "type": "default"
            },
            {
                "Time": "10:00 - 12:00",
                "Activity": "Parallel Sessions #2",
                "Details": "Environmental Sustainability Towards Net 0.; Water Technology; Waste Management; Climate Adaptation",
                "Venue": "Lecture Hall",
                "type": "default"
            },
            {
                "Time": "10:00 - 12:00",
                "Activity": "Parallel Sessions #3",
                "Details": "Digital Transformation for Sustainability",
                "Venue": "Lecture Hall",
                "type": "default"
            },
            {
                "Time": "10:00 - 12:00",
                "Activity": "Parallel Sessions #4",
                "Details": "Analysing the ESG Alignment in Corporate Job Postings - From Commitment to Practice",
                "Venue": "Lecture Hall",
                "type": "default"
            },
            {
                "Time": "12:00 - 14:00",
                "Activity": "Lunch & Networking",
                "Details": "",
                "Venue": "",
                "type": "special"
            },
            {
                "Time": "14:00 - 15:30",
                "Activity": "Parallel Sessions Cont.",
                "Details": "Student Competition Finalist Presentations & Panel Sessions Cont.",
                "Venue": "Lecture Hall",
                "type": "default"
            },
            {
                "Time": "15:30",
                "Activity": "Closing Remarks",
                "Details": "Award for the Student Competition Winners",
                "Venue": "Lecture Hall",
                "type": "default"
            }
        ]
    }
];

