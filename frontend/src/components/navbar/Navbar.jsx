import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/bookstack.svg'

//Simple navbar for the page
const Navigation = () => {
    return (
        <>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={logo}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
                BookApp
              </Navbar.Brand>
            </Container>
          </Navbar>
        </>
      );
}

export default Navigation;