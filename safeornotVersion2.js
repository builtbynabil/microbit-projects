let randomNumber = 0
let dares: string[] = []
let daresIndex = 0
let score = 0
let counter = 0;

// All the dares
dares = [
    "Baby Shark Dance",
    "Moon Walk",
    "Sing Johnny Rhyme",
    "Recite the pledge",
    "Complete a tounge twister",
    "Sing the anthem",
    "High-Five 10 Strangers",
    "Sing a song chose by us"

]

basic.forever(() => {
    daresIndex = Math.random(dares.length + 1)
    randomNumber = Math.random(2)

    // If the micro:bit is shaked, it will randomly choose if its safe or not.
    input.onGesture(Gesture.Shake, () => {
        switch (randomNumber) {

            // if the random Number is 0, it means that the player is safe.
            case 0:
                pins.digitalWritePin(DigitalPin.P1, 1)
                basic.showString("SAFE");
                pins.digitalWritePin(DigitalPin.P1, 0)

                counter += 1;

                break;

            // if the random Number is 1, it means that the player needs to complete a dare.
            case 1:
                pins.digitalWritePin(DigitalPin.P0, 1)
                basic.showString(dares[daresIndex]);
                pins.digitalWritePin(DigitalPin.P0, 0)
                counter += 1;
                break;

        }
    })

    // Press button a if the task is not completed
    input.onButtonPressed(Button.A, () => {
        score -= 1;
        basic.showString("Not Done");
    })
    // Press button b if the task is completed
    input.onButtonPressed(Button.B, () => {
        score += 1;
        basic.showString("Done");
    })

})

// Hold GND + Pin 2 to check the score
input.onPinPressed(TouchPin.P2, () => {
    basic.showString("Score: " + score);
})
