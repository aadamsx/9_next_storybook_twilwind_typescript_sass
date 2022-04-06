// How do you pass an argument to an event handler or callback?
// Answer
// You can use an arrow function to wrap around an event handler and pass arguments, which is equivalent to calling bind:

<button onClick={() => this.handleClick(id)} />
<button onClick={this.handleClick.bind(this, id)} />
