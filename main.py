makerbit.connect_ir_sender_led(AnalogPin.P2)
pins.set_pull(DigitalPin.P0, PinPullMode.PULL_DOWN)
basic.show_icon(IconNames.HEART)

def on_forever():
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        pins.digital_write_pin(DigitalPin.P1, 1)
        makerbit.send_ir_datagram("0x08F71FE0")
        basic.pause(100)
        pins.digital_write_pin(DigitalPin.P1, 0)
        for Y in range(5):
            for X in range(5):
                led.unplot(X, 4 - Y)
        for Y2 in range(5):
            for X2 in range(5):
                led.plot(X2, 4 - Y2)
            basic.pause(100)
basic.forever(on_forever)
