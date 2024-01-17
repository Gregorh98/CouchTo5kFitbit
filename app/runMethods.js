import { vibration } from "haptics";
import document from "document";
import { display } from "display";

const runInstructionText = document.getElementById("runInstructionText");
var vibrationType = "nudge-max"

const weeks = [
    [w1r1, w1r2, w1r3],
    [w2r1, w2r2, w2r3],
    [w3r1, w3r2, w3r3],
    [w4r1, w4r2, w4r3],
    [w5r1, w5r2, w5r3],
    [w6r1, w6r2, w6r3],
    [w7r1, w7r2, w7r3],
    [w8r1, w8r2, w8r3],
    [w9r1, w9r2, w9r3],
];


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function event(type, seconds)
{
    display.poke()
    vibration.start(vibrationType);
    runInstructionText.text = type;
    await sleep(seconds * 100);
}

export async function weekRunDistributor(week, run) {
    const weekIndex = week;
    const runIndex = run;

    if (weeks[weekIndex] && weeks[weekIndex][runIndex]) {
        await weeks[weekIndex][runIndex]();
    }
}

// *-*-* RUN METHODS *-*-*

// Week 1
export async function w1r1() {
    await event("Warm-Up Walk", 300)

    for (var i = 1; i <= 8; i++) {
        await event("Run " + i.toString(), 60)
        await event("Walk", 90)
    }

    await event("Run", 60)

    await event("Cool-Down Walk", 300)

    await event("Finished!", 0)
}

export async function w1r2() {
    await w1r1();
}

export async function w1r3() {
    await w1r1();
}

// Week 2
export async function w2r1() {
    await event("Warm-Up Walk", 300)

    for (var i = 1; i <= 5; i++) {
        await event("Run " + i.toString(), 90)
        await event("Walk", 120)
    }

    await event("Run", 90)

    await event("Cool-Down Walk", 300)

    await event("Finished!", 0)
}

export async function w2r2() {
    await w2r1()
}

export async function w2r3() {
    await w2r1()
}

// Week 3
export async function w3r1() {
    await event("Warm-Up Walk", 300)

    await event("Run", 90)
    await event("Walk", 90)
    await event("Run", 180)
    await event("Walk", 180)
    await event("Run", 90)
    await event("Walk", 90)
    await event("Run", 180)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w3r2() {
    await w3r1
}

export async function w3r3() {
    await w3r1
}

// Week 4
export async function w4r1() {
    await event("Warm-Up Walk", 300)

    await event("Run", 180)
    await event("Walk", 90)
    await event("Run", 300)
    await event("Walk", 150)
    await event("Run", 180)
    await event("Walk", 90)
    await event("Run", 300)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w4r2() {
    await w4r1()
}

export async function w4r3() {
    await w4r1()
}

// Week 5
export async function w5r1() {
    await event("Warm-Up Walk", 300)

    await event("Run", 300)
    await event("Walk", 180)
    await event("Run", 300)
    await event("Walk", 180)
    await event("Run", 300)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w5r2() {
    await event("Warm-Up Walk", 300)

    await event("Run", 480)
    await event("Walk", 300)
    await event("Run", 480)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w5r3() {
    await event("Warm-Up Walk", 300)

    await event("Run", 1200)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

// Week 6
export async function w6r1() {
    await event("Warm-Up Walk", 300)

    await event("Run", 300)
    await event("Walk", 180)
    await event("Run", 480)
    await event("Walk", 180)
    await event("Run", 300)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w6r2() {
    await event("Warm-Up Walk", 300)

    await event("Run", 600)
    await event("Walk", 180)
    await event("Run", 600)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w6r3() {
    await event("Warm-Up Walk", 300)

    await event("Run", 1500)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

// Week 7
export async function w7r1() {
    await w6r3()
}

export async function w7r2() {
    await w6r3()
}

export async function w7r3() {
    await w6r3()
}

// Week 8
export async function w8r1() {
    await event("Warm-Up Walk", 300)

    await event("Run", 1680)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w8r2() {
    await w8r1()
}

export async function w8r3() {
    await w8r1()
}

// Week 9
export async function w9r1() {
    await event("Warm-Up Walk", 300)

    await event("Run", 1800)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w9r2() {
    await w9r1();
}

export async function w9r3() {
    await w9r1();
}
