import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    UT_AustinLogo,
    CosmicCreator,
    BrainFreq,
    threejs,
    bbNotesPreview,
    cosmicTrackerPreview,
    brainFreqPreview,
} from "../assets";

// NOTE:
// Add these image exports in ../assets/index.js once you have screenshots/images.
// Example names:
// import bbNotes from "./bb-notes.png";
// import cosmicTracker from "./cosmic-tracker.png";
//
// Then add them to your assets export list.
// For now, these project image references below can use BrainFreq temporarily
// until you add real screenshots.

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "work",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web App Development",
        description: "Building practical apps with React, Next.js, and modern tools.",
        icon: web,
    },
    {
        title: "Creative Tools",
        description: "Designing simple products for artists, notes, workflows, and ideas.",
        icon: mobile,
    },
    {
        title: "Project Execution",
        description: "Bringing structure to moving parts, timelines, and real work.",
        icon: backend,
    },
    {
        title: "Music + Interaction",
        description: "Exploring how sound, story, and software can connect.",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "Git",
        icon: git,
    },
    {
        name: "Figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Property Operations & Account Manager",
        company_name: "Gordon Family Trust Real Estate",
        category: "Operations",
        icon: backend,
        iconBg: "#1d1836",
        date: "May 2021 - Present",
        summary:
            "Supporting property operations, vendor coordination, budgeting, maintenance workflows, and hands-on project execution across multiple properties.",
        points: [
            "Manage day-to-day operations and financial oversight for six properties valued at over $5M.",
            "Coordinate maintenance, cleaning, vendor scheduling, contractor communication, and renovation-related projects.",
            "Track issues, organize service needs, and help move property requests from problem to completion.",
        ],
    },
    {
        title: "Full-Stack Web Development Certificate",
        company_name: "The University of Texas at Austin",
        category: "Technical Training",
        icon: web,
        iconBg: "#1d1836",
        date: "Jan 2023 - Aug 2023",
        summary:
            "Completed full-stack web development training focused on practical application development and collaborative technical projects.",
        points: [
            "Studied HTML, CSS, JavaScript, React, Node.js, Express, SQL, MongoDB, APIs, GitHub, and responsive design.",
            "Built full-stack projects using frontend frameworks, backend services, databases, and deployment workflows.",
            "Strengthened debugging, version control, collaboration, and technical problem-solving skills.",
        ],
    },
    {
        title: "Project Manager, Landscaping & Home Improvement",
        company_name: "Gordon Family Trust Real Estate",
        category: "Project Execution",
        icon: web,
        iconBg: "#232631",
        date: "2013 - 2022",
        summary:
            "Managed improvement projects involving landscaping, interiors, exteriors, maintenance, materials, and contractor coordination.",
        points: [
            "Coordinated contractors, vendors, project schedules, materials, and on-site execution.",
            "Supported projects from concept through completion while balancing quality, budget, and timelines.",
            "Developed practical experience with field coordination, physical site needs, and hands-on problem solving.",
        ],
    },
    {
        title: "Independent Artist, Songwriter & Producer",
        company_name: "Self-Directed Creative Work",
        category: "Creative Development",
        icon: creator,
        iconBg: "#1d1836",
        date: "2021 - Present",
        summary:
            "Developing original music, creative systems, digital tools, and long-term project direction through self-managed creative work.",
        points: [
            "Create original music projects from concept through writing, recording, refinement, and release preparation.",
            "Use digital tools and AI-assisted systems for organization, planning, writing, and creative direction.",
            "Build a bridge between music, software, storytelling, and digital product development.",
        ],
    },
    {
        title: "Mover",
        company_name: "Einstein Moving Company",
        category: "Customer Service",
        icon: mobile,
        iconBg: "#383E56",
        date: "Sep 2023 - May 2024",
        summary:
            "Worked in a fast-paced, physically demanding service role requiring teamwork, reliability, planning, and customer care.",
        points: [
            "Executed residential and commercial moves with attention to safety, efficiency, and detail.",
            "Supported smooth daily operations through communication, time management, and professionalism.",
            "Worked closely with teams and customers in high-responsibility environments.",
        ],
    },
];

const testimonials = [];

const projects = [
    {
        name: "BB Notes",
        status: "Deployed",
        description:
            "A local-first songwriting notes app for capturing hooks, verses, concepts, and song structures. Built to help creators organize ideas quickly without needing an account.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "localstorage",
                color: "blue-text-gradient",
            },
        ],
        image: bbNotesPreview, // replace with BB Notes screenshot
        source_code_link: "https://github.com/ChrisGordon888/bb-notes",
        live_site_link: "https://bb-notes-phi.vercel.app/",
    },
    {
        name: "Cosmic Tracker App",
        status: "In Development",
        description:
            "An active full-stack project exploring realm-based progression, user profiles, XP systems, unlockable music, and creative worldbuilding.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "graphql",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "pink-text-gradient",
            },
            {
                name: "apollo",
                color: "blue-text-gradient",
            },
        ],
        image: cosmicTrackerPreview, // replace with Cosmic Tracker screenshot
        source_code_link: "https://github.com/ChrisGordon888/cosmic-tracker-app",
        live_site_link: "",
    },
    {
        name: "Brain Freq",
        status: "Bootcamp Project",
        description:
            "A full-stack class project exploring binaural audio, meditation, focus, and web-based user experience design.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: brainFreqPreview,
        source_code_link: "https://github.com/ChrisGordon888/Project-3_BrainFreq",
        live_site_link: "",
    },
];

export { services, technologies, experiences, testimonials, projects };