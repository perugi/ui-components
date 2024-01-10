export default class MobileMenu {
  static turnIntoMobileMenu(mobileMenu) {
    const menuItems = mobileMenu.querySelector('.menu-items');
    const dropdown = mobileMenu.querySelector('.dropdown ul');
    const MIN_ITEM_SIZE = 80;

    window.addEventListener('resize', () => {
      const menuItemsElements = [...menuItems.querySelectorAll('li')];
      const maxItemsInMenu = Math.floor(menuItems.offsetWidth / MIN_ITEM_SIZE);

      if (menuItemsElements.length > maxItemsInMenu) {
        dropdown.insertBefore(
          menuItems.lastElementChild,
          dropdown.firstElementChild
        );
      } else if (menuItemsElements.length < maxItemsInMenu) {
        if (dropdown.firstElementChild.classList.contains('dropdown-item'))
          return;

        menuItems.appendChild(dropdown.firstElementChild);
      }
    });
  }
}
