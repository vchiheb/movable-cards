
import ReactDraggable from './components/ReactDraggable';
import { useState } from 'react';

import Header from './components/Header';
import SelectLibrary from './components/SelectLibrary';

import './index.css';

function App() {

  const [selectedLibrary, setSelectedLibrary] = useState(null);  

  function onSelectLibrary(id) {
    setSelectedLibrary(id);
  }

  let content = <ReactDraggable />

  return (
    <>
      <Header />
      <SelectLibrary handleSelectibrary={onSelectLibrary} />
      {content}
    </>
  );
}

export default App;
