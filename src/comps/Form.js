import React, {useState} from 'react';

const Form = () => {
  const allowedTypes = ["image/png", "image/jpeg"];
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    let selected = event.target.files[0];

    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setFile(null);
      setError("Please select a valid image file (png or jpeg)");
    }
  }
  return (
    <form>
      <label>
      <input type="file" onChange={ changeHandler } />
      <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error"> { error } </div>}
        {file && <div> { file } </div>}
      </div>
    </form>
  )
}

export default Form;