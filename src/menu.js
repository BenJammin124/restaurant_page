import Burger from './img-font/burger.jpg'

const createMenu = () => {
  const menuContainer = document.createElement('div');
  menuContainer.style.backgroundColor = "black";

  const title = document.createElement('h1');
  title.textContent = "Our Menu";
  title.classList.add('menu-title')
  title.style.color = "white";

  menuContainer.append(title);

  return menuContainer
}

const menuItems = [
  {
    title: "scallops",
    description: "cauliflower, meyer lemon, capers, watercress",
    price: 20,
  },
  {
    title: "brick chicken",
    description: "creamed greens, lemon",
    price: 19
  },
  {
    title: "country fried ham steak",
    description: "curly endive, leeks vinaigrette",
    price: 15
  },
  {
    title: "grass-fed & finished burger",
    description: "white cheddar, pickled red onions, lettuce, potato roll",
    price: 19
  },
  {
    title: "country pate",
    description: "cherry mustards, cornichons, sourdough",
    price: 10
  },
  {
    title: "caesar salad",
    description: "chicories, parmesan croutons, anchovy, shaved parmesan",
    price: 10
  }
];

const createMenuItems = () => {
  const menuItemsContainer = document.createElement('div');
  menuItemsContainer.classList.add('white')
  menuItems.forEach((item) => {
    const menuCard = document.createElement('div');
    const menuCardLeft = document.createElement('div');
    const menuCardRight = document.createElement('div');
    menuCardLeft.classList.add('menu-card-left')
    menuCard.classList.add('menu-card')

    const title = document.createElement('h2');
    title.textContent = item.title;

    const details = document.createElement('p');
    details.textContent = item.description;
    menuCardLeft.append(title)
    menuCardLeft.append(details)

    const price = document.createElement('p');
    price.textContent = item.price;
    price.classList.add('price')
    menuCardRight.append(price);


    menuCard.append(menuCardLeft)
    menuCard.append(menuCardRight)
    menuItemsContainer.append(menuCard)

  })
  const burger = new Image();
  burger.src = Burger;
  burger.classList.add('burger-img')
  menuItemsContainer.append(burger);

  return menuItemsContainer
}

const loadMenu = () => {
  const content = document.querySelector('#content');
  content.textContent = "";
  content.style.backgroundColor = "black";
  // content.style.height = '100vh'
  content.append(createMenu())
  content.append(createMenuItems())
}

export default loadMenu