// Particle Background
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 100 },
    "size": { "value": 3 }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" }
    }
  }
});
// Open modal
function openModal() {
  document.getElementById('loginModal').style.display = 'flex';
}

// Close modal
function closeModal() {
  document.getElementById('loginModal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
  if (event.target == document.getElementById('loginModal')) {
    closeModal();
  }
}

// Smooth Scroll for Navigation
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
  
function openModal() {
  document.getElementById("loginModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}

function openBookingModal() {
  document.getElementById("bookingModal").style.display = "flex";
}

function closeBookingModal() {
  document.getElementById("bookingModal").style.display = "none";
}
