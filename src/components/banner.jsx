import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import data from "../pages/kelulusans"
import banner from "./banner.png"

const Banner = () => {
    const [inJalur, setInJalur] = useState('ON')
    const [inDigit, setInDigit] = useState('')
    const tahunAjaran = '2324'
    const [status, setStatus] = useState(false)
    const [statusError, setStatusError] = useState(false)
    const [hasil, setHasil] = useState()

    const pengungumanStyle = {
        borderRadius: '10px',
        background: 'linear-gradient(90deg, rgba(247,212,106,1) 0%, rgba(211,74,148,1) 100%)',
    }
    const buttonStyle = {
        background: 'linear-gradient(90deg, rgba(247,212,106,1) 0%, rgba(211,74,148,1) 100%)',
        border: 'none',
        width: '100%'
    }
    const textGradient = {
        background: 'linear-gradient(90deg, rgba(247,212,106,1) 0%, rgba(211,74,148,1) 100%)',
        backgroundClip: 'text',
        fillColor: 'transparent'
    }
    const handleJalur = (event) => {
        setInJalur(event.target.value)
      }
    const handleDigit = (digit) => {
        setInDigit(digit)
      }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setStatus(false)
        setStatusError(false)
        const nomorDaftar = inJalur+tahunAjaran+inDigit
        console.log(nomorDaftar);
        const hasilKelulusan = data.find(element=>{
            return element.username.toUpperCase() === nomorDaftar
        })
        
        if(hasilKelulusan !== undefined) {
            console.log('ada')
            setHasil(hasilKelulusan)
            setStatus(true);
        }
        if(hasilKelulusan === undefined) {
            setHasil('Mohon Maaf Nomor Peserta Tidak Valid')
            setStatusError(true)
        }
    }
    return (
        <div id="beranda" className="mt-5 pt-4">
            <Container>
                <Row className=''>
                    <Col lg={8} className="">
                        <img className="img-fluid rounded" src={banner} alt=""/>
                    </Col>
                    <Col lg={4} className=''>
                        <div className="fw-bolder" style={textGradient}>SMP Islam Qurani Al Bahjah</div>
                        <div className="fs-2 fw-bold lh-base">Selamat Datang di Website Informasi Kelulusan</div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group as={Row} className='mb-3'>
                                <Form.Label sm={2}>
                                    Jalur Pendaftaran
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Select aria-label="Default select example" value={inJalur} onChange={handleJalur}>
                                        <option disabled>Pilih Jalur Pendaftaran</option>
                                        <option value="ON">ONLINE</option>
                                        <option value="OFF">OFFLINE</option>
                                        <option value="SD">SDIQu</option>
                                    </Form.Select>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label sm={2}>
                                    Tahun Ajaran
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control type="text" placeholder="Tiga Digit Terakhir" value='2324' disabled/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                                <Form.Label sm={2}>
                                    Digit Terakhir No Pendaftaraan
                                </Form.Label>
                                <Col sm={12}>
                                    <Form.Control type="number" pattern="[0-9]*" placeholder="Tiga Digit Terakhir" value={inDigit} onChange={(e) => handleDigit(e.target.value)} required/>
                                </Col>
                            </Form.Group>
                            <Button type='submit' style={buttonStyle} className="mt-4 d-block">Periksa</Button>
                        </Form>
                    </Col>
                </Row>
                {status &&(
                        <Row>
                            <div style={pengungumanStyle} class="px-5 py-3 my-5 text-center">
                                <h3 class="">Ahlan wa Sahlan wa Marhaba,</h3>
                                <h1 class="display-6 fw-bold">{hasil.nama} - {hasil.asal}</h1>
                                <div class="col-lg-6 mx-auto">
                                <p class="lead mb-4">Bersamaan dengan pengumuman ini, kami akan informasikan bahwa Ananda diterima di <p class="display-6 fw-bold">{hasil.penempatan}.</p>Langkah selanjutnya adalah silakan gabung grup komunikasi di sekolah penempatan.</p>
                                <div>DAFTAR ULANG : </div>
                                </div>
                            </div>
                        </Row>
                    )
                }
                {statusError &&(
                        <Row>
                            <div style={pengungumanStyle} class="px-5 py-3 my-5 text-center">
                                <h1 class="display-6 fw-bold">{hasil}</h1>
                            </div>
                        </Row>
                    )
                }
            </Container>
        </div>
    )
}

export default Banner