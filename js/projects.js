window.addEventListener("load", () => {
  let btn = document.querySelector(".btn");
  let projects = document.querySelector(".projects");
  let service = document.querySelector(".services");
  let info = document.querySelector(".about-project");
  btn.addEventListener("click", openSection);

  function openSection() {
    info.style.display = "none";
    btn.style.opacity = "0";
    openService();
  }
  function openService() {
    service.style.opacity = "1";
  }
});
