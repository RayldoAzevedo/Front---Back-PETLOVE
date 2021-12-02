import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';


const Banner = () =>(
<Container>
  <h2 className="adote2">Categoria de Serviços</h2>
  <Row><Image src="/catserv.png" width={1166} height={207} /></Row>
  <space>.</space>
</Container>

);

export default Banner;