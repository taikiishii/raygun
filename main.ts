makerbit.connectIrSenderLed(AnalogPin.P2)
pins.setPull(DigitalPin.P0, PinPullMode.PullDown)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        makerbit.sendIrDatagram("0x08F71EE1")
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        for (let Y = 0; Y <= 4; Y++) {
            for (let X = 0; X <= 4; X++) {
                led.unplot(X, 4 - Y)
            }
        }
        for (let Y = 0; Y <= 4; Y++) {
            for (let X = 0; X <= 4; X++) {
                led.plot(X, 4 - Y)
            }
            basic.pause(100)
        }
    }
})
