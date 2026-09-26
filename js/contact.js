const form = document.getElementById("contactForm");
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");
const status = document.getElementById("formStatus");

message.addEventListener("input", () => {
  charCount.textContent = `${message.value.length} / 2000`;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.classList.remove("error");
  status.textContent = "";
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `[AnimeFlix Contact] ${data.get("subject")}`;
  const body = [`Name: ${data.get("name")}`, `Email: ${data.get("email")}`, `Topic: ${data.get("subject")}`, "", data.get("message")].join("\n");
  status.textContent = "Opening your email app with your message…";
  window.location.href = `mailto:contact@animeflix.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
