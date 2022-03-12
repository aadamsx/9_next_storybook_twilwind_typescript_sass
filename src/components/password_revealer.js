// PasswordRevealer
// Renders a password input field with a reveal button.

// Use the React.useState() hook to create the shown state variable and set its value to false. Use a<div> to wrap both the<input> and the <button> element that toggles the type of the input field between "text" and "password".

function PasswordRevealer({ value }) {
  const [shown, setShown] = React.useState(false);

  return (
    <div>
      <input
        type={shown ? "text" : "password"}
        value={value}
        onChange={() => {}}
      />
      <button onClick={() => setShown(!shown)}>Show/Hide</button>
    </div>
  );
}

ReactDOM.render(<PasswordRevealer />, document.getElementById("root"));
