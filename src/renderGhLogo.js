export default function renderGhLogo(filepath = './img/githublogo.png') {
  const ghLogoElement = document.querySelector('#gh-logo');
  ghLogoElement.src = filepath;
}
