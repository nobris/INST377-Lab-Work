function getRandomIntInclusive(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.floor(
    Math.random() * (newMax - newMin + 1) + newMin
  );
}

function restoArrayMake(dateArray) {
  console.log('fired DataHandler');
  const range = [...Array(15).keys()];
  const listItems = range.map((item, index) => {
    const restNum = getRandomIntInclusive(0, dateArray.length - 1);
    return dateArray[restNum];
  });
  return listItems;
}

function createHtmlList(collection) {
  console.log('fired HTML creator');
  console.log(collection);
  const targetList = document.querySelector('.resto-list');
  targetList.innerHTML = '';
  collection.forEach((item) => {
    const {name} = item;
    const displayName = name.toLowerCase();
    // eslint-disable-next-line no-template-curly-in-string
    const injectThisItem = '<li>${displayName}</li>';
    targetList.innerHTML += injectThisItem;
  })
}

function initMap(targetId) {
  const map = L.map(targetId).setView([51.505, -0.09], 13);
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(map);
  return map;
}

async function mainEvent() { // the async keyword means we can make API requests
  console.log('script loaded');
  const form = document.querySelector('.main_form');
  const submit = document.querySelector('.submit_button');

  const resto = document.querySelector('#resto_name');
  const zipcode = document.querySelector('#zipcode');
  const map = initMap('map');
  submit.style.display = 'none';

  const arrayFromJson = {data: []};

  if (arrayFromJson.data.length > 0) {
    submit.style.display = 'block';
    let currentArray = [];

  }
}

// this actually runs first! It's calling the function above
document.addEventListener('DOMContentLoaded', async () => mainEvent()); // the async keyword means we can make API requests
