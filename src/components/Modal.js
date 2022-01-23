import BSModal from 'react-bootstrap/Modal'

export function Modal (props) {
  const { show, onHide, title, children } = props
  return (
    <BSModal show={show} onHide={onHide} centered>
      <BSModal.Header closeButton>
        <BSModal.Title>{title}</BSModal.Title>
      </BSModal.Header>
      <BSModal.Body>{children}</BSModal.Body>
    </BSModal>
  )
}
