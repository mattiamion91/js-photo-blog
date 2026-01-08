console.log("tutto ok");

//seleziono il contenitore di output

const outputCont = document.getElementById("container")
console.log(outputCont);

//riferimento ad endpoint

const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

//creo la chiamata ajax all'endpoint

axios.get(endpoint)
.then(response => {
    //recupero array di oggetti dall'api
    const cards = response.data;
    console.log(cards);

    //cariabile di accumulo stringa output
    let cardsOut = ""

    //ciclo array recuperato da api e estrarre informazioni
    cards.forEach(card => {

        //destrutturo
        const {date, title, url} = card
        console.log("il titolo é:", title, "la data é:", date, "l'url é: ");
        
        
    });


}

)