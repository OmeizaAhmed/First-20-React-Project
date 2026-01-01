import './modal.css'

type modalProps = {
  header: React.ReactNode
  body: React.ReactNode
  footer: React.ReactNode
  onClose: any
}
export default function Modal({header, body, footer, onClose}:modalProps ){

  return (
    <div className="modal-container">
      <span onClick={onClose} className="close-btn">X</span>
      <div className="modal-header">{header? header :'Header'}</div>
      <div className="modal-body">{body? body :'Body'}</div>
      <div className="modal-footer">{footer? footer :'Footer'}</div>
    </div>
  )
}