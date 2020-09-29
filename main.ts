basic.forever(function () {
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(index)
        basic.pause(200)
    }
    for (let index = 0; index <= 9; index++) {
        basic.showNumber(9 - index)
        basic.pause(200)
    }
})
