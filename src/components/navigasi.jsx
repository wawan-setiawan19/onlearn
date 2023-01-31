import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link'
import '../index.scss'
// import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Container, Navbar } from 'react-bootstrap'

const Navigasi = () => {
    return (
        <Navbar collapseOnSelect expand="lg" fixed='top' bg='white'>
            <Container>
                <Navbar.Brand className='fs-3 fw-bold' as={Link} to="/">
                    PSB SMPIQu 2023/2024
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id='responsive-navbar-nav'>
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
                        <Nav.Item className='ps-2 pe-2'>
                            <Button as={Link} to="/register">Daftar</Button>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse> */}
            </Container>
        </Navbar>
    )
}

export default Navigasi