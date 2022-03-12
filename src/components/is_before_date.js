// isBeforeDate
// Check if a date is before another date.

// Use the less than operator (<) to check if the first date comes before the second one.

const isBeforeDate = (dateA, dateB) => dateA < dateB;

isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
