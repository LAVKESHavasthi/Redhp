// Basic interactions

document.addEventListener("DOMContentLoaded", () => {
  // Search input focus effect
  const searchBox = document.querySelector(".search-box input");
  searchBox.addEventListener("focus", () => {
    searchBox.style.border = "1px solid #d50000";
  });
  searchBox.addEventListener("blur", () => {
    searchBox.style.border = "1px solid #ccc";
  });

  // Bottom nav active state
  const navItems = document.querySelectorAll(".bottom-nav .nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
    });
  });
});