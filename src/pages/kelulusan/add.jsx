import axios from "axios"
import { useState } from "react"
import { Button, Col, Form, Image, Row, ToastContainer } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import ToastNotification from "../../components/toastNotification"


const AddLulus = () => {
  const navigate = useNavigate()
  const [inCategory, setInCategory] = useState('SD')
  const [inTitle, setInTitle] = useState('')
  const [inTeacher, setInTeacher] = useState('')
  const [inImage, setInImage] = useState('')
  const [show, setShow] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastTitle, setToastTitle] = useState('')
  const [toastStatus, setToastStatus] = useState('')
  const [dataInputCek, setDataInputCek] = useState(null);

  const handleTitle = (title) => {
    setInTitle(title)
  }
  const handleTeacher = (teacher) => {
    setInTeacher(teacher)
  }
  const handleImage = (image) => {
    setInImage(image)
  }
  const handleCategory = (event) => {
    setInCategory(event.target.value)
  }

  const checkingInput = () => {
    let statusChecking = true;
    let array = []
    setDataInputCek(null)
    setToastStatus('warning')
    setToastTitle('Data belum lengkap')
    if (inImage === '') {
      array.push('Image')
      statusChecking = false
    }
    if (inTitle === '') {
      array.push('Course Name')
      statusChecking = false
    }
    if (inTeacher === '') {
      array.push('Teacher')
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
      category: inCategory,
      title: inTitle,
      teacher: inTeacher,
      image: inImage
    }

    axios({
      method: 'post',
      url: 'http://localhost:3030/lulus',
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
            Category
          </Form.Label>
          <Col sm={12}>
            <Form.Select aria-label="Default select example" value={inCategory} onChange={handleCategory}>
              <option disabled>Choose the Category</option>
              <option value="SD">SD</option>
              <option value="SMP">SMP</option>
              <option value="SMA">SMA</option>
            </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label sm={2}>
            Material Topic
          </Form.Label>
          <Col sm={12}>
            <Form.Control type="text" placeholder="Course Name" value={inTitle} onChange={(e) => handleTitle(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label sm={2}>
            Teacher
          </Form.Label>
          <Col sm={12}>
            <Form.Control type="text" placeholder="Teacher Name" value={inTeacher} onChange={(e) => handleTeacher(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label sm={2}>
            Image Display Link
          </Form.Label>
          <Col sm={12}>
            <Form.Control type="text" placeholder="Link Image" value={inImage} onChange={(e) => handleImage(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label sm={2}>
            Image Preview
          </Form.Label>
          <Col sm={12}>
            {inImage !== '' && <Image src={inImage} alt='preview' width={200} thumbnail rounded />}
            {inImage === '' && <Image src={inImage} alt='No-Image' width={200} thumbnail rounded />}
          </Col>
        </Form.Group>

        <Form.Group className="mb-3">
          <Col sm={12}>
            <div className="d-grid">
              <Button type="submit">Add Course</Button>
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