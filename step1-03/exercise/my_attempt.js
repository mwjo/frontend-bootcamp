function getFavs() {
  let favList = [];
  const inputs = document.querySelectorAll('input');
  for (const input of inputs) {
    if (input.checked === true) {
      console.log('hi');
      favList.push(input.parentNode.textContent);
    }
  }

  console.log(favList);

  const favorites = document.querySelector('.favorites');
  favorites.textContent = favList.join(' ');
}

const button = document.querySelector('button');

button.onclick = getFavs;

/*
Their answer

function getFavs() {
  let favList = [];
  const inputs = document.querySelectorAll('input');
  for (const input of inputs) {
    if (input.checked === true) {
      favList.push(input.parentNode.textContent);
    }
  }
  document.querySelector('.favorites').textContent = favList.join(' ');
}

let button = document.querySelector('button');

button.addEventListener('click', getFavs);*/
