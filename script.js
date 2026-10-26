const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const servicesDropdown = document.querySelector('.nav-dropdown');
if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuToggle.textContent = open ? '×' : '☰';
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 820 && !link.classList.contains('nav-services')) {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
      }
    });
  });
}
const servicesLink = document.querySelector('.nav-services');
if (servicesLink && servicesDropdown) {
  servicesLink.addEventListener('click', (event) => {
    if (window.innerWidth <= 820) {
      event.preventDefault();
      servicesDropdown.classList.toggle('expanded');
    }
  });
}
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Website enquiry: ${data.get('service')}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nArea of assistance: ${data.get('service')}\n\nDescription:\n${data.get('message')}\n\nSent via www.corplep.in`;
    const mailto = `mailto:corplep06@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Opening your email application. Please review and send the prepared message there.';
    window.location.href = mailto;
  });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
