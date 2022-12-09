import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Banner = () => {
    return (
        <div id="beranda" className="mt-5 pt-5">
            <Container>
                <Row className='mt-lg-5'>
                    <Col lg={4} className='mt-lg-4'>
                        <div className="fw-bolder text-blue">#EasyLearnEasySuccess</div>
                        <div className="fs-1 fw-bold lh-base">Bimbel hybrid dengan harga terjangkau</div>
                        <div className="fs-6 lh-base mt-3 text-secondary">Kemudahan belajar semakin dekat dengan kita, bisa berjumpa secara langsung maupun virtual</div>
                        <Button as={Link} to="/register" className="mt-4 d-block">Gabung Sekarang</Button>
                    </Col>
                    <Col lg={8} className="mt-md-4 mt-sm-4">
                        <img className="img-fluid rounded" src="https://unsplash.com/photos/7d4LREDSPyQ/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8NXx8ZWR1Y2F0aW9ufGVufDB8fHxwdXJwbGV8MTY3MDQwNjUzNg&force=true&w=1920" alt=""/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner