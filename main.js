// main.js

// Generates clickable skill tags
function renderSkillTags(skillIds, basePath = "") {
    return skillIds.map(id => {
        const skill = portfolioData.skills[id];
        if (!skill) return '';
        return `<a href="${basePath}skills.html?skill=${id}" class="skill-tag">${skill.name}</a>`;
    }).join('');
}

// Renders project cards on the Projects page
function renderProjectGrid(containerId, basePath = "") {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = portfolioData.projects.map(proj => `
        <a href="${basePath}${proj.url}" class="project-card-link">
            <div class="project-card">
                <div class="project-header">
                    <h3 class="project-title">${proj.title}</h3>
                </div>
                <p class="project-description">${proj.shortDesc}</p>
                <div class="project-skills">
                    ${renderSkillTags(proj.skills, basePath)}
                </div>
            </div>
        </a>
    `).join('');
}

// Handles URL parameters on the Skills page to filter projects
function initializeSkillsPage() {
    const params = new URLSearchParams(window.location.search);
    const activeSkillId = params.get('skill');
    
    const titleElement = document.getElementById('skills-page-title');
    const container = document.getElementById('skills-project-container');
    
    if (!container) return;

    if (activeSkillId && portfolioData.skills[activeSkillId]) {
        const skillName = portfolioData.skills[activeSkillId].name;
        titleElement.textContent = `Projects using ${skillName}`;
        
        const filteredProjects = portfolioData.projects.filter(p => p.skills.includes(activeSkillId));
        
        container.innerHTML = filteredProjects.map(proj => `
            <div class="project-card">
                <h3><a href="${proj.url}">${proj.title}</a></h3>
                <p>${proj.shortDesc}</p>
            </div>
        `).join('');
    } else {
        titleElement.textContent = "All Skills";
        // Default view: list all skills
        container.innerHTML = Object.entries(portfolioData.skills).map(([id, skill]) => `
            <a href="skills.html?skill=${id}" class="skill-tag large">${skill.name} <span class="category-badge">${skill.category}</span></a>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('projects-grid')) renderProjectGrid('projects-grid');
    if (document.getElementById('skills-project-container')) initializeSkillsPage();
});
