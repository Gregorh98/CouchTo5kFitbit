import { vibration } from "haptics";
import document from "document";
import { display } from "display";

const runInstructionText = document.getElementById("runInstructionText");
var vibrationType = "nudge-max"

const weeks = [
    [w1r1, w1r1, w1r1],
    [w2r1, w2r1, w2r1],
    [w3r1, w3r1, w3r1],
    [w4r1, w4r1, w4r1],
    [w5r1, w5r2, w5r3],
    [w6r1, w6r2, w6r3],
    [w6r3, w6r3, w6r3],
    [w8r1, w8r1, w8r1],
    [w9r1, w9r1, w9r1],
];


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function event(type, seconds)
{
    display.poke()
    vibration.start(vibrationType);
    runInstructionText.text = type;
    await sleep(seconds * 1000);
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
        await event("Run " + i.toString() + "/8", 60)
        await event("Walk", 90)
    }

    await event("Run 8/8", 60)

    await event("Cool-Down Walk", 300)

    await event("Finished!", 0)
}

// Week 2
export async function w2r1() {
    await event("Warm-Up Walk", 300)

    for (var i = 1; i <= 5; i++) {
        await event("Run " + i.toString() + "/6", 90)
        await event("Walk", 120)
    }

    await event("Run 6/6", 90)

    await event("Cool-Down Walk", 300)

    await event("Finished!", 0)
}

// Week 3
export async function w3r1() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/4", 90)
    await event("Walk", 90)
    await event("Run 2/4", 180)
    await event("Walk", 180)
    await event("Run 3/4", 90)
    await event("Walk", 90)
    await event("Run 4/4", 180)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}


// Week 4
export async function w4r1() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/4", 180)
    await event("Walk", 90)
    await event("Run 2/4", 300)
    await event("Walk", 150)
    await event("Run 3/4", 180)
    await event("Walk", 90)
    await event("Run 4/4", 300)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

// Week 5
export async function w5r1() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/3", 300)
    await event("Walk", 180)
    await event("Run 2/3", 300)
    await event("Walk", 180)
    await event("Run 3/3", 300)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w5r2() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/2", 480)
    await event("Walk", 300)
    await event("Run 2/2", 480)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w5r3() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/1", 1200)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

// Week 6
export async function w6r1() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/3", 300)
    await event("Walk", 180)
    await event("Run 2/3", 480)
    await event("Walk", 180)
    await event("Run 3/3", 300)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w6r2() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/2", 600)
    await event("Walk", 180)
    await event("Run 2/2", 600)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

export async function w6r3() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/1", 1500)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}

// Week 8
export async function w8r1() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/1", 1680)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}


// Week 9
export async function w9r1() {
    await event("Warm-Up Walk", 300)

    await event("Run 1/1", 1800)

    await event("Cool-Down Walk", 300)
    await event("Finished!", 0)
}