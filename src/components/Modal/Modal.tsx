// Modal:
// ___________________________________________________________________

import React from 'react'
import ReactModal from 'react-responsive-modal'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
  open: boolean
  close: () => void
}

const modalStyles = {
  overlay: {
    background: 'var(--color-bg-blur)',
    backdropFilter: 'blur(7px)',
  },
  modal: {
    background: 'transparent',
    boxShadow: 'none',
    margin: '0',
    padding: `0`,
    maxWidth: '100%',
    width: '100%',
  },
}

const Modal = ({ children, open, close }: ModalProps) => (
  <ReactModal
    animationDuration={150}
    open={open}
    onClose={close}
    styles={modalStyles}
    focusTrapped={false}
    // center={true}
    showCloseIcon={false}
  >
    {children}
  </ReactModal>
)

export default Modal
