// data.js
const portfolioData = {
    skills: {
        "python": { name: "Python", category: "Backend" },
        "react": { name: "React", category: "Frontend" },
        "html_css": { name: "HTML/CSS", category: "Frontend" },
        "javascript": { name: "JavaScript", category: "Frontend" },
        "typescript": { name: "TypeScript", category: "Frontend" },
        "node": { name: "Node.js", category: "Backend" },
        "postgres": { name: "PostgreSQL", category: "Database" },
        "mongodb": { name: "MongoDB", category: "Database" },
        "docker": { name: "Docker", category: "DevOps" },
        "kubernetes": { name: "Kubernetes", category: "DevOps" },
        "aws": { name: "AWS", category: "DevOps" },
        "git": { name: "Git", category: "Version Control" },
        "godot": { name: "Godot", category: "Game Development" },
        "figma": { name: "Figma", category: "Design" },
        "canva": { name: "Canva", category: "Design" },
        "photoshop": { name: "Photoshop", category: "Design" },
    },
    projects: [
        {
            id: "baffall",
            title: "Baffall",
            shortDesc: "A solo-developed word search game blending Tetris and Boggle mechanics.",
            url: "/projects/baffall/",
            date: "2025-06",
            skills: ["godot", "mobile_app", "game_development", "sdk_integration"]
        },
        {
            id: "cptac",
            title: "CPTAC Python Package",
            shortDesc: "Data engineering and core architecture improvements for cancer research datasets.",
            url: "/projects/cptac/",
            date: "2022-01",
            skills: ["python", "git"]
        },
        {
            id: "nphd",
            title: "NPHD",
            shortDesc: "A simple, clean, webcomics site with ecommerce.",
            url: "/projects/nphd/",
            date: "2025-10",
            skills: ["html_css", "javascript"]
        },
        {
            id: "painting_archive_tool",
            title: "Painting Archive Tool",
            shortDesc: "A tool to aid cleanup of archival painting photography.",
            url: "/projects/painting_archive_tool/",
            date: "2026-04",
            skills: ["python"]
        }
    ]
};
