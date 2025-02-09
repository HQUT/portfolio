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

// Toggle Dropdown Menu
document.addEventListener("click", function(event) {
  let dropdown = document.querySelector(".dropdown");
  let dropdownMenu = document.querySelector(".dropdown-content");

  if (dropdown.contains(event.target)) {
    dropdownMenu.classList.toggle("show");
  } else {
    dropdownMenu.classList.remove("show");
  }
});
