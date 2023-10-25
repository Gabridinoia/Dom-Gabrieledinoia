let paragrafi = document.querySelector(".paragrafi");
let nascondi = document.querySelector("#display");
let cambiocolore = document.querySelector("#change");
let grassetto = document.querySelector("#Grassetto");



nascondi.addEventListener('click',()=> {

    paragrafi.forEach(( paragrafo) => paragrafo.classList.toggle("display"))

});

cambiocolore.addEventListener("click", ()=> {
    
    let red= Math.floor(Math.random() * (255 - 0 + 1) + 0);
    
    let blue= Math.floor(Math.random() * (255 - 0 + 1) + 0);
    
    let green= Math.floor(Math.random() * (255 - 0 + 1) + 0);
    
    let cambio= `rgb(${red}, ${green}, ${blue})`;

    paragrafi.style.color= cambio;
});


grassetto.addEventListener('click', ()=> {
    paragrafi.forEach(( paragrafo) => paragrafo.classList.toggle("spessore"))
});

let prodotti = [ 
    { image : "https://picsum.photos/300", titolo : "PRODOTTO 1", descrizione: "DESCRIZIONE PRODOTTO 1" },
    { image : "https://picsum.photos/302", titolo : "PRODOTTO 2", descrizione: "DESCRIZIONE PRODOTTO 2" },
    { image : "https://picsum.photos/303", titolo : "PRODOTTO 3", descrizione: "DESCRIZIONE PRODOTTO 3" },
    { image : "https://picsum.photos/304", titolo : "PRODOTTO 4", descrizione: "DESCRIZIONE PRODOTTO 4" },
    { image : "https://picsum.photos/305", titolo : "PRODOTTO 5", descrizione: "DESCRIZIONE PRODOTTO 5" },
    { image : "https://picsum.photos/306", titolo : "PRODOTTO 6", descrizione: "DESCRIZIONE PRODOTTO 6" }
]





let wrapper = document.querySelector(".wrapper");
let createP = document.querySelector("#createP");



createP.addEventListener("click", () => {
    prodotti.forEach( (prodotto) => {
        let div = document.createElement("div");
        div.classList.add("col-12", "col-md-4", "pt-5" );
        div.innerHTML = `
        <div class="card " style="width: 18rem;">
        <img src="${prodotto.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${prodotto.titolo}</h5>
          <p class="card-text"> ${prodotto.descrizione}</p>
        </div>
      </div>
        `
        wrapper.appendChild(div);
    })

})