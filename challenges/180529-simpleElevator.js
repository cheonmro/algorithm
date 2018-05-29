// Problem: Return a number that is how many levels the elevator must go up or down


// There is a house with 4 levels. In that house there is an elevator. You can program this elevator 
// to go up or down, depending on what button the user touches inside the elevator.

// valid levels must be only these numbers: 0,1,2,3

// valid buttons must be only these strings: '0','1','2','3'

// possible return values are these numbers: -3,-2,-1,0,1,2,3

// If the elevator is on the ground floor(0th level) and the user touches button '2' 
// the elevator must go 2 levels up, so our function must return 2.

// If the elevator is on the 3rd level and the user touches button '0' 
// the elevator must go 3 levels down, so our function must return -3.

// If the elevator is on the 2nd level, and the user touches button '2' 
// the elevator must remain on the same level, so we return 0.

// We cannot endanger the lives of our passengers, so if we get erronous inputs, 
// our elevator must remain on the same level. So for example:

// goto(2,'4') must return 0, because there is no button '4' in the elevator.
// goto(4,'0') must return 0, because there is no level 4.
// goto(3,undefined) must return 0.
// goto(undefined,'2') must return 0.
// goto([],'2') must return 0 because the type of the input level is array instead of a number.
// goto(3,{}) must return 0 because the type of the input button is object instead of a string.


function goto(level,button){
  // 1. Get integers from user => level, button
  // 2. If the type of level is "number", "number" is between 0 and 3, and
  //    if the type of button is "string", "string" is between '0' and '3',
  //    Return button - level
  // 3. If not, return 0
  if((typeof level === "number" && level >= 0 && level <= 3 && Number.isInteger(level)) && (typeof button === "string" && button >= '0' && button <= '3' && Number.isInteger(Number(button)))) {
    return button - level;
  }
  return 0;
}

console.log((goto(0,'2'))); // 2



// Another Solution

function goto(level,button){
  const possbileLevels = [0,1,2,3];
  const possbileButtons = ["0","1","2","3"];

  if (possbileLevels.indexOf(level) <0) return 0;
  if (possbileButtons.indexOf(button) <0) return 0;

  return parseInt(button) - level;
}


// javascript syntax: array.indexOf()
