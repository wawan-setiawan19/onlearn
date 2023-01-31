import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Button, Col, Form, Row, Toast, ToastContainer } from "react-bootstrap"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"


const EditLulus = () => {
  const navigate = useNavigate()
  const [inPenempatan, setInPenempatan] = useState('SMPIQu Pusat')
  const [inUsername, setInUsername] = useState('')
  const [inPassword, setInPassword] = useState('')
  const [inNama, setInNama] = useState('')
  const [inAsal, setInAsal] = useState('')
  const [show, setShow] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3030/lulus/${id}`)
      .then((res) => {
        const data = res.data
        setInPenempatan(data.penempatan)
        setInUsername(data.username)
        setInPassword(data.password)
        setInNama(data.nama)
        setInAsal(data.asal)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUsername = (Username) => {
    setInUsername(Username)
  }
  const handlePassword = (Password) => {
    setInPassword(Password)
  }
  const handleNama = (Nama) => {
    setInNama(Nama)
  }
  const handleAsal = (Asal) => {
    setInAsal(Asal)
  }
  const handlePenempatan = (event) => {
    setInPenempatan(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const dataInput = {
      penempatan: inPenempatan,
      username: inUsername,
      password: inPassword,
      nama: inNama,
      asal: inAsal,
    }

    axios({
      method: 'patch',
      url: `http://localhost:3030/lulus/${id}`,
      data: dataInput
    })
      .then((res) => {
        setShow(true)
        setTimeout(() => {
          navigate('/kelulusan')
        }, 3000);
      })
  }
  return (
    <div className="mt-5 pt-5 container">
      <Button as={Link} to="/courses">Back</Button>
      <h1>Edit Data</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label sm={2}>
            Penempatan
          </Form.Label>
          <Col sm={12}>
            <Form.Select aria-label="Default select example" value={inPenempatan} onChange={handlePenempatan}>
              <option disabled>Pilih Penerimaan SMP</option>
              <option value="SMPIQu Pusat">SMPIQu Pusat</option>
              <option value="SMPIQu Kuningan">SMPIQu Kuningan</option>
              <option value="SMPIQu Depok-Jamblang">SMPIQu Depok-Jamblang</option>
              <option value="SMPIQu Buyut">SMPIQu Buyut</option>
              <option value="SMPIQu Bogor">SMPIQu Bogor</option>
              <option value="SMPIQu Cianjur">SMPIQu Cianjur</option>
              <option value="SMPIQu Blitar">SMPIQu Blitar</option>
              <option value="SMPIQu Tulungagung">SMPIQu Tulungagung</option>
              <option value="SMPIQu Pekanbaru">SMPIQu Pekanbaru</option>
              <option value="SMPIQu Batam">SMPIQu Batam</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label sm={2}>
            Nama Lengkap
          </Form.Label>
          <Col sm={12}>
            <Form.Control type="text" placeholder="Nama Lengkap" value={inNama} onChange={(e) => handleNama(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label sm={2}>
            Asal Sekolah
          </Form.Label>
          <Col sm={12}>
            <Form.Control type="text" placeholder="Asal Sekolah" value={inAsal} onChange={(e) => handleAsal(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label sm={2}>
            Username
          </Form.Label>
          <Col sm={12}>
            <Form.Control type="text" placeholder="Username" value={inUsername} onChange={(e) => handleUsername(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label sm={2}>
            Password
          </Form.Label>
          <Col sm={12}>
            <Form.Control type="text" placeholder="Password" value={inPassword} onChange={(e) => handlePassword(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <Col sm={12}>
            <div className="d-grid">
              <Button type="submit">Ubah Data Santri</Button>
            </div>
          </Col>
        </Form.Group>
      </Form>

      <ToastContainer position="top-end">
        <Toast bg="success" className="m-2" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Success</strong>
            <small>{inNama}</small>
          </Toast.Header>
          <Toast.Body>{`${inNama}-${inAsal} berhasil diubah`}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}

export default EditLulus