(() => {
  const intro = document.querySelector(".fv-intro");
  if (!intro) return;

  if (document.querySelector(".app")?.dataset.view !== "new") {
    intro.remove();
    return;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    intro.remove();
    return;
  }

  const orb = intro.querySelector(".fv-intro-orb");
  orb.classList.add("fv-enter");

  window.setTimeout(() => {
    const logo = intro.querySelector(".fv-intro-logo");
    const brand = document.querySelector(".brand-image");

    if (logo && brand) {
      const from = logo.getBoundingClientRect();
      const to = brand.getBoundingClientRect();
      intro.style.setProperty("--brand-shift-x", `${to.left + to.width / 2 - from.left - from.width / 2}px`);
      intro.style.setProperty("--brand-shift-y", `${to.top + to.height / 2 - from.top - from.height / 2}px`);
      intro.style.setProperty("--brand-shift-scale", String(Math.min(to.width / (from.width * .75), to.height / (from.height * .89))));
    }

    intro.classList.add("fv-exit");
  }, 1150);

  window.setTimeout(() => {
    intro.style.pointerEvents = "none";
    const fade = intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: "ease-out", fill: "forwards" });
    fade.onfinish = () => intro.remove();
  }, 1400);
})();
