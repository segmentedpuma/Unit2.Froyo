/*A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors.
 They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.
  When they view the browser console, they observe a table listing how many of each flavor they have ordered.
   In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.
*/


//define flavors as a varible (which will hold the flavors object later)
let flavors;
//create a function that holds the code for returning an order list
const getOrder = () => {

  //create a resetting object (per function call) of a list of flavors with their values equal to zero (later to be used as a counter)
  flavors = {
    coffee: 0,
    strawberry: 0,
    vanilla: 0,
  }

  //create a prompt asking for the users list of flavors they want separated by commas
  let userInput = prompt('please input desired flavors separated by commas. flavors: coffee, strawberry, vanilla', []);

  //take the users input and store the separate values in an array
  let userFlavors = userInput.split(",");

  //go through the users list array and see which flavors the user wants
  for (let count = 0; count < userFlavors.length; count++) {

    //take out a flavor from the user array
    let currentFlavor = userFlavors[count];
    
    //add 1 to the relevent value of the key in the flavors list
    flavors[currentFlavor] += 1;
  }

  //get all the key-value pairs from the flavors list
  for (keys in flavors) {
    //print out the name of the flavor followed by how many of that flavor were ordered
    console.log(`${keys}: ${flavors[keys]}`);
  }

  //return flavors because the rubric says so i guess ._.
  return flavors;

}

console.log(getOrder());














