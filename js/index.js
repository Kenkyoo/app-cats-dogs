import axios from 'axios';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'purecss/build/pure.css';

const endpoint = 'v1/images/search?';
const cats_endpoint = 'https://api.thecatapi.com/';
const api_key_cats = 'api_key=live_s7PPBUb1ZMsADaBG8Wb4awOjPMMfbmKyLaocqJo4wIJx8Nd3wiAThaCg6zm5ewyL';
const dogs_endpoint = 'https://api.thedogapi.com/';
const api_key_dogs = 'api_key=live_6Z7uqwLPytsjvJhDN0NtGgpAL06XRcyOnJ8fMZYEYQ78ebzak5erBDVbKBccHZMi';

const limit = 20;
let page = 1;
const switchRounded = document.getElementById('switchRounded');
const loadMoreButton = document.getElementById('load-more');
const btnRegenerate = document.getElementById('btn-regenerate');
const container = document.getElementById('container');
const breedsSelect = document.getElementById('multi-breed');

window.addEventListener("DOMContentLoaded", () => {
  loadMoreItems();
  loadedImages();
  listBreeds();
});

switchRounded.addEventListener('change', () => {
  container.innerHTML = '';
  page = 1; // Reiniciar página al cambiar el endpoint
  loadMoreItems();
});

loadMoreButton.addEventListener('click', () => {
  page++;
  loadMoreItems();
});

btnRegenerate.addEventListener('click', () => {
  container.innerHTML = '';
  loadMoreItems();
});

function loadMoreItems() {
  let url = '';
  
  if (switchRounded.checked) {
    url = `${cats_endpoint}${endpoint}limit=${limit}&page=${page}&${api_key_cats}`;
  } else {
    url = `${dogs_endpoint}${endpoint}limit=${limit}&page=${page}&${api_key_dogs}`;
  }

  axios.get(url)
    .then(response => {
      displayImages(response.data);
    })
    .catch(error => console.error('Error al cargar los elementos:', error));


}

function displayImages(data) {
  let imgs = '';
  data.forEach(img => {
    imgs += `
      <div>
        <a href="${img.url}" data-fancybox="gallery-a">
          <img src="${img.url}" />
        </a>
      </div>
    `;
  });
  container.innerHTML += imgs; // Añadir imágenes al contenedor sin limpiar el contenido previo
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
}

function loadedImages() {
  axios.get('https://api.thecatapi.com/v1/images/search?limit=4&api_key=live_s7PPBUb1ZMsADaBG8Wb4awOjPMMfbmKyLaocqJo4wIJx8Nd3wiAThaCg6zm5ewyL')
  .then(function (response) {
    const data = response.data;
    // handle success
  const pureG = document.getElementById('pure-g');
  data.forEach(image => {
    const img = document.createElement('img');
    img.src = image.url;
    const div = document.createElement('div');
    div.classList.add('pure-u-1-4');
    div.appendChild(img);
    pureG.appendChild(div);
  });
})
}

function listBreeds() {
  axios.get('https://api.thecatapi.com/v1/breeds')
      .then(function (response) {
          // handle success
          createOptions(response.data);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .finally(function () {
          // always executed
      });
}

function createOptions(data) {
  data.forEach(breed => {
    console.log(breed);
      const option = document.createElement('option');
      option.dataset.id = breed.id;
      option.dataset.desc = breed.description;
      option.dataset.name = breed.name;
      option.dataset.temp = breed.temperament;
      option.dataset.origin = breed.origin;
      option.dataset.info = breed.wikipedia_url;
      option.textContent = breed.name;
      breedsSelect.appendChild(option);
  });
}

breedsSelect.onchange = function(event) {
  const selectedBreed = event.target.options[event.target.selectedIndex];
  const breed_id = selectedBreed.dataset.id;
  const breed_name = selectedBreed.dataset.name;
  const breed_desc = selectedBreed.dataset.desc;
  const breed_origin = selectedBreed.dataset.origin;
  const breed_temp = selectedBreed.dataset.temp;
  const breed_info = selectedBreed.dataset.info;

  axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}`)
      .then(function (response) {
          // handle success
          showImgBreed(response.data);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .finally(function () {
          // always executed
      });
  axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breed_id}&limit=15`)
      .then(function (response) {
          // handle success
          console.log(response);
          
          showImgsBreeds(response.data);
      })
      .catch(function (error) {
          // handle error
          console.log(error);
      })
      .finally(function () {
          // always executed
      });      
  showDataBreed(breed_name, breed_desc, breed_origin, breed_temp, breed_info);
};

function showDataBreed(name, desc, origin, temp, info) {
  document.getElementById('breed-name').textContent = name;
  document.getElementById('breed-description').textContent = desc;
  document.getElementById('breed-origin').textContent = origin;
  document.getElementById('breed-temperament').textContent = temp;
  document.getElementById('breed-info').href = info;
  document.getElementById('breed-info').textContent = 'Saber mas';
}

function showImgBreed(data) {
  const imgBreed = document.getElementById('img-breed');
  if (data.length > 0) {
      imgBreed.src = data[0].url;
  } else {
      imgBreed.src = '';
      imgBreed.alt = 'No image found';
  }
}

function showImgsBreeds(data) {
  const breedContainer = document.getElementById('breed-container');
  data.forEach(element => {
    const a = document.createElement('a');
    const img = document.createElement('img');
    a.href = element.url;
    a.setAttribute('data-fancybox', 'gallery-b');
    img.src = element.url;
    a.appendChild(img);
    breedContainer.appendChild(a);    
  });

}
