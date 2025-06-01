async function fetchAnime() {
    const animeName = document.getElementById("inputElement").value;
    const baseURL = "https://api.jikan.moe/v4";
    try {
        const response = await fetch(`${baseURL}/anime?q=${animeName}&limit=10`);
        const fetchedData = await response.json();
        //console.log(typeof fetchedData);  object
        console.log(fetchedData);
        const cardsWrapper = document.querySelector(".cards-wrapper");
        if (animeName !== "") {
            while (cardsWrapper.firstChild) {
                cardsWrapper.removeChild(cardsWrapper.firstChild);
            }
        }
        fetchedData.data.forEach(element => {

            const {
                episodes,
                images: {
                    jpg: {
                        image_url,
                        large_image_url,
                        small_image_url
                    }
                },
                synopsis,
                title
            } = element;

            const container = document.createElement("div");
            container.className = "container";
            
            // Create elements with their properties in a single operation
            container.innerHTML = `
                <img src="${image_url}">
                <div class="animeInfo">
                    <h3>${title}</h3>
                </div>
            `;
            
            cardsWrapper.appendChild(container);
        });

    } catch (error) {

        console.error('an error occured: ', error);

    }
}



async function fetchData() {
    const container = document.getElementById("container");
    const baseURL = "https://api.jikan.moe/v4/anime";
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        console.log(data);
        data.data.forEach(element => {

            const {
                episodes,
                images: {
                    jpg: {
                        image_url,
                        large_image_url,
                        small_image_url
                    }
                },
                synopsis,
                title
            } = element;

            const container = document.createElement("div");
            container.className = "container";
            
            container.innerHTML = `
                <img src="${image_url}">
                <div class="animeInfo">
                    <h3>${title}</h3>
                </div>
            `;
            
            document.querySelector(".cards-wrapper").appendChild(container);
        });
    } catch (error) {
        console.error(error);

    }
}

fetchData();
addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        fetchAnime();
    }
});