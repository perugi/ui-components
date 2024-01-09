import './reset.css';
import './styles.css';

import GhLogo from './img/githublogo.png';

const content = document.querySelector('.content');
content.textContent = 'Hello, world!';

const ghLogo = document.querySelector('#gh-logo');
ghLogo.src = GhLogo;
