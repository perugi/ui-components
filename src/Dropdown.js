export default class Dropdown {
  static turnIntoDropdown(element) {
    const toggle = element.querySelector('.dropdown-toggle');
    const content = element.querySelector('.dropdown-content');

    toggle.addEventListener('click', () => {
      if (content.classList.contains('show')) {
        content.classList.remove('show');
        return;
      }
      content.classList.add('show');
    });

    document.addEventListener('click', (event) => {
      if (!toggle.contains(event.target)) {
        content.classList.remove('show');
      }
    });
  }

  static turnAllIntoDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((element) => {
      this.turnIntoDropdown(element);
    });
  }
}
