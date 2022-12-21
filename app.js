// local reviews data
const reviews = [
    {
        id: 1,
        name: "Charity Lanes",
        date: "August 2022",
        img: "images/bowlinglogo.png",
        text:
            "This is a website created for a fictional charity using html and css.",
        project: "Solo Website Project",
        sLink: "https://github.com/Malco31/fictional-charity",
        vLink: "https://malco31.github.io/fictional-charity",
    },
    {
        id: 2,
        name: "Translator",
        date: "August 2022",
        img: "images/language.png",
        text:
            "This is a text translator built from python and the google translate api.",
        project: "Python Unit Project",
        sLink: "https://replit.com/@unit-project-2/Translator-program#poetry.lock",
        vLink: "https://replit.com/@unit-project-2/Translator-program#poetry.lock"
    },
    {
        id: 3,
        name: "Money Up",
        date: "November 2022",
        img: "images/moneyUp.png",
        text:
            "An app for tracking money earned in a workplace, made using the django login system.",
        project: "Solo Django Project",
        sLink: 'https://github.com/Malco31/Ghante.git',
        vLink: 'https://github.com/Malco31/Ghante.git',
    },
    {
        id: 4,
        name: "Subscriptify",
        date: "November 2022",
        img: "images/3.png",
        text:
            "An app for keeping track of how much you spend on subscriptions, made using the django login system.",
        project: "Group Django Project",
        sLink: 'https://github.com/coltfields23/Subscription-Manager.git',
        vLink: 'https://github.com/coltfields23/Subscription-Manager.git',
    },
    
    
];

// select items
const img = document.getElementById('person-img');
const title = document.getElementById('title');
const date = document.getElementById('date');
const info = document.getElementById('info');
const type = document.getElementById('type');
const source_link = document.getElementById('source_link');
const visit_link = document.getElementById('visit_link');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');


// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded',function(){
    showPerson(currentItem);
});

// show person based on item

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    title.textContent = item.name;
    date.textContent = item.date;
    info.textContent = item.text;
    type.textContent = item.project;
    source_link.setAttribute('href', `${item.sLink}`);
    visit_link.setAttribute('href', `${item.vLink}`)
}

// show next person

nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show previous person

prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});

