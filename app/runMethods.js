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

function event(type)
{
    display.poke()
    vibration.start(vibrationType);
    runInstructionText.text = type;
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
    console.log("week 1 - run 1");
    event("Warm-Up Walk")
    await sleep(300000);

    for (var i = 1; i <= 8; i++) {
        event("Run " + i.toString())
        await sleep(60000);

        event("Walk")
        await sleep(90000);
    }
    event("Run " + i.toString())
    await sleep(60000);

    event("Cool-Down Walk")
    await sleep(300000);

    event("Finished!")
}

export async function w1r2() {
    console.log("week 1 - run 2");
}

export async function w1r3() {
    console.log("week 1 - run 3");
}

// Week 2
export async function w2r1() {
    console.log("week 2 - run 1");
}

export async function w2r2() {
    console.log("week 2 - run 2");
}

export async function w2r3() {
    console.log("week 2 - run 3");
}

// Week 3
export async function w3r1() {
    console.log("week 3 - run 1");
}

export async function w3r2() {
    console.log("week 3 - run 2");
}

export async function w3r3() {
    console.log("week 3 - run 3");
}

// Week 4
export async function w4r1() {
    console.log("week 4 - run 1");
}

export async function w4r2() {
    console.log("week 4 - run 2");
}

export async function w4r3() {
    console.log("week 4 - run 3");
}

// Week 5
export async function w5r1() {
    console.log("week 5 - run 1");
}

export async function w5r2() {
    console.log("week 5 - run 2");
}

export async function w5r3() {
    console.log("week 5 - run 3");
}

// Week 6
export async function w6r1() {
    console.log("week 6 - run 1");
}

export async function w6r2() {
    console.log("week 6 - run 2");
}

export async function w6r3() {
    console.log("week 6 - run 3");
}

// Week 7
export async function w7r1() {
    console.log("week 7 - run 1");
}

export async function w7r2() {
    console.log("week 7 - run 2");
}

export async function w7r3() {
    console.log("week 7 - run 3");
}

// Week 8
export async function w8r1() {
    console.log("week 8 - run 1");
}

export async function w8r2() {
    console.log("week 8 - run 2");
}

export async function w8r3() {
    console.log("week 8 - run 3");
}

// Week 9
export async function w9r1() {
    console.log("week 9 - run 1");
}

export async function w9r2() {
    console.log("week 9 - run 2");
}

export async function w9r3() {
    console.log("week 9 - run 3");
}
