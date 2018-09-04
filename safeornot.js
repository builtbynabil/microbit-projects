let dares = [
    "Baby Shark Dance",
    "Moon Walk",
    "Sing Johnny Rhyme"
]



basic.forever(function () {

    let daresIndex = Math.random(dares.length)
    let randomNumber = Math.random(2)


    input.onGesture(Gesture.Shake, () => {
        switch (randomNumber) {
            case 0:
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.showString("SAFE");
                pins.digitalWritePin(DigitalPin.P1, 0)

                break;
            case 1:
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.showString(dares[daresIndex]);
                pins.digitalWritePin(DigitalPin.P0, 0)
                break;

        }
    })
})
