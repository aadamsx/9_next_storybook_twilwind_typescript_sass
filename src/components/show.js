// show
// Shows all the elements specified.

// Use the spread operator (...) and Array.prototype.forEach() to clear the display property for each element specified.

const show = (...el) => [...el].forEach((e) => (e.style.display = ""));

show(...document.querySelectorAll("img")); // Shows all <img> elements on the page
