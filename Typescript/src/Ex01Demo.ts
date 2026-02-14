console.log("Hello world");

let strContent : string = "Welcome to Typescript"

let myValue = 123;//Type inference. What ever U assign to the variable , that shall be the datatype.
//myValue = "Test123" Error as the myValue is of number
console.log(strContent)

strContent = "123";//Error as strContent is string

let check :  boolean = true;
let obj : object = {id :123, name : "Phaniraj", address: "Bangalore"};
console.log(obj)
let test : any = "Apple";
console.log(typeof(test));
test = 123 ;
console.log(typeof(test));

test = true;
console.log(typeof(test));
test = undefined
console.log(typeof(test));

let vegetables : string[] = ["Tomatoes", "Onions", "Potatoes", "Brinjals"];
for(let i = 0; i < vegetables.length; i++)
    console.log(vegetables[i]);


/////////////////////tuples in TS////////////////////////////
let data :[string, number, boolean] = ["Typescript examples", 2026, true];
console.log("\nData values:")
console.log(data)
console.log("String: ", data[0])
console.log("number: ", data[1])
console.log("bool: ", data[2])
//////////////////////////Enums in TS///////////////////////////
enum color{
    Red, Green, Blue
}

let favColor : color = color.Blue;
console.log("\nFav color: ", color[favColor]);
console.log("Displaying all colors of enum: \n");
for(let col in color){
    console.log(col);
    console.log("Its internal value: ")
    if(isNaN(Number(col))){
        console.log(col)
    }
}





