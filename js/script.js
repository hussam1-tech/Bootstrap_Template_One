const tabs = document.querySelectorAll(".work .tabs li");
const navLinks = document.querySelectorAll("nav .nav-item a");
const workCols = document.querySelectorAll(".work .row > div");
navLinks.forEach((link) => {
  link.addEventListener("click", ()=> {
    navLinks.forEach((link) => {
      link.classList.remove("active");
    })
    link.classList.add("active");
  })
})
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    workCols.forEach((col) => {
      col.style.display = "none";
      if (
        e.target.dataset.work === col.dataset.work ||
        e.target.dataset.work === "All"
      ) {
        col.style.display = "block";
      }
    });
  });
});
let timeEl = document.querySelector("footer time");
let year = new Date().getFullYear();
timeEl.textContent = year;
timeEl.setAttribute("datetime", year);