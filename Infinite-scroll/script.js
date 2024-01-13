
//Unsplash API
const count = 10;
const apiKey ='mEzwDoIk_oiqpyXv_IKkD3ap5gx007pJteC2Dw5IbPg';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API

async function getPhotos(){
    try{
        const data = await fetch(apiUrl);
        const json = await data.json();
        console.log(json);
    }catch(error){

    }
}

//On Load
getPhotos();