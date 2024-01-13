const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader')

let photosArray = [];

//Unsplash API
const count = 10;
const apiKey ='mEzwDoIk_oiqpyXv_IKkD3ap5gx007pJteC2Dw5IbPg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


//Create Elements for Links and Photos, Add to DOM
function displayPhotos(){
    //Run function for each object in photosArray
    photosArray.forEach((photo)=>{
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target','_blank');
        //Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src',photo.urls.regular);
        img.setAttribute('alt',photo.alt_description)
        img.setAttribute('title',photo.alt_description)
        //Put <img> inside <a>,then put both inside image container
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}


// Get photos from Unsplash API

async function getPhotos(){
    try{
        const data = await fetch(apiUrl);
        photosArray = await data.json();
        displayPhotos();
    }catch(error){

    }
}

//On Load
getPhotos();