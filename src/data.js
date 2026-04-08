import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';

export const personalDetails = {
    name: "Mohamed Irfan",
    role: "Frontend Developer",
    experience: "2 Years",
    location: "Chennai, India",
    email: "mmohamedirfan74091@gmail.com",
    phone: "8220626439",
    linkedin: "https://linkedin.com/in/mohamedirfan74091",
    github: "https://github.com/mohamedirfan7/project",
    about: "Frontend Developer with 2 years of hands-on experience in building responsive, scalable, and high-performance web applications. Strong expertise in React.js, JavaScript, reusable component architecture, UI optimization, and REST API integration. Focused on clean, maintainable code and delivering user-centric interfaces."
};

export const skills = [
    "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux", "Context API",
    "REST API Integration", "Responsive UI Design", "Performance Optimization", "Git & GitHub", "Tailwind CSS"
];

export const experiences = [
    {
        role: "Frontend Developer",
        company: "Harmion Technology",
        period: "Aug 2023 – Present",
        location: "Chennai",
        responsibilities: [
            "Developed responsive UI components using React.js, JavaScript, HTML, and CSS",
            "Optimized application performance using code splitting and memoization",
            "Integrated REST APIs for real-time data",
            "Built reusable components with clean architecture",
            "Collaborated with design and backend teams to deliver seamless UI/UX"
        ]
    }
];

export const projects = [
    {
        title: "Skills You Need",
        description: "Skill Assessment Platform. Built quiz interface and user dashboard using React.js.",
        tech: ["React.js", "CSS"],
        link: "#"
    },
    {
        title: "PRBD",
        description: "Real-Time Dashboard. Developed real-time monitoring UI with data visualization.",
        tech: ["React.js", "API"],
        link: "#"
    },
    {
        title: "Tandem Trader",
        description: "Stock Market Tool. Created UI for charts, insights, and market analysis.",
        tech: ["React.js"],
        link: "#"
    },
    {
        title: "Optima",
        description: "Implemented responsive layouts for improved productivity across devices.",
        tech: ["React.js"],
        link: "#"
    }
];

export const education = {
    degree: "B.E – Computer Science Engineering",
    college: "EGS Pillay Engineering College",
    period: "2019 – 2023"
};
