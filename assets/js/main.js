// typing effect for hero section
async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split('');
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById(eleRef).innerHTML += letters[i];
      i++;
    }
    return;
}    
function waitForMs(ms) {
return new Promise(resolve => setTimeout(resolve, ms))
}
typeSentence('I am Manali Darji.', 'about-title', 180);

// menu links
let mobMenu = document.getElementById('mob-header-menu');
document.getElementById('hamburger').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.add('active');
})
document.getElementById('close-mob-menu').addEventListener('click', function(e){
    e.preventDefault;
    mobMenu.classList.remove('active');
})
const links = document.querySelectorAll('#mob-header-menu ul li a');
for (const link of links) {
    link.addEventListener('click', function(e){
        mobMenu.classList.remove('active');
    });
}

// portfolio section
const projects = [
    {
        title: 'My Portfolio Site',
        image: 'proj_1.png',
        desc: 'My personal website project which tells you about me, skills, experience, education, my projects and a way to contact me.',
        stack: 'HTML, CSS, JS',
        gitLink: 'https://github.com/manalidarji/manalidarji.github.io'
    },
    {
        title: 'Relax-Inn',
        image: 'proj_2.png',
        desc: 'Relax-Inn, a fictional company, allows visitors to find and/or book vacation rentals, cabins, beach houses and unique homes, around the world, specifically for short-term rental.',
        stack: 'HTML, CSS, Javascript, React, JSON-Server',
        gitLink: 'https://github.com/manalidarji/relax-inn'
    },
    {
        title: 'Who wants to be Millionaire?',
        image: 'proj_3.png',
        desc: "This project is a JAVA Console App, programmed using core JAVA & Object-Oriented Programming(OOP), inspired from famous Quiz game: 'Who wants to be Millionaire'",
        stack: 'Core JAVA',
        gitLink: 'https://github.com/manalidarji/JAVA-Quiz-Game'
    },
    {
        title: 'Betting Blog Site',
        image: 'proj_4.png',
        desc: "Betting blog site is a blog-publishing system using custom theme on WordPress, which is a content management system(CMS).",
        stack: 'HTML, CSS, Javascript, PHP, Wordpress, MySQL',
        gitLink: 'https://github.com/manalidarji/betting-blog-site'
    }
];

const allProjectsNode = document.getElementById('all-projects-wrap');
projects.forEach(project => {
    const projectNode = `
    <div class="project-wrap"> 
        <a class="project-a" target="_blank" href="${project.gitLink}">   
            <div class="project-img-wrap">
                <img class="img-resp" src="./assets/images/${project.image}" alt="Project"/>
            </div>
            <p class="proj-title-display">${project.title}</p>
            <div class="project-content-overlay">
                <div class="project-content">
                    <h6 class="project-title">${project.title}</h6>
                    <p class="project-desc">${project.desc}</p>
                    <p class="project-stack">Tech Stack: ${project.stack}</p>
                    <button class="btn">View Source Code</button>
                </div>
            </div>
        </a>
    </div>
    `;
    allProjectsNode.innerHTML += projectNode;
})