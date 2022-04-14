radio.onReceivedValue(function (name, value) {
    led.toggle(0, 0)
    serial.writeValue(name, value)
})
radio.setGroup(3)
basic.showIcon(IconNames.Yes)
