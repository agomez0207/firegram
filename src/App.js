import React, { useState } from 'react';
import Title from './comps/Title';
import Form from './comps/Form';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';

function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <Form />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/> }
    </div>
  );
}

export default App;
