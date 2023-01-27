import './File.scss'
import { useState } from 'react';
import WindowModal from '../WindowModal/WindowModal';

function File(props) {
  const [modalOpened, setModalOpened] = useState(false);
  
  const openModal = () => {
    setModalOpened(true)
  }

  const closeModal = () => {
    setModalOpened(false)
  }

  const dragStartHandler = (e, file) => {
    props.setCurrentFile(file)
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
  }

  const dropHandler = (e, file) => {
    e.preventDefault();

    props.setFileList(props.fileList.map((f) => {
      if (f.id === file.id) {
        return {...f, order: props.currentFile.order}
      }
      if (f.id === props.currentFile.id) {
        return {...f, order: file.order}
      }
      return f
    }))
  }

  return (
    <>
      <div className="file" 
        onClick={()=>openModal()} 
        onDragStart={(e)=>{dragStartHandler(e, props.file)}}
        onDragOver={(e)=>{dragOverHandler(e)}}
        onDrop={(e)=>{dropHandler(e, props.file)}}
        draggable={true}
      >
        <img className='file__img' src={props.img} alt='file'/>
        <span className='file__name'>{props.name}</span>
      </div>
      {modalOpened && 
        <WindowModal 
          closeModal={closeModal}
          appContainer={props.appContainer}
          
          children={props.files !== undefined && props.files.map((child) => {
            return <File 
              key={child.id}
              name={child.name}
              img={child.img}
            />
          })}
        />
      }
    </>
  )
}

export default File;