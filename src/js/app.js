//SLIDER
const container = document.querySelector(".container")
const puntos = document.querySelectorAll(".punto")
const flechaI = document.querySelector(".I")
const flechaD = document.querySelector(".D")

let puntoActivo = 0

//SLIDER - PUNTOS
puntos.forEach((cadaPunto, i) => {
    puntos[i].addEventListener("click", () => {
        let posicion = i
        let operacion = posicion * (100 / -puntos.length)

        container.style.transform = `translateX(${operacion}%)`

        puntos.forEach((cadaPunto, i) => {
            puntos[i].classList.remove("activo")
        })
        puntoActivo = i
        puntos[puntoActivo].classList.add("activo")
    })
})


//SLIDER - FLECHAS
function moverSliderIzquierda() {
    let posicion = puntoActivo

    if (posicion > 0) {
        let operacion = (posicion - 1) * (100 / -puntos.length)
        container.style.transform = `translateX(${operacion}%)`

        puntos.forEach((cadaPunto, i) => {
            puntos[i].classList.remove("activo")
        })
        puntoActivo = posicion - 1
    } else {
        let operacion = (puntos.length - 1) * (100 / -puntos.length)
        container.style.transform = `translateX(${operacion}%)`

        puntos.forEach((cadaPunto, i) => {
            puntos[i].classList.remove("activo")
        })
        puntoActivo = puntos.length - 1
    }

    puntos[puntoActivo].classList.add("activo")
}

function moverSliderDerecha() {
    let posicion = puntoActivo

    if (posicion < puntos.length - 1) {
        let operacion = (posicion + 1) * (100 / -puntos.length)
        container.style.transform = `translateX(${operacion}%)`

        puntos.forEach((cadaPunto, i) => {
            puntos[i].classList.remove("activo")
        })
        puntoActivo = posicion + 1
    } else {
        container.style.transform = `translateX(0%)`

        puntos.forEach((cadaPunto, i) => {
            puntos[i].classList.remove("activo")
        })
        puntoActivo = 0
    }

    puntos[puntoActivo].classList.add("activo")
}

flechaI.addEventListener("click", moverSliderIzquierda)

flechaD.addEventListener("click", moverSliderDerecha)


//SLIDER - MOVIMIENTO AUTOMÁTICO
setInterval(moverSliderDerecha, 5000);