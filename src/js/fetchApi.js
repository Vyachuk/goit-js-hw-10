const API_KEY = 'live_YMQCrobVV17ifzwuaHacSK8Qg3u0kkfNi0xRbo4vtL0c0E65H9BEFiEzcaYNQ5fg';

export const allCatsArray = fetch("https://api.thecatapi.com/v1/breeds")
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });

export const fetchCatByBreed = (breedId) => {
       return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
        .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
        });
}

    

    