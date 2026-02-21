let tabs = document.querySelectorAll(".work .tabs li");
let workCols = document.querySelectorAll(".work .row > div");
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