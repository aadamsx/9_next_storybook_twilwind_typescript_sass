// hasClass
// Returns true if the element has the specified class, false otherwise.

// Use element.classList.contains() to check if the element has the specified class.

const hasClass = (el, className) => el.classList.contains(className);

hasClass(document.querySelector("p.special"), "special"); // true
