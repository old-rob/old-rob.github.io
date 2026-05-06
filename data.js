// data.js
const portfolioData = {
    skills: {
        "python": { name: "Python", category: "Backend" },
        "react": { name: "React", category: "Frontend" },
        "godot": { name: "Godot", category: "Game Development" },
        "html_css": { name: "HTML/CSS", category: "Frontend" },
        "docker": { name: "Docker", category: "DevOps" },
        "postgres": { name: "PostgreSQL", category: "Database" }
    },
    projects: [
        {
            id: "baffall",
            title: "Baffall",
            shortDesc: "A solo-developed word search game blending Tetris and Boggle mechanics.",
            url: "/projects/baffall/",
            date: "2026-04",
            skills: ["godot", "mobile_app", "game_development", "sdk_integration"]
        },
        {
            id: "cptac",
            title: "CPTAC Python Package",
            shortDesc: "Data engineering and core architecture improvements for cancer research datasets.",
            url: "/projects/cptac/",
            date: "2025-08",
            skills: ["python"]
        },
        {
            id: "nphd",
            title: "nphd.top",
            shortDesc: "A distraction-free, typographically focused manifesto and resource site.",
            url: "/projects/nphd/",
            date: "2025-10",
            skills: ["html_css"]
        }
    ]
};
