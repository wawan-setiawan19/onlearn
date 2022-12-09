import { Toast } from "react-bootstrap"

const ToastNotification = ({message, status, title, setShow, show}) =>{
    return(
    <Toast bg={status} className="m-2" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto text-capitalize">{status}</strong>
            <small>{title}</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
    )
}

export default ToastNotification