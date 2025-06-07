window.addEventListener("DOMContentLoaded", () => {
  const spline = document.querySelector("spline-viewer");

  const interval = setInterval(() => {
    const shadow = spline?.shadowRoot;
    if (shadow) {
      const logo = shadow.querySelector("#logo");

      if (logo) {
        logo.style.display = "none";
        clearInterval(interval);
        console.log("Logo hidden");
      }
    }
  }, 100);
});
