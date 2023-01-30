import './WindowModal.scss'
import { useEffect, useRef, useState } from 'react';

function WindowModal(props) {
  const [fullSize, setFullSize] = useState(false)
  const modalContent = useRef(null)
  const modalContainer = useRef(null)
  const isGrabed = useRef(false)
  const coordinates = useRef({
    startX: 0, 
    startY: 0,
    lastX: 0,
    lastY: 0
  })

  const popupFullSize = () => {
    setFullSize(!fullSize)
    const modal = modalContainer.current;
    const modalCont = modalContent.current

    if(fullSize === true) {
      modalCont.style.height = 350 + `px`
      modalCont.style.width = 500 + `px`
    } else {
      modal.style.top = 0
      modal.style.left = 0
      modalCont.style.height = 100 + `vh`
      modalCont.style.width = 100 + `vw`
    }
  }
  


  useEffect(()=> {
    if(!props.appContainer || !modalContainer) return

    const app = props.appContainer.current;
    const modal = modalContainer.current;

    const onMouseDown = (e) => {
      isGrabed.current = true
      coordinates.current.startX = e.clientX
      coordinates.current.startY = e.clientY
    }

    const onMouseUp = (e) => {
      isGrabed.current = false
      coordinates.current.lastX = modal.offsetLeft
      coordinates.current.lastY = modal.offsetTop
    }

    const prohibitCrossingWindow = (e) => {
      if (modal.offsetLeft  <= 0) {
        return modal.style.left = 0
      } 
      else if (modal.offsetTop <= 0) {
        return modal.style.top = 0
      } 
      else if ((modal.offsetLeft + modal.offsetWidth) >= window.innerWidth ) {
        return modal.style.left = `${window.innerWidth - modal.offsetWidth}px`
      } 
      else if (modal.offsetTop + modal.offsetHeight >= window.innerHeight) {
        return modal.style.top = `${window.innerHeight - modal.offsetHeight}px`
      }
    }

    const onMouseMove=(e)=> {
      if(!isGrabed.current) return

      const nextX = e.clientX - coordinates.current.startX + coordinates.current.lastX
      const nextY = e.clientY - coordinates.current.startY + coordinates.current.lastY

      modal.style.top = `${nextY}px`
      modal.style.left = `${nextX}px`
    }

    modal.addEventListener('mousedown', onMouseDown)
    modal.addEventListener('mouseup', onMouseUp)

    app.addEventListener('mousemove', onMouseMove)
    app.addEventListener('mouseleave', onMouseUp)

    window.addEventListener('mousemove', prohibitCrossingWindow)

    const cleanup = () => {
      modal.removeEventListener('mousedown', onMouseDown)
      modal.removeEventListener('mousedown', onMouseUp)
      app.removeEventListener('mousemove', onMouseMove)
      app.removeEventListener('mouseleave', onMouseUp)
      window.removeEventListener('mousemove', prohibitCrossingWindow)
    }
    return cleanup
  })

  return (

    <div className="window-modal" ref={modalContainer}>

      <div className='window-modal__container'>
        <button className='window-modal__close window-modal__close_type_windows' onClick={()=>popupFullSize()}></button>
        <button className='window-modal__close window-modal__close_type_close' onClick={()=>props.closeModal()}></button>
      </div>
      <div className='window-modal__content' ref={modalContent}>{props.children}</div>

    </div>
  )
}

export default WindowModal;