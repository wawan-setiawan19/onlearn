import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { Button, Col, Modal, Row, Table } from "react-bootstrap"
import { Link } from "react-router-dom";
import DeleteLulus from "./delete";

const DashboardLulus = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [show, setShow] = useState(false)
    const [idReceive, setIdReceive] = useState('')
    const [kelulusan, setKelulusan] = useState();

    const handleClose = () => setShow(false)
    const handleShow = (id) => {
        console.log(id);
        setShow(true)
        setIdReceive(id)
    }
    const loadData = () => {
        axios.get('http://192.168.100.111:3030/lulus')
            .then((res) => {
                setKelulusan(res.data)
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
                                <th>Penempatan</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Nama Lengkap</th>
                                <th>Asal Sekolah</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (
                                <tr>
                                    <td colSpan={6}>Loading.....</td>
                                </tr>
                            )}
                            {!isLoading && kelulusan.map((lulus, index) => {
                                return (
                                    <tr key={lulus._id}>
                                        <td>{index + 1}</td>
                                        <td>{lulus.penempatan}</td>
                                        <td>{lulus.username}</td>
                                        <td>{lulus.password}</td>
                                        <td>{lulus.nama}</td>
                                        <td>{lulus.asal}</td>
                                        <td>
                                            <div className="d-grid">
                                                <Button variant="outline-primary" as={Link} className="d-block mt-2" to={`./edit/${lulus._id}`}>Edit</Button>
                                                <Button variant="outline-danger" className="d-block mt-2" onClick={() => handleShow(lulus._id)}>Delete</Button>
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
                <DeleteLulus handleClose={handleClose} id={idReceive} loadData={loadData} />
            </Modal>
        </div>
    )
}

export default DashboardLulus