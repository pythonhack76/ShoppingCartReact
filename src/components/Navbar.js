import {Button, Container, Navbar, Modal} from 'react-bootstrap'
import {useState } from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';



function NavbarComponent() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>
        
        <Navbar expand="sm">
    <Navbar.Brand href="/">Ecommerce Store</Navbar.Brand>
    <Navbar.Toggle />
    <NavbarCollapse className="justify-content-end">
        <Button onClick={handleShow}>Carrello 0 Articoli</Button>
    </NavbarCollapse>
</Navbar>
<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
        <Modal.Title>Shopping Cart</Modal.Title>
        <Modal.Body>
            <h1>Questo è modal body</h1>
        </Modal.Body>
    </Modal.Header>

</Modal>
        </>

        
        
        
        
        
        
        
    )
}


export default NavbarComponent;


