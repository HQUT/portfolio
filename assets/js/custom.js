// Dark Mode Toggle with Local Storage
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Spara användarens inställning i localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.setItem("darkMode", "disabled");
  }
}

// Kontrollera och applicera användarens Dark Mode-inställning vid sidladdning
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

// Toggle Contact Information
function toggleContact() {
  let contactInfo = document.getElementById("contact-info");
  
  if (contactInfo.classList.contains("show")) {
    contactInfo.style.maxHeight = "0px";
    setTimeout(() => contactInfo.classList.remove("show"), 300);
  } else {
    contactInfo.classList.add("show");
    contactInfo.style.maxHeight = contactInfo.scrollHeight + "px";
  }
}

// Toggle Mobile Menu
function toggleMenu() {
  let navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener("click", function(event) {
  let menu = document.querySelector(".nav-links");
  let toggleButton = document.querySelector(".menu-toggle");

  if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
    menu.classList.remove("active");
  }
});

// Smooth Scroll Effect for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // Stäng menyn på mobil efter klick
      document.querySelector('.nav-links').classList.remove('active');
    }
  });
});
