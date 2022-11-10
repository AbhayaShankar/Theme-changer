let icon = document.querySelector(".theme-changer");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "dark.PNG";
  } else {
    icon.src = "light.PNG";
  }
};
