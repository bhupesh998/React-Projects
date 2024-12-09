import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open , children }) {
  const dialog = useRef();

  // another useCase for useEffect as without useEffect the code will give error as the modal is not there on app so even if open is false , we cannot call the method close on it as the modal is not there on page,
  // once the modal component is rendered then only we can execute the showModal or close method on it as useEffect only runs after component render its a perfect use case for it 
  useEffect(()=>{
    if(open){
      dialog.current.showModal()
    }else{
      dialog.current.close()
    }
  }, [open])


  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
