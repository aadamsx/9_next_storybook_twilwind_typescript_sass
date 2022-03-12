// setStyle
// Sets the value of a CSS rule for the specified element.

// Use element.style to set the value of the CSS rule for the specified element to val.

const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);

setStyle(document.querySelector("p"), "font-size", "20px"); // The first <p> element on the page will have a font-size of 20px
