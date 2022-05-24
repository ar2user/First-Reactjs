//Async = promesas
//Await =  recibe/envia - promesa en cadena

const getImage = async() => {

    //Cadena de promesas
    try {
        const apiKey = 'IWWZtNfTYHuKqTXMRmt3YbDYAf0sJuju';

        //Espera respuesta de fetch - 1er promesa
        const ans = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        
        //Recibe promesa - obj
    
        //Extracción de data y conversión a json - 2da promesa
        const { data } = await ans.json();
    
        //Recibe nuevo obj - promesa
    
        //Extracción de URL de data
        const { url } = data.images.original;
    
        //Crear imagen
        const img = document.createElement('img');
        img.src = url;
    
        document.body.append(img);
    
    } 
    
    //Si no se cumplen las promesas mostrar error
    catch (error) {
        console.error(error);
    }

}

getImage();