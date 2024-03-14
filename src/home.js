import Home from './img-font/home2.jpg';
import Fb from './img-font/fb.svg';
import Insta from './img-font/insta.svg';


const homePage = () => {

  const mainBg = document.createElement('div');

  const background = new Image();
  background.src = Home;
  background.classList.add('homeBg')

  const name = document.createElement('h1');
  name.textContent = "Taste Bistro";
  name.classList.add('name');

  const slogan = document.createElement('h3');
  slogan.textContent = "A taste you'll remember.";
  slogan.classList.add('slogan');

  mainBg.append(slogan)
  mainBg.append(background)
  mainBg.append(name)
  content.append(mainBg)

  return mainBg
}

const footer = () => {
  const foot = document.createElement('footer');

  const location = document.createElement('div');
  const title = document.createElement('h4');
  title.textContent = "Location";
  const address = document.createElement('p');
  address.textContent = "2345 Elm Street\nBokerville, NY 10001";
  location.append(title)
  location.append(address)


  const hours = document.createElement('div');
  const title2 = document.createElement('h4');
  title2.textContent = "Hours";
  const hoursOpen = document.createElement('p');
  hoursOpen.textContent = "Tuesday - Sunday, 12:00pm - 10:00pm";

  hours.append(title2);
  hours.append(hoursOpen);

  const socials = document.createElement('div');
  const title3 = document.createElement('h4');
  title3.textContent = "Socials";

  const ig = new Image();
  ig.src = Insta;
  ig.classList.add('media');

  const faceBook = new Image();
  faceBook.src = Fb;
  faceBook.classList.add('media')

  socials.append(title3);
  socials.append(faceBook);
  socials.append(ig);

  foot.append(location)
  foot.append(hours)
  foot.append(socials)

  return foot
}

const createHomePage = () => {
  const content = document.querySelector('#content');
  content.style.backgroundColor = 'white';
  content.style.height = 'auto';
  content.append(homePage());
  content.append(footer())
}

export default createHomePage;