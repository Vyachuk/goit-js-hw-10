import { allCatsArray, fetchCatByBreed, fetchCatImage } from './fetchApi';

const ref = {
    catsList: document.querySelector('.breed-select'),
    loader: document.querySelector('.loader'),
    error: document.querySelector('.error'),
    box: document.querySelector('.cat-info'),
}

allCatsArray.then(data => {
    const catListName = data.map(cat => {
        return `<option value="${cat.id}">${cat.name}</option>`
    }).join('');
    ref.catsList.innerHTML = catListName;
    setTimeout(() => {
        ref.loader.classList.toggle('is-hidden');
        ref.catsList.classList.toggle('is-hidden');
    }, 500);
}).catch(() => {
    ref.loader.classList.toggle('is-hidden');
    ref.catsList.classList.toggle('is-hidden');
    ref.error.classList.toggle('is-hidden');
})

ref.catsList.addEventListener('change', e => {
    fetchCatByBreed(ref.catsList.value).then(data => {
        console.log(data[0]);
        const cat = data[0].breeds[0];
        ref.box.innerHTML = `
            <div class='wrapper'>
                <img width=500 src="${data[0].url}" alt="${cat.name}">
                <h2>${cat.name}</h2>
                <p class="cat-description">${cat.description}</p>
                <p class="cat-description">Temperament: ${cat.temperament}</p>
            </div>
        `  
    })
})
