(() => {
  // <stdin>
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("main");
    window.addEventListener("hashchange", () => {
      let selector = window.location.hash;
      if (!selector) {
        selector = "section:first-child";
      }
      let el = container.querySelector(selector);
      if (el) {
        el.scrollIntoView();
      }
    });
  });
})();
