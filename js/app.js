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
            img src="${imgPath}">
        </div>
    `;

    // incremento della stringa che contiene tutti gli items
    itemsHtml += itemHtml; //string

    }
// inserimento di tutti gli item creati all'interno del DOM
itemsContainerElement.innerHTML = itemsHtml;
