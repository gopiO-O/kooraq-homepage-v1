function showNotification(message, type = 'info', duration = 3000) {
    const container = document.getElementById('notificationContainer');
    if (!container) return;
    
    const notification = document.createElement('div');
    notification.className = `notification-enhanced notification-${type} p-4 text-white rounded-lg max-w-md`;
    
    const bgColor = {
        'success': 'bg-green-500',
        'error': 'bg-red-500',
        'warning': 'bg-yellow-500',
        'info': 'bg-blue-500'
    }[type] || 'bg-blue-500';
    
    notification.className = `${bgColor} p-4 text-white rounded-lg max-w-md flex items-center justify-between`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()" class="ml-4 text-lg">&times;</button>
    `;
    
    container.appendChild(notification);
    
    if (duration > 0) {
        setTimeout(() => notification.remove(), duration);
    }
}

const devices = [
    'Smartphone Repair',
    'Laptop Repair',
    'Tablet Repair',
    'Gaming Console Repair',
    'Smart TV Repair',
    'Refrigerator Repair',
    'Washing Machine Repair',
    'Air Conditioner Repair',
    'Microwave Repair',
    'Oven Repair',
    'Water Heater Repair',
    'Dishwasher Repair'
];

function showDeviceSuggestions() {
    const searchInput = document.getElementById('headerDeviceSearch');
    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    if (!searchInput || !suggestionsDiv) return;
    
    const value = searchInput.value.toLowerCase().trim();
    
    if (!value) {
        suggestionsDiv.classList.add('hidden');
        return;
    }
    
    const filtered = devices.filter(d => d.toLowerCase().includes(value));
    
    if (filtered.length === 0) {
        suggestionsDiv.innerHTML = '<div class="p-4 text-gray-500">No results found</div>';
    } else {
        suggestionsDiv.innerHTML = filtered.map(device => `
            <div class="p-3 hover:bg-gray-100 cursor-pointer border-b last:border-b-0" onclick="selectDevice('${device}')">
                <i class="fas fa-check-circle text-primary mr-2"></i>${device}
            </div>
        `).join('');
    }
    
    suggestionsDiv.classList.remove('hidden');
}

function selectDevice(device) {
    const searchInput = document.getElementById('headerDeviceSearch');
    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    if (searchInput) {
        searchInput.value = device;
    }
    if (suggestionsDiv) {
        suggestionsDiv.classList.add('hidden');
    }
    
    performSearch(device);
}

function performSearch(device) {
    showNotification(`Searching for ${device}... (Demo: On live site, this would search the database)`, 'info');
}

document.addEventListener('click', function(e) {
    const searchInput = document.getElementById('headerDeviceSearch');
    const suggestionsDiv = document.getElementById('searchSuggestions');
    
    if (searchInput && suggestionsDiv && !searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
        suggestionsDiv.classList.add('hidden');
    }
});

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#book') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

window.addEventListener('load', function() {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate-fade-in-up');
        }, index * 100);
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
    if (scrollTopBtn) {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(phone.replace(/\D/g, ''));
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = 'auto';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach(modal => {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }
});

function handleImageError(img) {
    img.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e5e7eb" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" font-family="system-ui" font-size="14" fill="%239ca3af" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E';
    img.style.backgroundColor = '#f3f4f6';
}

function trackEvent(category, action, label) {
    console.log(`Event: ${category} > ${action} > ${label}`);
}

const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleMobileChange(e) {
    if (e.matches) {
        console.log('Mobile view activated');
    } else {
        console.log('Desktop view activated');
    }
}
mediaQuery.addListener(handleMobileChange);

document.addEventListener('DOMContentLoaded', function() {
    console.log('KooraQ Homepage loaded successfully');
    
    const yearElements = document.querySelectorAll('[data-year]');
    yearElements.forEach(el => {
        el.textContent = new Date().getFullYear();
    });
});
