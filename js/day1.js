var data = "R3, L5, R2, L2, R1, L3, R1, R3, L4, R3, L1, L1, R1, L3, R2, L3, L2, R1, R1, L1, R4, L1, L4, R3, L2, L2, R1, L1, R5, R4, R2, L5, L2, R5, R5, L2, R3, R1, R1, L3, R1, L4, L4, L190, L5, L2, R4, L5, R4, R5, L4, R1, R2, L5, R50, L2, R1, R73, R1, L2, R191, R2, L4, R1, L5, L5, R5, L3, L5, L4, R4, R5, L4, R4, R4, R5, L2, L5, R3, L4, L4, L5, R2, R2, R2, R4, L3, R4, R5, L3, R5, L2, R3, L1, R2, R2, L3, L1, R5, L3, L5, R2, R4, R1, L1, L5, R3, R2, L3, L4, L5, L1, R3, L5, L2, R2, L3, L4, L1, R1, R4, R2, R2, R4, R2, R2, L3, L3, L4, R4, L4, L4, R1, L4, L4, R1, L2, R5, R2, R3, R3, L2, L5, R3, L3, R5, L2, R3, R2, L4, L3, L1, R2, L2, L3, L5, R3, L1, L3, L4, L3"
// data = "R2, L3";
// data = "R2, R2, R2";
// data = "R5, L5, R5, R3";

//data = "R8, R4, R4, R8";
//data = "R1, L1, R1, R1, R1";

var dataArray = data.split(", ");

var xLed = 0;
var yLed = 0;

var direction = 0;
var previousLocations = ['0,0'];

for (var i = 0; i < dataArray.length; i++) {
  caclulateSteps(dataArray[i][0], dataArray[i].substring(1));
}

function caclulateSteps(stepDirection, numberOfSteps) {

    direction = (direction + (stepDirection === 'L' ? -1 : 1) + 4) % 4;

    var numberOfSteps = parseInt(numberOfSteps);

    /*  switch (direction) {
      case 0: //north
        yLed += numberOfSteps;
        break;
      case 1: //east
        xLed += numberOfSteps;
        break;
      case 2: //south
        yLed -= numberOfSteps;
        break;
      case 3: //west
        xLed -= numberOfSteps;
    }
    */


    for (var i = 0; i < numberOfSteps; i++) {
      if (direction === 0) yLed++;
      if (direction === 1) xLed++;
      if (direction === 2) yLed--;
      if (direction === 3) xLed--;
      
      previousLocations.indexOf(xLed + ',' + yLed) > -1 ? console.log('Visited place before found after: ' + (Math.abs(xLed) + Math.abs(yLed))) : previousLocations.push(xLed + ',' + yLed);
    }
}
console.log(xLed);
console.log(yLed);
console.log('result: ' + (Math.abs(xLed) + Math.abs(yLed)));
