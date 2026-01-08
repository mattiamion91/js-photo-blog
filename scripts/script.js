//console.log("tutto ok");

//seleziono il contenitore di output

const outputCont = document.getElementById("container")
//console.log(outputCont);

//riferimento ad endpoint

const endpoint = "https://lanciweb.github.io/demo/api/pictures/"

//creo la chiamata ajax all'endpoint

axios.get(endpoint)
    .then(response => {
        //recupero array di oggetti dall'api
        const cards = response.data;
        //console.log(cards);

        //cariabile di accumulo stringa output
        let cardsOut = ""

        //ciclo array recuperato da api e estrarre informazioni
        cards.forEach(card => {

            //destrutturo
            const { date, title, url } = card
            //console.log("il titolo é:", title, "la data é:", date, "l'url é:", url);

            //valorizzio la variabile di accumulo di output (ad ogni giro del ciclo aggiungo una card fino a raggiungere 6)

            cardsOut += `
        <figure class="card">
            <img src="${url}" alt="${title}" class="main-img">
            <img src="./imgs/pin.svg" alt="pin-absolute" class="pin-img">
            <figcaption>${title}<div>${date}</div></figcaption>
        </figure>
        `
            //console.log(cardsOut);

        });


        //inserisco in pagina le card accumulate

        outputCont.innerHTML = cardsOut;

    }

    )
    .catch(error => {
        //codice da eseguire in caso di errore
        console.error(error.message);
    })

    .finally(() => {
        //codice da eseguire a prescindere dall'esito
        //esempio: si puo fermare un loader
        console.log('tutto ok, fine della chiamata');
    })