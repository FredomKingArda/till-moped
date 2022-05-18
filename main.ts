bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Fullstop), function () {
    if (relay == 1) {
        relay = 0
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else {
        relay = 1
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.showLeds(`
            . # # # #
            . # . . .
            . # # # .
            . # . . .
            . # . . .
            `)
    }
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Comma), function () {
    serial.writeLine("Temperature:")
    serial.writeLine("" + (input.temperature()))
})
let relay = 0
pins.digitalWritePin(DigitalPin.P0, 0)
bluetooth.startAccelerometerService()
bluetooth.startMagnetometerService()
