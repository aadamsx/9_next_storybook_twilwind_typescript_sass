// hide
// Hides all the elements specified.

// Use NodeList.prototype.forEach() to apply display: none to each element specified.

const hide = (...el) => [...el].forEach((e) => (e.style.display = "none"));

hide(document.querySelectorAll("img")); // Hides all <img> elements on the page
