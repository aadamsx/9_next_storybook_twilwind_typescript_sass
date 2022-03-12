// What is event-driven programming?
// Answer
// Event-driven programming is a paradigm that involves building applications that send and receive events. When the program emits events, the program responds by running any callback functions that are registered to that event and context, passing in associated data to the function. With this pattern, events can be emitted into the wild without throwing errors even if no functions are subscribed to it.

// A common example of this is the pattern of elements listening to DOM events such as click and mouseenter, where a callback function is run when the event occurs.

document.addEventListener("click", function (event) {
  // This callback function is run when the user
  // clicks on the document.
});

// Without the context of the DOM, the pattern may look like this:

const hub = createEventHub();
hub.on("message", function (data) {
  console.log(`${data.username} said ${data.text}`);
});
hub.emit("message", {
  username: "John",
  text: "Hello?",
});

// With this implementation, on is the way to subscribe to an event, while emit is the way to publish the event.

// Good to hear
// Follows a publish-subscribe pattern.
// Responds to events that occur by running any callback functions subscribed to the event.
// Show how to create a simple pub-sub implementation with JavaScript.
// Additional links
// MDN docs on Events and Handlers
// Understanding Node.js event-driven architecture
