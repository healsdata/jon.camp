const selectElement = document.querySelector(".side-menu");

selectElement.addEventListener("change", (event) => {
  window.location = `${event.target.value}`;
});
