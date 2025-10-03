function InputFocus() {
  const inputRef = React.useRef();

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus input</button>
    </>
  );
}
