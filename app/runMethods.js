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


// *-*-* COMMAND DISTRIBUTOR *-*-*
export async function weekDistributor(week, run) {
    const functionName = `w${week + 1}r${run + 1}`;
    console.log(functionName)
    await executeFunction(functionName);
}

async function executeFunction(functionName) {
    if (typeof this[functionName] === 'function') {
        await this[functionName]();
    } else {
        console.log(`Function ${functionName} not found.`);
    }
}



// *-*-* RUN METHODS *-*-*

// Week 1
async function w1r1()
{
console.log("week 1 - run 1");
}

async function w1r2()
{
console.log("week 1 - run 2");
}

async function w1r3()
{
console.log("week 1 - run 3");
}



// Week 2
function w2r1()
{
console.log("week 2 - run 1");
}

function w2r2()
{
console.log("week 2 - run 2");
}

function w2r3()
{
console.log("week 2 - run 3");
}



// Week 3
function w3r1()
{
console.log("week 3 - run 1");
}

function w3r2()
{
console.log("week 3 - run 2");
}

function w3r3()
{
console.log("week 3 - run 3");
}



// Week 4
function w4r1()
{
console.log("week 4 - run 1");
}

function w4r2()
{
console.log("week 4 - run 2");
}

function w4r3()
{
console.log("week 4 - run 3");
}



// Week 5
function w5r1()
{
console.log("week 5 - run 1");
}

function w5r2()
{
console.log("week 5 - run 2");
}

function w5r3()
{
console.log("week 5 - run 3");
}



// Week 6
function w6r1()
{
console.log("week 6 - run 1");
}

function w6r2()
{
console.log("week 6 - run 2");
}

function w6r3()
{
console.log("week 6 - run 3");
}



// Week 7
function w7r1()
{
console.log("week 7 - run 1");
}

function w7r2()
{
console.log("week 7 - run 2");
}

function w7r3()
{
console.log("week 7 - run 3");
}



// Week 8
function w8r1()
{
console.log("week 8 - run 1");
}

function w8r2()
{
console.log("week 8 - run 2");
}

function w8r3()
{
console.log("week 8 - run 3");
}



// Week 9
function w9r1()
{
console.log("week 9 - run 1");
}

function w9r2()
{
console.log("week 9 - run 2");
}

function w9r3()
{
console.log("week 9 - run 3");
}