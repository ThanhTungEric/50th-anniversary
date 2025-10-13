
// Định nghĩa các loại sự kiện chi tiết hơn
export type AgendaItemType = 'default' | 'keynote' | 'session' | 'break' | 'ceremony' | 'exhibition';

interface AgendaItemProps {
    item: {
        Time: string;
        Activity: string;
        Details?: string;
        Venue: string;
        // Sử dụng kiểu mới
        type?: AgendaItemType;
    };
}

interface DayData {
    day: string;
    // Sử dụng kiểu đã cập nhật
    agenda: AgendaItemProps['item'][];
}
export const allAgendaData: DayData[] = [
    {
        "day": "Day 1: Green Hydrogen Hub Launch & Keynotes (23 Oct 2025)",
        "agenda": [
            {
                "Time": "09:00 - 10:00",
                "Activity": "Official Opening & Welcome Remarks",
                Details: `
                    <ul>
                    <li>Prof. Dr. René Thiele – President of VGU</li>
                    <li>Prof. Dr. Nguyen Van Phuc – Vice Minister of Education and Training, Vietnam</li>
                    <li>Minister Timon Gremmels – Hessian Minister of Science and Research, Arts and Culture</li>
                    </ul>
                    `,
                "Venue": "Ceremony Hall",
                "type": "ceremony" // Lễ chính thức
            },
            {
                "Time": "10:00 - 10:45",
                "Activity": "Keynote Speaker: Social Business and Sustainability",
                "Details": "Christina Jaeger, Co-founder & Managing Director Yunus Environment Hub",
                "Venue": "Ceremony Hall",
                "type": "keynote" // Diễn giả chính
            },
            {
                "Time": "10:45 - 11:00",
                "Activity": "Industry Keynote: Sustainability in the age of Technology",
                "Details": "Christian Boos (Global VP and Head of Sustainability Innovation at SAP)",
                "Venue": "Ceremony Hall",
                "type": "keynote" // Diễn giả chính
            },
            {
                "Time": "11:00 - 11:20",
                "Activity": "Refreshment Break",
                "Details": "",
                "Venue": "Ceremony Hall Foyer",
                "type": "break" // Nghỉ giải lao
            },
            {
                "Time": "11:20 - 12:00",
                "Activity": "Green Hydrogen Hub Introduction & Roadmap",
                "Details": "Project team presentation on Hub goals and implementation.",
                "Venue": "Ceremony Hall",
                "type": "session" // Hoạt động chính
            },
            {
                "Time": "12:00 - 14:00",
                "Activity": "Networking Lunch",
                "Details": "",
                "Venue": "Admin Building",
                "type": "break" // Ăn trưa
            },
            {
                "Time": "14:00 - 14:45",
                "Activity": "Official Launch of the Green Hydrogen Hub",
                "Details": "<ul><li>Welcome remarks<ul><li>Consul General of Germany in Ho Chi Minh City</li><li>GIZ representative</li><li>Introduction to the architecture of the Hub</li></ul></li><li>Ribbon cutting for the Hub Opening</li></ul>",
                "Venue": "Exhibition Hall"
            }

            ,
            {
                "Time": "14:45 - 15:45",
                "Activity": "Green Hydrogen Exhibition Viewing",
                "Details": "Interactive booths and demonstrations on green technology.",
                "Venue": "Exhibition Hall",
                "type": "exhibition" // Triển lãm
            },
            {
                "Time": "15:45 - 16:00",
                "Activity": "Coffee break",
                "Details": "",
                "Venue": "Exhibition Hall",
                "type": "break" // Nghỉ giải lao
            },
            {
                "Time": "16:00 - 17:00",
                "Activity": "Panel Discussion: Developing the Green Hydrogen Market in Vietnam",
                "Details": "How can Vietnamese and German stakeholders collaborate.",
                "Venue": "Exhibition Hall",
                "type": "default"
            },
            {
                "Time": "11:00 - 12:00",
                "Activity": "Parallel Session: Environmental Sustainability and Green Technology (Part 1)",
                "Details": "Topic-specific presentations in Lecture Hall.",
                "Venue": "Lecture Hall - Room 108 & 109",
                "type": "session" // Phiên song song
            },
            {
                "Time": "13:00 - 17:00",
                "Activity": "Parallel Session: Environmental Sustainability and Green Technology (Part 2)",
                "Details": "Poster presentations and follow-up discussions.",
                "Venue": "Lecture Hall - Room 108 & 109",
                "type": "session" // Phiên song song
            },
            {
                "Time": "17:00 - 18:00",
                "Activity": "Free Time + Transit",
                "Details": "Transit from campus to Becamex Hotel Thu Dau Mot",
                "Venue": "",
                "type": "default"
            },
            {
                "Time": "18:00 - 20:00",
                "Activity": "Reserved Dinner & Networking (*)",
                "Details": "",
                "Venue": "Becamex Hotel Thu Dau Mot",
                "type": "break" // Ăn tối
            }
        ]

    },
    {
        "day": "Day 2: Research & Practice Sessions (24 Oct 2025)",
        "agenda": [
            {
                "Time": "08:30 - 09:00",
                "Activity": "Registration Check-in",
                "Details": "For all Parallel Sessions attendees.",
                "Venue": "Lecture Hall Lobby",
                "type": "default"
            },
            {
                "Time": "09:00 - 12:00",
                "Activity": "Parallel Session #1: Transit-Oriented Development (TOD) and Green Transformation Towards Sustainability",
                "Details": "",
                "Venue": " Lecture Hall – Room 619​",
                "type": "session" // Phiên song song
            },
            {
                "Time": "9:00 - 12:00",
                "Activity": "Parallel Session #2: Circular Economy and Sustainable Business",
                "Details": "Case studies and academic papers.",
                "Venue": "Lecture Hall - Room 611",
                "type": "session" // Phiên song song
            },
            {
                "Time": "9:00 - 12:00",
                "Activity": "Parallel Session #3: Engineering Research and Education for Sustainable Process Technologies",
                "Details": "",
                "Venue": "Lecture Hall - Room 609",
                "type": "session" // Phiên song song
            },
            {
                "Time": "9:00 - 12:00",
                "Activity": "Parallel Session #4: Green Living Lab",
                "Details": "A University Campus as a Green Living Lab",
                "Venue": "Lecture Hall - Room 114",
                "type": "session" // Phiên song song
            },
            {
                "Time": "9:30 - 12:00",
                "Activity": "Parallel Session #5: Digital Transformation",
                "Details": "Digital Transformation for Sustainability.",
                "Venue": "Lecture Hall- Room 311",
                "type": "session" // Phiên song song
            },
            {
                "Time": "12:00 - 13:30",
                "Activity": "Lunch & Networking",
                "Details": "",
                "Venue": "VGU Cafeteria",
                "type": "break" // Ăn trưa
            },
            {
                "Time": "13:30 - 16:15",
                "Activity": "Parallel Session #1 (Continuation)",
                "Details": "Q&A and conclusion.",
                "Venue": "Lecture hall - Room 616, 617, 618, 619",
                "type": "session" // Phiên song song
            },
            {
                "Time": "14:00 - 15:30",
                "Activity": "Parallel Session #2 (Continuation)",
                "Details": "Deep dive into selected topics.",
                "Venue": "Lecture Hall - Room 611",
                "type": "session" // Phiên song song
            },
            {
                "Time": "13:30 - 16:30",
                "Activity": "Sustainability Challenge Finals",
                "Details": "Student teams present their solutions.",
                "Venue": "Lecture Hall - Room 114",
                "type": "default"
            }
        ]
    }
];
