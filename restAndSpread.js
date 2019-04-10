/*
* Rest and Spread
*
*/
//What are the differences between rest and spread?
/*
    1.JavaScript ECMA6 came with cool new features '...' , is new JavaScript functionalists.
      It can be used in two different ways; as a spread operator OR as a rest parameter.
    2.Rest parameter: collects all remaining elements into an array.
    3.Spread operator: allows iterables( arrays / objects / strings ) to be expanded into
      single arguments/elements.
*/

//Rest parameters
//From the definition we saw earlier, rest parameters collect all the remaining elements into an array.
let arr = [];
function squareSelected(x,y,...others){
    for(const prop of others){
        let temp = prop*prop;
        arr.push(temp);
    }
    console.log(x + " and " +y);
    console.log(...others);
    console.log(...arr);
    return arr;
}

console.log(squareSelected(1,2,3,4,5,6));
//Note: Rest parameters have to be at the last argument.
//This is because it collects all remaining/ excess arguments into an array.
/////////////////////////////////////////////////////////////////////////
//Spread Operators
//Spread operator helps us to expand the strings or array literals or object literals.
let subject = "mathematics";
let arrStr = [...subject];
console.log("split the string " + arrStr);
//It splits the single string into the array of strings

//We can use the spread operator to copy an array.
const arrSample = [1, 2, 3];
const arr2 = [...arrSample];
console.log( "copy of arr2 " +arr2);

//Combine arrays
const section1 = ["Oparation Theatre","Clinical Room","Lounge"];
const section2 = ["Special Room","Semi Special Room","General Ward"];

const allSection = [...section1,...section2];

console.log(allSection);

//In the above code, we combined section1 and section2 by using the spread operator.

//simple Math.max function
let max = Math.max(12,34,56,11);
console.log("Use of Math.max Simple way " + max);
//now we have array
let arrayTemp = [2,5,3,8,1];
//now we try to put array as parameter in Math.max function
max = Math.max(arrayTemp);
console.log("It throws error 'NaN' : " + max);
//it answers NaN
//here comes spresd operator
max = Math.max(...arrayTemp);
console.log(" Spread Operators Use in Math.max(...array) : " + max);
/*
   Summary :
   When we see "..." in the code, it is either rest parameters or the spread operator.

   There’s an easy way to distinguish between them:

   When ... is at the end of function parameters, it’s “rest parameters” and
   gathers the rest of the list of arguments into an array.
   When ... occurs in a function call or alike, it’s called a “spread operator” and
   expands an array into a list.
   Use patterns:

   Rest parameters are used to create functions that accept any number of arguments.
   The spread operator is used to pass an array to functions that normally require a
   list of many arguments.
   Together they help to travel between a list and an array of parameters with ease.

   All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
*/