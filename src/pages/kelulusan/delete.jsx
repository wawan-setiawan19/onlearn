import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Button, Modal, Toast, ToastContainer } from "react-bootstrap"


const DeleteLulus = ({ handleClose, id, loadData }) => {
  const [inNama, setInNama] = useState('')
  const [inAsal, setInAsal] = useState('')
  const [show, setShow] = useState(false)
  const [loading, setLoading] = useState(true)

  const loadDeleteData = () => {
    axios.get(`http://localhost:3030/lulus/${id}`)
      .then((res) => {
        const data = res.data
        setInNama(data.nama)
        setInAsal(data.asal)
        setLoading(false)
      })
  }

  useEffect(() => {
    loadDeleteData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDelete = (event) => {
    axios({
      method: 'delete',
      url: `http://localhost:3030/lulus/${id}`,
    })
      .then((res) => {
        setShow(true)
        setTimeout(() => {
          handleClose()
          loadData()
        }, 1000);
      })
  }

  return (
    <div className="container">
      <Modal.Header closeButton>
        <Modal.Title>Delete Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure want to delete Course<div>{inNama} - {inAsal} ?</div>
      </Modal.Body>
      {!loading && <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </Modal.Footer>}
      <ToastContainer position="top-end">
        <Toast bg="danger" className="m-2" onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Toast.Header>
            <strong className="me-auto">Delete</strong>
            <small>Data berhasil terhapus</small>
          </Toast.Header>
          <Toast.Body>{`${inNama}-${inAsal} berhasil di delete`}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}

export default DeleteLulus