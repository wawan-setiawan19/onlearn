import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import '../index.scss'
import { Container, Navbar } from 'react-bootstrap'
// import { Button, Container, Nav, Navbar } from 'react-bootstrap'



const Navigasi = () => {
    // const buttonStyle = {
    //     background: 'linear-gradient(90deg, rgba(247,212,106,1) 0%, rgba(211,74,148,1) 100%)',
    //     border: 'none',
    // }
    return (
        <Navbar collapseOnSelect expand="lg" fixed='top' bg='white'>
            <Container className='d-flex justfy-content-between'>
                <Navbar.Brand className='fs-3 fw-bold' as={Link} to="/">
                    PANITIA PSB SMPIQu 2023/2024
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav' className='d-flex justify-content-end pe-3'>
                    <Nav className='me-auto'>
                        <Nav.Link as={HashLink} to="./#beranda">Beranda</Nav.Link>
                        <Nav.Link as={HashLink} to="./#kursus">Kursus</Nav.Link>
                        <Nav.Link as={HashLink} to="./#produk">Produk</Nav.Link>
                        <Nav.Link as={HashLink} to="./#Promo">Promo</Nav.Link>
                        <Nav.Link as={HashLink} to="./#blog">OnBlog</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Item className='ml-2 ps-2 pe-2'>
                            <Button variant='outline-secondary' as={Link} to="/login">Masuk</Button>
                        </Nav.Item>
                        <Nav.Item>
                            <Button className='d-inline-block' style={buttonStyle} as={HashLink} to="./#periksa">Periksa Hasil Tes</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}

export default Navigasi