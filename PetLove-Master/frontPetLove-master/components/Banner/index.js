import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button} from 'reactstrap';
import Image from 'next/image';

const Banner = () =>(
<div className="banner">
  <Container>
    <h1 className="adote">Adote um Amigo<br/>e tenha atenção incondicional</h1>
    <h5 className="lig">A ligação humano-pet é a relação verdadeira de amor e carinho.</h5>
    <Button className="btvejamais" link href="/showpet">Veja mais</Button>
  </Container>
</div>
);

export default Banner;