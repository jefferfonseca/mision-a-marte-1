input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.East)
    Coordenada_X += 1
    basic.showNumber(Coordenada_X)
    basic.pause(2000)
})
input.onGesture(Gesture.Shake, function () {
    Nuevo_plan_vuelo()
})
input.onButtonPressed(Button.AB, function () {
    Cambiar_coordenadas()
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.South)
    Coordenada_Y += 1
    basic.showNumber(Coordenada_Y)
    basic.pause(2000)
})
function Nuevo_plan_vuelo () {
    Cambiar_coordenadas()
    basic.clearScreen()
}
function Validar_coordenadas () {
    if (Coordenada_X <= 4 && Coordenada_Y <= 4) {
        Coordenadas = game.createSprite(Coordenada_X, Coordenada_Y)
        return true
    } else {
        return false
    }
}
function Cambiar_coordenadas () {
    Coordenada_X = 0
    Coordenada_Y = 0
    Vuelos = 0
    led.plot(Coordenada_X, Coordenada_Y)
}
let Vuelos = 0
let Coordenadas: game.LedSprite = null
let Coordenada_Y = 0
let Coordenada_X = 0
Nuevo_plan_vuelo()
basic.forever(function () {
    if (!(Validar_coordenadas())) {
        basic.showIcon(IconNames.No)
    }
})
