import './reset.css';
import './styles.css';

import Utilities from '@perugi/web-utilities';
import Dropdown from './Dropdown';
import MobileMenu from './MobileMenu';

Utilities.renderGHLogo();

Dropdown.turnAllIntoDropdowns({ activateOnHover: false });

const dropdownContainer = document.getElementById('dropdown-container');
const orientationSwitcher = document.getElementById('dropdown-orientation');
orientationSwitcher.addEventListener('change', () => {
  if (orientationSwitcher.checked) {
    dropdownContainer.style.flexDirection = 'column';
  } else {
    dropdownContainer.style.flexDirection = 'row';
  }
});

const activationSwitcher = document.getElementById('dropdown-activation');
activationSwitcher.addEventListener('change', () => {
  if (activationSwitcher.checked) {
    Dropdown.turnAllIntoDropdowns({ activateOnHover: true });
  } else {
    Dropdown.turnAllIntoDropdowns({ activateOnHover: false });
  }
});

const mobileMenu = document.querySelector('.mobile-menu');
MobileMenu.turnIntoMobileMenu(mobileMenu);
