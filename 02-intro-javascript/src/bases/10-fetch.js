

//Constante para KEY
const apiKey = 'IWWZtNfTYHuKqTXMRmt3YbDYAf0sJuju';

//Constante para realizar petición de un endpoint - retorna una promesa
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

//Se recibe la respuesta de fetch

//Se convierte la respuesta en un JSON
peticion.then( ans => ans.json())

/*Se extrae el atributo data del json*/
.then( ({ data }) => {

//Se extrae el atributo url de data
const { url } = data.images.original;

//Se crea un elemento tipo imagen
const img = document.createElement('img');
img.src = url;

document.body.append(img);

})
.catch(console.error);