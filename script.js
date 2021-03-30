window.addEventListener("scroll", () => {
  let content = document.querySelector(".container");
  let contentPos = content.getBoundingClientRect().top;
  let screenPos = window.innerHeight / 1.2;
  if (contentPos < screenPos) {
    content.classList.add("active");
  } else {
    content.classList.remove("active");
  }
});
