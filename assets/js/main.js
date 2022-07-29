// experience section
const experiences = [
    {
        position: 'Web Developer',
        company_name: 'Giatec-Smart Construction Solutions',
        period: 'May 22 - Present',
        roles: [
            'Optimised websites to create polished and engaging web experiences to reflect company\'s brand.',
            'Implemented single-handedly, re-branding project of the company\'s main website thus increasing user engagement by 15%.',
            'Identified code issues, recommended as well as implemented the solutions improving code quality.',
            'Created website layout/user interfaces by using standard web development practices.',
            'Collaborated with the Marketing and Design team to optimise landing pages in order to convert web visitors into potential clients.'
        ]
    },
    {
        position: 'UI Developer',
        company_name: 'Media.net Software Services (India) Pvt. Ltd',
        period: 'Jul 2017 - Aug 2021',
        roles: [
            'Implemented Single Page Applications(SPA) using React JS as Front-End Technology, along with integrating the backend systems using RESTful APIs.',
            'Implemented custom Wordpress themes from scratch as per the designs for 10+ websites.',
            'Delivered 10+ websites with engaging user experience and highly optimised code that helped reduce load times by 60% and improved revenue by 35%.',
            'Followed modular and DRY(Don\'t Repeat Yourself) approach throughout the process, leading to decrease in development time by 80%.',
            'Implemented Google Analytics and Facebook Pixel Code which helped the business team understand various user\'s interaction with the website, thus increasing the overall revenue by 15%.',
            'Created an internal workflow process for bulk tasks amongst team members which decreased the turnaround time by 75%.',
            'Supervised and mentored 4 junior team members to achieve high performance of the team and meet all business goals.'
        ]
    },
    {
        position: 'Software Engineer',
        company_name: 'Capgemini',
        period: 'Jul 2014 - Jun 2017',
        roles: [
            'Experienced with Software Development Life Cycle(SDLC) which includes methodologies like Waterfall and Agile method.',
            'Acquired in-depth knowledge of industry\'s best testing practices for Functional and Performance testing of a web application.',
            'Created automated test cases for Functional and Regression testing based on the requirements using Ranorex Studio to decrease testing time by 60%',
            'Experienced in executing SQL queries in order to view successful transactions of data and for validating data.',
            'Reviewed and reported software bug reports, highlighting problem areas.',
            'Trained new hired team members and promoted supportive, performance-oriented atmosphere.'
        ]
    },
];

// portfolio section
const projects = [
    {
        title: 'RESTful API',
        image: 'proj_2.png',
        desc: 'RESTful API for a Vacation Rentals Website using Spring Boot Java framework.',
        stack: 'Java Spring Boot, MongoDB, Postman',
        gitLink: 'https://github.com/manalidarji/relax-inn'
    },
    {
        title: 'Relax-Inn',
        image: 'proj_2.png',
        desc: 'Relax-Inn, a fictional company, allows visitors to find and/or book vacation rentals, cabins, beach houses and unique homes, around the world, specifically for short-term rental.',
        stack: 'HTML, CSS, Javascript, React.js, React-Router',
        gitLink: 'https://github.com/manalidarji/relax-inn'
    },
    {
        title: 'My Portfolio Site',
        image: 'proj_1.png',
        desc: 'My personal website project which tells you about me, skills, experience, education, my projects and a way to contact me.',
        stack: 'HTML, CSS, JS',
        gitLink: 'https://github.com/manalidarji/manalidarji.github.io'
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

// create single experience HTML element
const createSingleExperience  = exp => {
    // create main div 
    const divElem = document.createElement('div');
    divElem.classList.add('single');

    // create sub-heading p tag
    const pElem = document.createElement('p');
    pElem.classList.add('sub-heading');
    pElem.innerText = `${exp.position} | ${exp.company_name}`;
    divElem.appendChild(pElem);

    // create period p tag
    const p2Elem = document.createElement('p');
    const periodElem = document.createElement('em');
    periodElem.innerHTML = exp.period;
    divElem.appendChild(p2Elem).appendChild(periodElem);

    // create roles ul tag
    const UlElem = document.createElement('ul');
    UlElem.classList.add('roles');
    exp.roles.forEach( role => {
        const liElem = document.createElement('li');
        liElem.innerHTML = role;
        UlElem.appendChild(liElem);
    })
    divElem.appendChild(UlElem);

    return divElem;
}

// create single project HTML element
const createSingleProject = project => {
    return `
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
}

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
const header = document.getElementById('header');
const links = document.querySelectorAll('.nav li a');
for (const link of links) {
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop - header.offsetHeight;        
        scroll({
          top: offsetTop,
          behavior: 'smooth'
        });
        mobMenu.classList.remove('active');
    });
}

// populate experience section
const allExpNode = document.getElementById('all-exp-wrap');
experiences.forEach(experience => {
    allExpNode.appendChild(createSingleExperience(experience));
})

// populate portfolio section
const allProjectsNode = document.getElementById('all-projects-wrap');
projects.forEach(project => {
    allProjectsNode.innerHTML += createSingleProject(project);
})

// get current year for footer
const yearElem = document.getElementById('current-year');
yearElem.innerHTML = new Date().getFullYear();