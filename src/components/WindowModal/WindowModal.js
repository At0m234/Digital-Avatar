import './WindowModal.scss'

function WindowModal(props) {
  return (
    <div className="window-modal">
      <div className='window-modal__container'>
        <button className='window-modal__close' onClick={()=>props.closeModal()}></button>
        <div className='window-modal__content'>{props.children}</div>
      </div>
    </div>
  )

}

export default WindowModal;