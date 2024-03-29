//SLIDER
const container = document.querySelector(".container")
const puntos = document.querySelectorAll(".punto")
const flechaI = document.querySelector(".I")
const flechaD = document.querySelector(".D")

let puntoActivo = 0
let movimientoAutomatico

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
        limpiarYActivarMovimientoAutomatico()
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
    limpiarYActivarMovimientoAutomatico()
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
    limpiarYActivarMovimientoAutomatico()
}

flechaI.addEventListener("click", moverSliderIzquierda)
flechaD.addEventListener("click", moverSliderDerecha)


//SLIDER - MOVIMIENTO AUTOMÁTICO
function limpiarYActivarMovimientoAutomatico() {
    clearInterval(movimientoAutomatico)
    movimientoAutomatico = setInterval(moverSliderDerecha, 10000);
}

limpiarYActivarMovimientoAutomatico()


//BOARDS - FIX
const boards = document.querySelectorAll(".board")
const covers = document.querySelectorAll(".cover")

if (window.screen.width > 800) {
    boards.forEach((cadaBoard, i) => {
        boards[i].addEventListener("mouseover", () => {
            if (boards[i].classList.contains("right")) {
                covers[i].style.left = "100%"
            } else {
                covers[i].style.left = "-100%"
            }
        })

        boards[i].addEventListener("mouseout", () => {
            covers[i].style.left = "0"
        })
    })
} else {
    boards.forEach((cadaBoard, i) => {
        covers[i].style.left = "0"
        covers[i].style.top = "0"

        boards[i].addEventListener("click", () => {
            covers.forEach((cadaCover, j) => {
                if (j != i) {
                    covers[j].style.left = "0"
                    covers[j].style.top = "0"
                }
            })

            if (boards[i].classList.contains("right")) {
                if (covers[i].style.top == "0px") {
                    covers[i].style.top = "100%"
                } else {
                    covers[i].style.top = "0"
                }
            } else {
                if (covers[i].style.top == "0px") {
                    covers[i].style.top = "-100%"
                } else {
                    covers[i].style.top = "0"
                }
            }
        })
    })
}


//MENÚ HAMBURGUESA
const menuH = document.querySelector(".menuH")
const menu = document.querySelector("nav ul")

let on = false
menuH.addEventListener("click", () => {
    if (on) {
        menu.style.left = "-100%"
        menuH.style.opacity = "0.5"
        on = false
    } else {
        menu.style.left = "0"
        menuH.style.opacity = "1"
        on = true
    }
})