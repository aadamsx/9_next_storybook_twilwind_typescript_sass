// toggleClass
// Toggle a class for an element.

// Use element.classList.toggle() to toggle the specified class for the element.

const toggleClass = (el, className) => el.classList.toggle(className);

toggleClass(document.querySelector("p.special"), "special"); // The paragraph will not have the 'special' class anymore
