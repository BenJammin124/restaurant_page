import Map from './img-font/map.png';

const createTitle = () => {
  const titleContacts = document.createElement('div');
  titleContacts.style.backgroundColor = "black";

  const title = document.createElement('h1');
  title.textContent = "Contact us";
  title.classList.add('menu-title')
  title.style.color = "white";

  titleContacts.append(title);

  return titleContacts
}

const contactSection = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('white');

  const title = document.createElement('h2')
  title.textContent = 'Location';
  title.classList.add('contact-title');

  const map = new Image();
  map.src = Map
  map.classList.add('map-img')

  const location = document.createElement('p');
  location.innerHTML = '2345 Elm Street<br>Bokerville, NY 10001'
  location.classList.add('margin-left')


  const title2 = document.createElement('h2');
  title2.textContent = 'Phone';
  title2.classList.add('contact-title');

  const phoneNum = document.createElement('a');
  phoneNum.textContent = '(555)555-5555'
  phoneNum.setAttribute('href', 'tel:(555)555-5555');
  phoneNum.classList.add('margin-left')

  const title3 = document.createElement('h2');
  title3.textContent = 'Email';
  title3.classList.add('contact-title');

  const emailForm = document.createElement('form');
  emailForm.innerHTML = `
    <fieldset class="email-form">
      <legend>Send us a message</legend>
      <div class="flex">
        <label for="name" >Name </label>
        <input type="text" id="name" placeholder="First and last name"/>
      </div>
      <div class="flex">
        <label for="email" >Email </label>
        <input type="email" id="email" placeholder="Email"/>
      </div>
      <div class="flex">
        <label for="phone" >Phone Number </label>
        <input type="text" id="phone" placeholder="ex) (123)123-1234"/>
      </div>
      <div class="flex">
        <label for="message">Your Message </label>
        <textarea id="message" rows="7" cols="50" placeholder="Your message..."></textarea>
      </div>
      <button>Send Message</button>
    </fieldset>`


  contactContainer.append(title)
  contactContainer.append(map)
  contactContainer.append(location)
  contactContainer.append(title2)
  contactContainer.append(phoneNum)
  contactContainer.append(title3)
  contactContainer.append(emailForm)

  return contactContainer
}


const loadContact = () => {
  const content = document.querySelector('#content');
  content.textContent = '';
  content.style.backgroundColor = "black";
  // content.style.height = '100vh'
  content.append(createTitle())
  content.append(contactSection())
}

export default loadContact