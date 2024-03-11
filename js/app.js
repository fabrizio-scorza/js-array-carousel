// Dichiarazione dell'array con le strighe dei percorsi delle immagini
const imgPathArray = ['./img/01.webp', './img/02.webp', './img/03.webp', './img/04.webp', './img/05.webp']; //array[string]

//dichiarazione delle variabili 
    // associazione dell'elemento items-container ad una variabile
    const itemsContainerElement = document.querySelector('.items-container'); //DOM element
    
   //associazione dell'elemento items-thumbnail ad una variabile
    const itemsThumbnailElement = document.querySelector('.items-thumbnail'); //DOM element
    
    // inizializzazione della variabile itemsHtml che andrà a contenere tutto il codsice html da inserire nel DOM
    let itemsHtml = ' '; //string

// ciclo for che scorre tutta la lunghezza dell'array che contiene i percorsi delle immagini per creare gli elementi nel dom
for (let i = 0; i< imgPathArray.length; i++){
   // assegnazione del percorso alla posizione i alla variabile imgPath
    const imgPath = imgPathArray[i]; //string

    // dichiarazione di una variabile contenente la classe
    let className ='item'; //string

    // controllo prima slide e assegnazione classe active
    if (i === 0){
        className += ' active';
    }

    //assegnazione del codice html da inserire nel DOM ad una variabile
    const itemHtml = `
        <div class="${className}">
            <img src="${imgPath}">
        </div>
    `;

    // incremento della stringa che contiene tutti gli items
    itemsHtml += itemHtml; //string

    }
// inserimento di tutti gli item creati all'interno del DOM
itemsContainerElement.innerHTML = itemsHtml;

//inserimento della lista foto all'interno dell'elemento thumbnails
itemsThumbnailElement.innerHTML = itemsHtml;


//dichiarazione di una variabile che recupera dal container tutti gli elementi di classe item
const itemsContainerList = itemsContainerElement.getElementsByClassName('item'); //html collection - array like

//dichiarazione di una variabile che recupera dalla thumbnail tutti gli elementi di classe item
const itemsThumbnailList = itemsThumbnailElement.getElementsByClassName('item'); //html collection - array like

//inizializzazione della variabile che scorre la html collection
let itemsIndex = 0; //number    

    // //dichiarazione della variabile che contiene il primo elemento dell'html collection container
    // const firstItemInContainer = itemsContainerList[itemsIndex]; //DOM element

    // //dichiarazione della variabile che contiene il primo elemento dell'html collection thumbnail
    // const firstItemInThumbnail = itemsThumbnailList[itemsIndex]; //DOM element

    // //aggiunta della classe che lo attiva come primo elemento sia in container che in thumbnail
    // firstItemInContainer.classList.add('active');
    // firstItemInThumbnail.classList.add('active'); 

    // inserito if all'interno del ciclo con controllo primo elemento che sostituisce questo blocco di codice

// cambio dell'immagine al click del pulsante next e prev
    //dichiarazione delle variabili next e prev contenenti i rispettivi elementi del DOM next
    const next = document.querySelector('.next'); //DOM element
    const prev = document.querySelector('.prev'); //DOM element

// controllo inizio o fine lista
    // inizializzazione della variabile ultimo elemento
    const lastItemIndex = itemsContainerList.length -1; //number
    //ascolto del click su next
    next.addEventListener('click', function(){
        //rimozione della classe attivo sull'elemento visualizzato
        itemsContainerList[itemsIndex].classList.remove('active');
        itemsThumbnailList[itemsIndex].classList.remove('active');

        //controllo della posizione dell'indice inferiore alla lunghezza della lista
        if (itemsIndex < lastItemIndex){
            //incremento dell'indice per selezionare l'elemento successivo
            itemsIndex++;

        } else {
            //se la lista è finita azzera l'indice
            itemsIndex = 0;
        }

        //aggiunta della classe attivo all'elemento successivo
        itemsContainerList[itemsIndex].classList.add('active');
        itemsThumbnailList[itemsIndex].classList.add('active');
    })

    //ascolto del click su prev
    prev.addEventListener('click', function(){
        //rimozione della classe attivo sull'elemento visualizzato
        itemsContainerList[itemsIndex].classList.remove('active');
        itemsThumbnailList[itemsIndex].classList.remove('active');

        //controllo della posizione dell'indice maggiore di zero uguale o negativo
        if (itemsIndex > 0){
            //decremento dell'indice per selezionare l'elemento successivo
            itemsIndex--;

        } else {
            itemsIndex = lastItemIndex;
        } 

        //aggiunta della classe attivo all'elemento successivo
        itemsContainerList[itemsIndex].classList.add('active');
        itemsThumbnailList[itemsIndex].classList.add('active');
    })
