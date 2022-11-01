import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



function NavbarComponent() {

    return (

        <Navbar expand="sm">
            <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
            <Navbar.Toggle />
            <NavbarCollapse className="justify-content-end">
                <Button>Carrello 0 Articoli</Button>
            </NavbarCollapse>
        </Navbar>
    )
}


export default NavbarComponent;


