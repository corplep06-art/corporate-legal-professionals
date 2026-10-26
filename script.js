// Mobile navigation
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  menuButton.textContent = open ? "×" : "☰";
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

// Current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Static-site contact form: prepare a message in the visitor's email app.
// This does not transmit or store submissions by itself.
document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get("name")).trim();
  const email = String(data.get("email")).trim();
  const topic = String(data.get("topic"));
  const message = String(data.get("message")).trim();

  const subject = encodeURIComponent(`Website enquiry: ${topic}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nArea of enquiry: ${topic}\n\nMessage:\n${message}`
  );

  document.getElementById("form-status").textContent =
    "Your email application should open with the enquiry prepared. Please send it from your email app.";
  window.location.href = `mailto:corplep06@gmail.com?subject=${subject}&body=${body}`;
});


// Preselect an enquiry topic when visitors choose a service pathway.
document.querySelectorAll('[data-topic]').forEach((link) => {
  link.addEventListener('click', () => {
    const topic = document.getElementById('topic');
    const message = document.getElementById('message');
    if (topic && message) {
      const wanted = link.getAttribute('data-topic');
      const option = Array.from(topic.options).find((item) => item.text.toLowerCase().includes(wanted.toLowerCase().split(' ')[0]));
      if (option) topic.value = option.value;
      if (!message.value.trim()) message.value = `I would like to enquire about ${wanted}.`;
    }
  });
});
