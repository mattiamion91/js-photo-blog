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

        //seleziono la card

        const cardElement = document.querySelectorAll(".card");

        //uso un ciclo foreach per poter avere un evento legato al click per ongi singola card

        cardElement.forEach(card => {

            //evento legato al click della card

            card.addEventListener('click', (e) => {

                //seleziono lelemento la cui classe deve sparirre

                const divOver = document.querySelector('.overlay')

                //uso la proprieta class list per rimuocvere la proprietá che mi nasconde l'overlay

                divOver.classList.remove("hidden")

                //console.log('hai cliccato');

            })

        })

        //seleziono il bottone

        const btnElement = document.querySelector(".close-btn")

        //console.log(btnElement);

        //evento legato al click del bottone

        btnElement.addEventListener("click", (e) => {

            //selezione lelemnto la cui lcasse deve riapparire

            const divOver = document.querySelector('.overlay')

            //uso la proprieta class list per rimuocvere la proprietá che mi nasconde l'overlay

            divOver.classList.add("hidden")

        })

    })

    .catch(error => {
        //codice da eseguire in caso di errore
        console.error(error.message);
    })

    .finally(() => {
        //codice da eseguire a prescindere dall'esito
        //esempio: si puo fermare un loader
        console.log('tutto ok, fine della chiamata');
    })