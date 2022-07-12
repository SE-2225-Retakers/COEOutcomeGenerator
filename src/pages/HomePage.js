import { Navbar, Container } from 'react-bootstrap'
import Sidebar from './SideBar'
import logo from "../images/CanvasIcon.png"


export function HomePage() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img alt='...' src={logo} style={{maxWidth: '50px', paddingRight: '5px'}}/>
                        CANVAS
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Sidebar />
        </div>
    )
}