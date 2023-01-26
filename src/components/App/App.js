import './App.scss';
import initialArray from '../utils/constants';
import File from '../File/File';
import { useState } from 'react';

function App() {
  const [fileList, setFileList] = useState(initialArray)
  const [currentFile, setCurrentFile] = useState(null);

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  }

  return (
    <div className="app">
      {fileList.sort(sortCards).map((file) => {
        return <File 
          key={file.id}
          name={file.name}
          img={file.img}
          files={file.files}
          file={file}

          fileList={fileList}
          setFileList={setFileList}
          currentFile={currentFile}
          setCurrentFile={setCurrentFile}
        />
      })}
    </div>
  );
}

export default App;
