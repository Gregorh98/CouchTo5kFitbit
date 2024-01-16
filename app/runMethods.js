import { vibration } from "haptics";
import document from "document";
import { display } from "display";

const myLabel = document.getElementById("myLabel");
var vibrationType = "nudge-max"

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function event(type)
{
    display.poke()
    vibration.start(vibrationType);
    myLabel.text = type;
}

export async function week_1() {
    await sleep(1000);
    event("Warm-Up Walk")

    for (var i = 1; i <= 8; i++) {
        await sleep(2000);
        event("Run " + i.toString())

        await sleep(2000);
        event("Walk")
    }

    await sleep(2000);
    event("Cool-Down Walk")

    await sleep(2000);
    event("Finished!")
}
