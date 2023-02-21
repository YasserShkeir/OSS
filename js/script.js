const h2 = document.querySelector("h2");

function handleResize() {
  if (window.matchMedia("(min-width: 600px)").matches) {
    h2.innerHTML = "<b>Orso Software</b>";
  } else {
    h2.innerHTML = "<b>Or</b>ganic <b>So</b>cial <b>So</b>ftware";
  }
}

handleResize();

window.addEventListener("resize", handleResize);
