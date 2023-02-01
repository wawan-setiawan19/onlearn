import axios from "axios"
import { useState } from "react"
import { Button, Col, Form, Row, ToastContainer } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import ToastNotification from "../../components/toastNotification"


const AddLulus = () => {
  const navigate = useNavigate()
  const [inPenempatan, setInPenempatan] = useState('SMPIQu Pusat')
  const [inUsername, setInUsername] = useState('')
  const [inPassword, setInPassword] = useState('')
  const [inNama, setInNama] = useState('')
  const [inAsal, setInAsal] = useState('')

  const [show, setShow] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastTitle, setToastTitle] = useState('')
  const [toastStatus, setToastStatus] = useState('')
  const [dataInputCek, setDataInputCek] = useState(null);

  const handleUsername = (username) => {
    setInUsername(username)
  }
  const handlePassword = (password) => {
    setInPassword(password)
  }
  const handleNama = (nama) => {
    setInNama(nama)
  }
  const handleAsal = (asal) => {
    setInAsal(asal)
  }
  const handlePenempatan = (event) => {
    setInPenempatan(event.target.value)
  }

  const checkingInput = () => {
    let statusChecking = true;
    let array = []
    setDataInputCek(null)
    setToastStatus('warning')
    setToastTitle('Data belum lengkap')
    if (inUsername === '') {
      array.push('UserName')
      statusChecking = false
    }
    if (inPassword === '') {
      array.push('Password')
      statusChecking = false
    }
    setShow(true)

    if (!statusChecking) {
      setDataInputCek(array)
      console.log(false);
      return false
    } else {
      console.log(true);
      setToastStatus('success')
      setToastTitle('Add Data')
      setToastMessage('Data berhasil ditambahkan')
      return true;
    }
  }
  const addData = () => {
    const dataInput = {
      penempatan: inPenempatan,
      username: inUsername,
      password: inPassword,
      nama: inNama,
      asal: inAsal,
    }

    axios({
      method: 'post',
      url: `http://192.168.100.111:3030/lulus`,
      data: dataInput
    })
      .then((res) => {
        setShow(true)
        navigate('/kelulusan')
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (checkingInput()) {
      addData()
    }
  }
  return (
    <div className="mt-5 pt-5 container">
      <h1>Add Data</h1>
      <Button as={Link} to='/kelulusan'>Back</Button>
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
              <Button type="submit">Tambah Santri</Button>
            </div>
          </Col>
        </Form.Group>
      </Form>
        <ToastContainer position="top-end">
        {
          dataInputCek !== null && dataInputCek.map(data=>{
            return(
              <ToastNotification
                message={`${data} masih kosong`}
                show={show}
                title={toastTitle}
                status={toastStatus}
                setShow={setShow}
              />
            )
          })
        }
        {
          dataInputCek === null &&
          <ToastNotification
                message={toastMessage}
                show={show}
                title={toastTitle}
                status={toastStatus}
                setShow={setShow}
              />
        }
        </ToastContainer>
    </div>
  )
}

export default AddLulus