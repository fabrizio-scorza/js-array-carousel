// Dichiarazione dell'array con le strighe dei percorsi delle immagini
const imgPathArray = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']; //array[string]

//dichiarazione delle variabili 
    // associazione dell'elemento item-container ad una variabile
    const itemsContainerElement = document.querySelector('.items-container'); //DOM element
    
    // inizializzazione della variabile itemsHtml che andrà a contenere tutto il codsice html da inserire nel DOM
    let itemsHtml = ' '; //string

// ciclo for che scorre tutta la lunghezza dell'array che contiene i percorsi delle immagini per creare gli elementi nel dom
for (let i = 0; i< imgPathArray.length; i++){
   // assegnazione del percorso alla posizione i alla variabile imgPath
    const imgPath = imgPathArray[i]; //string

    //assegnazione del codice html da inserire nel DOM ad una variabile
    const itemHtml = `
        <div class="item">
            <img src="${imgPath}">
        </div>
    `;

    // incremento della stringa che contiene tutti gli items
    itemsHtml += itemHtml; //string

    }
// inserimento di tutti gli item creati all'interno del DOM
itemsContainerElement.innerHTML = itemsHtml;

//aggiunta della classe active al primo elemento dell'array
    //dichiarazione di una variabile che recupera dal dom tutti gli elementi di classe item
    const itemsList = document.getElementsByClassName('item'); //html collection - array like

    //inizializzazione della variabile che scorre la html collection
    let itemsIndex = 0; //number

    //dichiarazione della variabile che contiene il primo elemento dell'html collection
    const firstItem = itemsList[itemsIndex]; //DOM element

    //aggiunta della classe che lo attiva come primo elemento
    firstItem.classList.add('active');

// cambio dell'immagine al click del pulsante next e prev
    //dichiarazione delle variabili next e prev contenenti i rispettivi elementi del DOM next
    const next = document.querySelector('.next'); //DOM element
    const prev = document.querySelector('.prev'); //DOM element

// controllo inizio o fine lista
    // inizializzazione della variabile ultimo elemento
    const lastItemIndex = itemsList.length -1; //number
    //ascolto del click su next
    next.addEventListener('click', function(){
        //rimozione della classe attivo sull'elemento visualizzato
        itemsList[itemsIndex].classList.remove('active');

        //controllo della posizione dell'indice inferiore alla lunghezza della lista
        if (itemsIndex < lastItemIndex){
            //incremento dell'indice per selezionare l'elemento successivo
            itemsIndex++;

        } else {
            //se la lista è finita azzera l'indice
            itemsIndex = 0;
        }
        //aggiunta della classe attivo all'elemento successivo
        itemsList[itemsIndex].classList.add('active');
    })

    //ascolto del click su prev
    prev.addEventListener('click', function(){
        //rimozione della classe attivo sull'elemento visualizzato
        itemsList[itemsIndex].classList.remove('active');
        
        //controllo della posizione dell'indice maggiore di zero uguale o negativo
        if (itemsIndex > 0){
            //decremento dell'indice per selezionare l'elemento successivo
            itemsIndex--;

        } else {
            itemsIndex = lastItemIndex;
        } 
        //aggiunta della classe attivo all'elemento successivo
        itemsList[itemsIndex].classList.add('active');
    })