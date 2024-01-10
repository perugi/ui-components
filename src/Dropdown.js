export default class Dropdown {
  static turnIntoDropdown(element, options) {
    const copiedElement = element.cloneNode(true);
    element.parentNode.replaceChild(copiedElement, element);

    const toggle = copiedElement.querySelector('.dropdown-toggle');
    const content = copiedElement.querySelector('.dropdown-content');

    if (options.activateOnHover) {
      toggle.addEventListener('mouseenter', () => this.#showContent(content));
      toggle.addEventListener('mouseleave', () => this.#hideContent(content));

      content.addEventListener('mouseenter', () => this.#showContent(content));
      content.addEventListener('mouseleave', () => this.#hideContent(content));
    } else {
      toggle.addEventListener('click', () => this.#toggleContent(content));
    }

    document.addEventListener('click', (event) => {
      if (!toggle.contains(event.target)) {
        this.#hideContent(content);
      }
    });
  }

  static #showContent(content) {
    content.classList.add('show');
  }

  static #hideContent(content) {
    content.classList.remove('show');
  }

  static #toggleContent(content) {
    if (content.classList.contains('show')) {
      this.#hideContent(content);
    } else {
      this.#showContent(content);
    }
  }

  static turnAllIntoDropdowns(options) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((element) => {
      this.turnIntoDropdown(element, options);
    });
  }
}
