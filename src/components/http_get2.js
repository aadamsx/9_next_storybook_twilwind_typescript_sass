//www.labnol.org/urlfetch/

https: fetch("https://postman-echo.com/post?id=123&foo=bar", {
  method: "GET",
  headers: {
    Authorization: "Bearer testtesttest",
    "x-api-key": "123xyz",
    "cache-control": "no-cache",
    "Content-Type": "application/json",
  },
  data: JSON.stringify({
    name: "Amit Agarwal",
    title: "Google Developer Expert",
  }),
})
  .then(function (response) {
    console.log(response.status);
    return response.text();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error.message);
  });

async function isPositive(text) {
  const response = await fetch(`http://text-processing.com/api/sentiment/`, {
    method: "POST",
    body: `text=${text}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const json = await response.json();
  return json.label === "pos";
}

const searchParams = new URLSearchParams();
searchParams.set("foo", "bar");
searchParams.set("hello", "world");

// Logs 'foo=bar&hello=world'
console.log(searchParams.toString());

const searchParams = new URLSearchParams([
  ["foo", "bar"],
  ["hello", "world"],
]);

// Logs 'foo=bar&hello=world'
console.log(searchParams.toString());

const searchParams = new URLSearchParams({
  foo: "bar",
  hello: "world",
});

// Logs 'foo=bar&hello=world'
console.log(searchParams.toString());

const searchParams = new URLSearchParams("foo=bar&hello=world");

// Logs 'foo=bar&hello=world'
console.log(searchParams.toString());
