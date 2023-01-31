import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Button, Col, Image, Modal, Row, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import DeleteCourse from "./delete";

const DashboardLulus = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false)
    const [idReceive, setIdReceive] = useState('')
    const [courses, setCourses] = useState();

    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        console.log(id);
        setShow(true)
        setIdReceive(id)
    }
    const loadData = () => {
        axios.get('http://localhost:3030/lulus')
            .then((res) => {
                setCourses(res.data)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <div className="container">
            <div className="mt-5 pt-3">
                <h1>Daftar Nama Kelulusan</h1>
                <Row>
                    <Col sm={12}>
                        <Button as={Link} to="/kelulusan/add">Add</Button>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Category</th>
                                <th>Material Topic</th>
                                <th>Teacher</th>
                                <th>Thumbnail</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (
                                <tr>
                                    <td colSpan={6}>Loading.....</td>
                                </tr>
                            )}
                            {!isLoading && courses.map((course, index) => {
                                return (
                                    <tr key={course._id}>
                                        <td>{index + 1}</td>
                                        <td>{course.category}</td>
                                        <td>{course.title}</td>
                                        <td>{course.teacher}</td>
                                        <td><Image src={course.image} width={200} thumbnail rounded /></td>
                                        <td>
                                            <div className="d-grid">
                                                <Button variant="outline-primary" as={Link} className="d-block mt-2" to={`./edit/${course._id}`}>Edit</Button>
                                                <Button variant="outline-danger" className="d-block mt-2" onClick={() => handleShow(course._id)}>Delete</Button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </div>
            <Modal show={show} onHide={handleClose}>
                <DeleteCourse handleClose={handleClose} id={idReceive} loadData={loadData} />
            </Modal>
        </div>
    )
}

export default DashboardLulus