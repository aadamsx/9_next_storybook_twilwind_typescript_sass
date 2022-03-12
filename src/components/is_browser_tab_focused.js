// isBrowserTabFocused
// Returns true if the browser tab of the page is focused, false otherwise.

// Use the Document.hidden property, introduced by the Page Visibility API to check if the browser tab of the page is visible or hidden.

const isBrowserTabFocused = () => !document.hidden;

isBrowserTabFocused(); // true
