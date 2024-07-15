const sidebar = document.querySelector(".sidebar");
const blockDom = document.querySelector(".sidebar .block-dom");
const closeSideBar = document.querySelector(
  ".sidebar .sidebar-content .close-sidebar"
);
const showSideBar = document.querySelector(".show-sidebar");

showSideBar.addEventListener("click", () => sidebar.classList.add("show"));

closeSideBar.addEventListener("click", () => sidebar.classList.remove("show"));

blockDom.addEventListener("click", () => sidebar.classList.remove("show"));
