import React, { useRef } from "react";

function FilterTextField(props) {
  const { handleSubmit, validTags } = props;

  const inputRef = useRef();
  
  function filterSubmit(event) {
    event.preventDefault();
    handleSubmit(inputRef.current.value)
  }
  function handleInput() {
    // console.log(inputRef.current.value, validTags);
  }
  return <form onSubmit={filterSubmit}>
    <input name="filter" type="text" onChange={handleInput} ref={inputRef} />
    <input className="hidden" type="submit" />
  </form>
}

export default FilterTextField;