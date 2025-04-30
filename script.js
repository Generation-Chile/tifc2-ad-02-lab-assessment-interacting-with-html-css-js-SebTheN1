const parrafo =document.getElementById('red')

console.log(parrafo)

parrafo.textContent = '"GoodBye"'

const precaucion = document.getElementById('encabezado_4')

console.log(precaucion)

precaucion.style.color='orange'

const titulo = document.querySelector('h4')

titulo.style.color = 'blue'

titulo.addEventListener("click", () => {
    titulo.style.color = "brown";
});


