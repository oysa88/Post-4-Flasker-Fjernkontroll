input.onButtonPressed(Button.A, function () {
    radio.sendValue("spill", 3)
    radio.sendValue("spill", 1)
    radio.sendValue("spill", 4)
    radio.sendValue("spill", 2)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(4)
