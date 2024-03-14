import './style.css'
import homePage from './home'
import Menu from './menu'
import Contact from './contact'


const content = document.querySelector('#content')

const navBar = () => {
  const nav = document.querySelector('nav');
  nav.textContent = ''
  nav.classList.add('nav-bar');

  const homeBtn = document.createElement('button');
  homeBtn.classList.add('nav-btn');
  homeBtn.textContent = 'Home';
  homeBtn.addEventListener("click", loadPage)

  const menuBtn = document.createElement('button');
  menuBtn.classList.add('nav-btn')
  menuBtn.textContent = 'Menu';
  menuBtn.addEventListener("click", Menu)

  const contactBtn = document.createElement('button');
  contactBtn.classList.add('nav-btn');
  contactBtn.textContent = 'Contact';
  contactBtn.addEventListener("click", Contact)

  nav.appendChild(homeBtn)
  nav.append(menuBtn)
  nav.append(contactBtn)

  return nav
}

const loadPage = () => {
  content.textContent = '';
  navBar();
  homePage();
}

loadPage();
console.log('ITS JOHHNYYY!!')