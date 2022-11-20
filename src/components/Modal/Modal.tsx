// Modal:
// ___________________________________________________________________

import React from 'react'
import ReactModal from 'react-responsive-modal'

// ___________________________________________________________________

type ModalProps = {
  children: React.ReactNode
  open: boolean
  close: () => void
} & typeof defaultProps

const modalStyles = {
  overlay: {
    // background: 'var(--color-bg-blur)',
    backdropFilter: 'blur(7px)',
  },
  modal: {
    background: 'transparent',
    boxShadow: 'none',
    margin: '0',
    paddingTop: '0',
    padding: `0`,
    height: '100%',
    maxWidth: '100%',
    width: '100%',
  },
}

const Modal = ({ children, open, close }: ModalProps) => (
  <ReactModal
    animationDuration={100}
    open={open}
    onClose={close}
    styles={modalStyles}
    focusTrapped={true}
    center={true}
    showCloseIcon={false}
  >
    {children}
  </ReactModal>
)

export default Modal

// ___________________________________________________________________

const defaultProps = {}

Modal.defaultProps = defaultProps
