const myList = document.querySelector("ul");

axios.get("https://rickandmortyapi.com/api/character").then((response) => {
  console.log("response:", response.data.results[0]);

  const eachCard = response.data.results.map((character) => {
    return `<li>
     <img src="${character.image}">
     </li>`;
  });

  const allLis = eachCard.join("");
  //   console.log("eachCard:", eachCard);
  //   console.log("allLis:", allLis);

  myList.innerHTML = allLis;
});

axios.get("https://rickandmortyapi.com/api/location/1").then((response) => {
  //   console.log("response:", response);
});


const spotifyWrapper = {
  searchArtist(artist) {
    return axios.get(`www.$arist`);
  },
  searchAlbums(id) {
    return axios.get();
  },
};
