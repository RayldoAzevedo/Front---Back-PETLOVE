import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const Banner = () =>(
<Container>
  <h2 className="adote2">Adoção</h2>
  <Row><Image src="/adocao.png" width={1173} height={400} /></Row>
  
</Container>

);

export default Banner;