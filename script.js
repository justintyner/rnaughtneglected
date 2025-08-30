// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Audio Player Modal
const modal = document.getElementById('audioModal');
const closeBtn = document.querySelector('.close');
const episodeTitle = document.getElementById('episodeTitle');
const audioPlayer = document.getElementById('audioPlayer');
const showNotes = document.getElementById('showNotes');

// Episode data with show notes and audio sources
const episodes = {
    1: {
        title: "Episode 1: Introduction to NTDs",
        audioSrc: "episodes/episode1.mp3", // You'll need to add actual audio files
        showNotes: `
            <h5>Episode Summary</h5>
            <p>In this inaugural episode, we explore the world of neglected tropical diseases (NTDs) and their impact on global health.</p>
            
            <h5>Key Topics Covered</h5>
            <ul>
                <li>Definition and classification of NTDs</li>
                <li>Global prevalence and affected populations</li>
                <li>Economic and social impact</li>
                <li>Current research initiatives</li>
            </ul>
            
            <h5>References & Resources</h5>
            <ul>
                <li><a href="https://www.who.int/neglected_diseases/en/" target="_blank">WHO NTD Information</a></li>
                <li><a href="https://www.cdc.gov/globalhealth/ntd/" target="_blank">CDC Global NTD Program</a></li>
                <li>Research Paper: "The Global Burden of Disease Study"</li>
            </ul>
            
            <h5>Contact Information</h5>
            <p>For questions about this episode or to suggest future topics, email us at info@rnaughtneglected.org</p>
        `
    },
    2: {
        title: "Episode 2: Research Spotlight",
        audioSrc: "episodes/episode2.mp3",
        showNotes: `
            <h5>Episode Summary</h5>
            <p>This episode highlights breakthrough research in NTD treatment and prevention, featuring interviews with leading researchers.</p>
            
            <h5>Featured Research</h5>
            <ul>
                <li>Novel drug delivery systems for parasitic infections</li>
                <li>Vaccine development progress</li>
                <li>Community-based intervention strategies</li>
                <li>Technology innovations in diagnosis</li>
            </ul>
            
            <h5>Guest Researchers</h5>
            <ul>
                <li>Dr. Sarah Chen - Parasitology Research Institute</li>
                <li>Prof. Michael Rodriguez - Global Health University</li>
                <li>Dr. Aisha Patel - Community Health Foundation</li>
            </ul>
            
            <h5>Additional Resources</h5>
            <ul>
                <li><a href="#" target="_blank">Research Institute Website</a></li>
                <li>Journal Article: "Advances in NTD Treatment"</li>
                <li>Community Health Guidelines</li>
            </ul>
        `
    },
    3: {
        title: "Episode 3: Community Impact",
        audioSrc: "episodes/episode3.mp3",
        showNotes: `
            <h5>Episode Summary</h5>
            <p>We share powerful stories from communities affected by NTDs and the healthcare workers making a difference.</p>
            
            <h5>Community Stories</h5>
            <ul>
                <li>Rural village in Sub-Saharan Africa</li>
                <li>Urban community in South America</li>
                <li>Indigenous populations in Asia</li>
                <li>Healthcare worker experiences</li>
            </ul>
            
            <h5>Key Takeaways</h5>
            <ul>
                <li>Importance of community engagement</li>
                <li>Cultural sensitivity in healthcare</li>
                <li>Sustainable intervention strategies</li>
                <li>Success stories and challenges</li>
            </ul>
            
            <h5>How to Help</h5>
            <ul>
                <li>Support local health initiatives</li>
                <li>Volunteer with health organizations</li>
                <li>Donate to research programs</li>
                <li>Spread awareness about NTDs</li>
            </ul>
        `
    }
};

// Function to play episode
function playEpisode(episodeNumber) {
    const episode = episodes[episodeNumber];
    if (episode) {
        episodeTitle.textContent = episode.title;
        audioPlayer.src = episode.audioSrc;
        showNotes.innerHTML = episode.showNotes;
        modal.style.display = 'block';
        
        // Reset audio player
        audioPlayer.currentTime = 0;
        audioPlayer.pause();
    }
}

// Close modal when clicking the close button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    audioPlayer.pause();
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        audioPlayer.pause();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        audioPlayer.pause();
    }
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission (replace with actual form handling)
    const submitButton = this.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Simulate API call delay
    setTimeout(() => {
        // Success message
        alert('Thank you for your message! We\'ll get back to you soon.');
        
        // Reset form
        this.reset();
        
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }, 1500);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.episode-card, .stat-item, .about-text h3');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Audio player progress tracking
audioPlayer.addEventListener('timeupdate', () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    // You can add a custom progress bar here if needed
});

// Audio player ended event
audioPlayer.addEventListener('ended', () => {
    // Auto-close modal after episode ends
    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000);
});

// Add loading states for audio
audioPlayer.addEventListener('loadstart', () => {
    showNotes.innerHTML = '<p>Loading episode...</p>';
});

audioPlayer.addEventListener('canplay', () => {
    // Episode loaded successfully
});

audioPlayer.addEventListener('error', () => {
    showNotes.innerHTML = '<p>Error loading episode. Please try again later.</p>';
});

// Keyboard shortcuts for audio player
document.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
        switch(event.key) {
            case ' ':
                event.preventDefault();
                if (audioPlayer.paused) {
                    audioPlayer.play();
                } else {
                    audioPlayer.pause();
                }
                break;
            case 'ArrowRight':
                event.preventDefault();
                audioPlayer.currentTime += 10;
                break;
            case 'ArrowLeft':
                event.preventDefault();
                audioPlayer.currentTime -= 10;
                break;
        }
    }
}); 