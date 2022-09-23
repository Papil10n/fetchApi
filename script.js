'use strict'

const div = document.querySelector(".all");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '270dbc620amshe513144d452c73bp16563fjsn54286ab9bb02',
		'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
	}
};

fetch('https://hotels4.p.rapidapi.com/locations/v2/search?query=Ukraine&locale=en_US&currency=USD', options)
	.then(response => response.json())
	.then(response => {
    console.log(response.suggestions[0].entities)
    let arrCity = response.suggestions[0].entities;
    for (let city of arrCity) {
      const newCity = document.createElement('div')
      newCity.innerHTML = `<p class="name">${city.caption}</p>
                           <p class="sub">Широта: ${city.latitude}</p>
                           <p class="sub">Долгота: ${city.longitude}</p>`
      div.append(newCity)
    }

  })
	.catch(err => console.error(err));


