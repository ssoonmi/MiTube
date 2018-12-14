import React from 'react';

const Modal = (props) => {
  const {modal, closeModal} = props;

  if (modal) {
    return (
      <div className="modal" onClick={closeModal}>
      </div>
    );
  } else {
    return (
      null
    );
  }
};

export default Modal;