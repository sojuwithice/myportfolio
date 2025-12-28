// Page Navigation
function showPage(pageNumber) {
    // Hide all pages
    document.querySelectorAll('.page-container').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(`page${pageNumber}`).classList.add('active');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Copy to Clipboard Function
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show copied message
        alert(`Copied to clipboard: ${text}`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

// Add animation to project cards on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
        }
    });
}, { threshold: 0.1 });

// Observe all project cards and activity items
document.querySelectorAll('.project-card, .achievement-item, .activity-item').forEach(item => {
    item.style.opacity = '0';
    observer.observe(item);
});

// Add hover effect to contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});

// Initialize with Page 1
showPage(1);