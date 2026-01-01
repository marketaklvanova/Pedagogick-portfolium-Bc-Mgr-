input.onButtonPressed(Button.A, function () {
    zpoždění = 100
})
input.onButtonPressed(Button.B, function () {
    zpoždění = 400
})
let zpoždění = 0
let x = 0
let y = 0
let směr = 0
let běží = 1
zpoždění = 200
basic.forever(function () {
    if (běží == 1) {
        led.plot(x, y)
        basic.pause(zpoždění)
        led.unplot(x, y)
        basic.pause(zpoždění)
        if (směr == 0) {
            if (x == 4) {
                směr = 1
            } else {
                x += 1
            }
        }
        if (směr == 1) {
            if (y == 4) {
                směr = 2
            } else {
                y += 1
            }
        }
        if (směr == 2) {
            if (x == 0) {
                směr = 3
            } else {
                x += -1
            }
        }
        if (směr == 3) {
            if (y == 0) {
                směr = 0
            } else {
                y += -1
            }
        }
    } else {
        basic.pause(100)
    }
})
