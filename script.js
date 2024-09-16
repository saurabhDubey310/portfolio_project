function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open")
  icon.classList.toggle("open")
}

const toggleSwitch = document.getElementById('switch');
const modeText = document.querySelector('.mode');

toggleSwitch.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    modeText.textContent = 'Dark';
  } else {
    modeText.textContent = 'Light';
  }
});
