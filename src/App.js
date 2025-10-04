
import ReactDraggable from './components/ReactDraggable';
import ReactDnd from './components/ReactDnd';
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
  if (selectedLibrary == 'react-dnd') {
    content = <ReactDnd />  
  }

  return (
    <>
      <Header />
      <SelectLibrary handleSelectLibrary={onSelectLibrary} />
      {content}
    </>
  );
}

export default App;
