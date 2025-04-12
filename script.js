// Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navContainer = document.querySelector('.nav-container');
const mainContent = document.querySelector('.main-content');

navToggle.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    mainContent.classList.toggle('shifted');
});

// Search Functionality
const searchBar = document.getElementById('searchBar');
const aiCards = document.querySelectorAll('.ai-card');
const noResults = document.querySelector('.no-results');

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    let hasResults = false;
    
    aiCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            card.style.display = 'block';
            hasResults = true;
        } else {
            card.style.display = 'none';
        }
    });
    
    noResults.style.display = hasResults ? 'none' : 'block';
});

// Category Filter nav links
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const category = link.getAttribute('href').substring(1);

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        aiCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Scroll Up Button
const scrollUpBtn = document.querySelector('.scroll-up-btn');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        scrollUpBtn.style.display = 'block';
    } else {
        scrollUpBtn.style.display = 'none';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

scrollUpBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Footer Links Navigation
const footerLinks = document.querySelectorAll('.footer-link');
const pages = document.querySelectorAll('.page');

footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        
        mainContent.style.display = 'none';
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
        const selectedPage = document.getElementById(pageId);
        selectedPage.classList.add('active');
        selectedPage.style.display = 'block';
    });
});

// Link Contact from About and Privacy pages back to Contact page
const contactLinks = document.querySelectorAll('.contact-link');
contactLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.style.display = 'none';
        pages.forEach(page => page.classList.remove('active'));
        document.getElementById('contact-page').classList.add('active');
    });
});

const modeToggle = document.querySelector('.mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeToggle.textContent = document.body.classList.contains('light-mode') ? '☀' : '🌙';
});

// Back Button
const backButtons = document.querySelectorAll('.back-btn');
backButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        mainContent.style.display = 'block';
        pages.forEach(page => {
            page.classList.remove('active');
            page.style.display = 'none';
        });
    });
});