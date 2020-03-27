const vanGoghUrl = "https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Gogh"
const apiUrlGogh = "https://collectionapi.metmuseum.org/public/collection/v1/objects/"
let id = "436724"

// Get van Gogh artwork Ids - Total 207
fetch(`${vanGoghUrl}`)
  .then(response => response.json())
  .then(data => console.log(data))

// Select a random ID
// let getId = response.objectIDs[Math.floor(Math.random() * response.objectIDs.length)]
// console.log(getId);


// let showID = document.querySelector('.show-id');
// showID.innerHTML = `${getId}`
// Create a variable for the URL.



// Bring the random ID here - how? 
fetch(`${apiUrlGogh}${id}`)
  .then(response => response.json())
  .then(displayResults);


function displayResults(data) {
  console.log(data);
  let title = document.querySelector(".title");
  title.innerHTML = `${data.title} `;

  let department = document.querySelector('.department');
  department.innerHTML = `${data.department} `

  let objectEndDate = document.querySelector('.objectEndDate');
  objectEndDate.innerHTML = `${data.objectEndDate} `

  let primaryImage = document.querySelector(".photo");
  primaryImage.innerHTML = `<img src="${data.primaryImage}" class="img-fluid" > `;

  let artistDisplayName = document.querySelector('.artistDisplayName');
  artistDisplayName.innerHTML = `${data.artistDisplayName} `

  let artistDisplayBio = document.querySelector('.artistDisplayBio');
  artistDisplayBio.innerHTML = `${data.artistDisplayBio} `
}
