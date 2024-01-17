import { me as appbit } from "appbit";
import {weekRunDistributor} from './runMethods.js';
import { display } from "display";

appbit.appTimeoutEnabled = false;

import document from "document";
const homeScreen = document.getElementById("homeScreen");
const runScreen  = document.getElementById("runScreen");

// Home screen elements
const tehs = document.getElementById("clickableForeground"); // TEHS - Touch-event handler screen (blame Fitbit for their lack of a good swipe API)

const myLabel = document.getElementById("myLabel");

const run1Button = document.getElementById("run1Button");
const run2Button = document.getElementById("run2Button");
const run3Button = document.getElementById("run3Button");

var touchstartX = 0
var touchendX = 0
var screenIndex = 0

var currentWeekIndex = 0;
var weeks = [
{"name":"Week 1"},
{"name":"Week 2"},
{"name":"Week 3"},
{"name":"Week 4"},
{"name":"Week 5"},
{"name":"Week 6"},
{"name":"Week 7"},
{"name":"Week 8"},
{"name":"Week 9"}
]

myLabel.text = weeks[currentWeekIndex]["name"]

function showHomeScreen() {
    screenIndex = 0;
    homeScreen.style.display = "inline";
    runScreen.style.display = "none";
}

function showRunScreen() {
    screenIndex = 1;
    homeScreen.style.display = "none";
    runScreen.style.display = "inline";
}

function isWithinBounds(coords, bounds) {
  return (
    coords.x >= bounds[0] &&
    coords.x <= bounds[2] &&
    coords.y >= bounds[1] &&
    coords.y <= bounds[3]
  );
}

function checkElementClicked(e)
{
    var clickableElements = [run1Button, run2Button, run3Button]
    for (var i=0; i<clickableElements.length; i++)
    {
        var testableElement = clickableElements[i]
        var boundingBox = testableElement.getBBox();
        var boundingCoords = [boundingBox.x, boundingBox.y, boundingBox.x+boundingBox.width, boundingBox.y+boundingBox.height]

        const providedCoords = { x: e.screenX, y: e.screenY };

        if (isWithinBounds(providedCoords, boundingCoords)) {
          return testableElement
        }
    }
}

function handleTouch(e) {
    touchendX = e.screenX
    if ((touchendX - touchstartX) < -10)
    {
        if (screenIndex == 0)
        {
            if ((currentWeekIndex + 1) < weeks.length)
            {
                currentWeekIndex += 1;
            }
            myLabel.text = weeks[currentWeekIndex]["name"]
        }
    }
    else if ((touchendX - touchstartX) > 10)
    {
        if (screenIndex == 0)
        {
            if ((currentWeekIndex - 1) >= 0)
            {
                currentWeekIndex -= 1;
            }
            myLabel.text = weeks[currentWeekIndex]["name"]
        }
    }
    else
    {
        if (screenIndex == 0)
        {
            switch (checkElementClicked(e))
            {
            case run1Button:
                showRunScreen()
                weekRunDistributor(currentWeekIndex, 0)
                break;
            case run2Button:
                showRunScreen()
                weekRunDistributor(currentWeekIndex, 1)
                break;
            case run3Button:
                showRunScreen()
                weekRunDistributor(currentWeekIndex, 2)
                break;
            }
        }
    }
}


tehs.addEventListener('mousedown', e => {
    touchstartX = e.screenX
})

tehs.addEventListener('mouseup', e => {
    handleTouch(e)
})


document.onkeypress = function(evt) {
  if (evt.key === "back") {
      if (screenIndex != 0)
      {
        showHomeScreen();
        evt.preventDefault();
      }
  }
}

showHomeScreen()