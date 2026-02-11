//Async Programming with Promises
//An Async function is one that executes an operation without blocking the main thread. It allows statements to executed without waiting for the previous statement to complete. This is useful for operations that take a long time to complete, such as fetching data from a server or reading a file from disk.
//Most of the callback functions in JS work like async operations. For example, the setTimeout function is an async function that executes a callback function after a specified delay. The fetch function is another async function that retrieves data from a server.

//Example for setTimeout
// console.log("Start");
// setTimeout(() => {
//     console.log("This is an async operation");
// }, 2000);//The function associated with setTimeout will be executed after 2 seconds, while the rest of the code continues to execute without waiting for it to complete.
// console.log("End");

// //setInterval is another async function that executes a callback function repeatedly at specified intervals. For example, the following code will log "Hello" to the console every second:
// setInterval(() => {
//     console.log("Wait, we are still processing UR request....");
// }, 1000);

///////////////////////////Implementing async functions using callbacks///////////////////////////
//Custom Async Function...
async function getData(callback){
    console.log("Fetching data from server....");
    //shall make a call to a backend server and simulate to give some data after 3 seconds..
    setTimeout(() => {
        const data = [{name: "John", age: 30},{name: "Jane", age: 25}, {name: "Doe", age: 35}, {name: "Smith", age: 40}];
        callback(data);
    }, 5000 );
}
console.log("About to get the data")
//wait for the data to be received from the server and then log it to the console
await getData((data) => {
        console.log("Data received from server: ", data);
        console.log(`The no of records recieved is ${data.length}`);
});
 console.log("Thanks for publishing the data");
///////////////////Replace this function with a promise based implementation///////////////////////////
function fetchDataByPromise(){
    //every async function that wants to return a promise should create a new promise object and return it.
    //A Promise is an object that represents a guarenteed result from a async function. It can be in 3 states: pending, fulfilled, or rejected. When a promise is fulfilled, it means that the async operation has completed successfully and the result is available. When a promise is rejected, it means that the async operation has failed and an error is available.

    return new Promise((resolve, reject)=>{
        //call resolve function when success and reject function when failure
        console.log("Fetching data from server....");
        //shall make a call to a backend server and simulate to give some data after 3 seconds..
        setTimeout(() => {
            const data = [{name: "John", age: 30},{name: "Jane", age: 25}, {name: "Doe", age: 35}, {name: "Smith", age: 40}];
            resolve(data);
            if(data.length  == 0){
                reject("No data found");
            }
        }, 5000 );
    });
}

console.log("Executing data operation")
fetchDataByPromise()
.then((data) => {
    console.log("Recieved data: " + data.length)
}).catch((error) => {
    console.log("Error: " + error);
});
console.log("End of execution")