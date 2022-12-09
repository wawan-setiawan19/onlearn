import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Button, Col, Form, Image, Row, Toast, ToastContainer } from "react-bootstrap"
import { useNavigate, useParams } from "react-router"
import { Link } from "react-router-dom"


const EditCourse = () => {
  const navigate = useNavigate()
  const [inCategory, setInCategory] = useState('')
  const [inTitle, setInTitle] = useState('')
  const [inTeacher, setInTeacher] = useState('')
  const [inImage, setInImage] = useState('')
  const [show, setShow] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3030/course/${id}`)
      .then((res) => {
        const data = res.data
        setInCategory(data.category)
        setInTitle(data.title)
        setInTeacher(data.teacher)
        setInImage(data.image)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
  const handleSubmit = (event) => {
    event.preventDefault()
    const dataInput = {
      category: inCategory,
      title: inTitle,
      teacher: inTeacher,
      image: inImage
    }

    axios({
      method: 'patch',
      url: `http://localhost:3030/course/${id}`,
      data: dataInput
    })
      .then((res) => {
        setShow(true)
        setTimeout(() => {
          navigate('/courses')
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
            Course Name
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
              <Button type="submit">Edit Course</Button>
            </div>
          </Col>
        </Form.Group>
      </Form>

      <ToastContainer position="top-end">
        <Toast bg="success" className="m-2" onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <img
              src={inImage}
              className="rounded me-2"
              alt=""
              width={50}
            />
            <strong className="me-auto">Success</strong>
            <small>{inCategory}</small>
          </Toast.Header>
          <Toast.Body>{`${inTitle}-${inTeacher} has been Created`}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  )
}

export default EditCourse