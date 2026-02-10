//Events are actions performed by the user or the browser. When an event occurs, the browser creates an event object, which contains information about the event. We can use JavaScript to listen for events and respond to them.
//click, mouseover, keydown, etc are some of the common events related to User and DOM interactions.
//events in nodejs are related to the server side, such as when a request is made to the server, when a file is read, etc. We can use the EventEmitter class from the 'events' module to create and handle events in nodejs.

import EventEmitter from 'events';

const emitter = new EventEmitter();

//U can create events as listeners to handle them.

emitter.on("addRecord", (record) => {
    console.log("Record added:", record);
});
//U have registered for an event addRecord and U have provided a callback function that will be called when the event is emitted/triggered. The callback function takes a parameter record, which will contain the data related to the event.
emitter.on("deleteRecord", (recordId) => {
    console.log("Record deleted with ID:", recordId);
});

//raise the events. 
emitter.emit("addRecord", { id: 1, name: "Phaniraj", city: "Bangalore" });
//emit function is used to trigger the event. The first argument is the name of the event, and the second argument is the data that we want to pass to the event handler (callback function). In this case, we are passing an object with id, name, and city properties to the addRecord event.

emitter.emit("deleteRecord", 1);
