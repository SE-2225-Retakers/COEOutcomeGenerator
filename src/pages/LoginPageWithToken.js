import { Container } from "react-bootstrap"
import './login.css'
import logo from '../images/CanvasLogin.jpg'


export default function LogInContainer() {
    return (
        <Container className="backgroundImage">
            <Container className='main mx-auto'>
                <img src={logo} className="logo" alt='...' />
                <form className="form" >
                    <div className="input-group">
                        <label htmlFor="accessToken">Enter Access Token: </label>
                        <input type="text" name="accessToken" />
                    </div>
                </form>
            </Container>
        </Container>
    )
}
