import { me as appbit } from "appbit";
import { weekDistributor } from './runMethods.js'
import { display } from "display";

appbit.appTimeoutEnabled = false;
//week_1();

import document from "document";
const tehs = document.getElementById("clickableForeground"); // TEHS - Touch-event handler screen (blame FitBit)
const myLabel = document.getElementById("myLabel");

const run1Button = document.getElementById("run1Button");
const run2Button = document.getElementById("run2Button");
const run3Button = document.getElementById("run3Button");


var touchstartX = 0
var touchendX = 0

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

function checkDirection(e) {
    touchendX = e.screenX
  if ((touchendX - touchstartX) < -10)
  {
    if ((currentWeekIndex + 1) < weeks.length)
    {
        currentWeekIndex += 1;
    }
    myLabel.text = weeks[currentWeekIndex]["name"]
  }
  else if ((touchendX - touchstartX) > 10)
  {
    if ((currentWeekIndex - 1) >= 0)
    {
        currentWeekIndex -= 1;
    }
    myLabel.text = weeks[currentWeekIndex]["name"]
  }
  else
  {
      switch (checkElementClicked(e))
    {
        case run1Button:
            weekDistributor(currentWeekIndex, 0)
            break;
        case run2Button:
            weekDistributor(currentWeekIndex, 1)
            break;
        case run3Button:
            weekDistributor(currentWeekIndex, 2)
            break;
    }
  }
}

function handleClick(e)
{
    console.log("clicked!")
    console.log(e.screenX, e.screenY)
}

tehs.addEventListener('mousedown', e => {
    touchstartX = e.screenX
})

tehs.addEventListener('mouseup', e => {
    checkDirection(e)
})