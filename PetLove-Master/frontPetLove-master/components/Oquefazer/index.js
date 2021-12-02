import { Container, Row, Col, Media, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Image from 'next/image';


const Banner = () => (
  <div className="container">
    <div className="row">

      <div className="col-sm-8 col-lg-5">
        <h1 className="topoq optext">O que deseja Fazer?</h1>
      </div>
      <div className="col-sm-8 col-lg-3">
        <div className="topoq">
          <Image src="/pegadas.png" width={256} height={105} />
        </div>
      </div>

      {/* adoçao */}
      <div className="col-sm-8 col-lg-2">
        <div className="btado d-grid gap-2">
          <Button className="btcoracao d-grid gap-2" variant="primary" size="lg"><span className="textado">Adoção </span></Button>{' '}
        </div>
      </div>

      {/* doaçao */}
      <div className="col-md-auto col-sm-8 col-lg-2">
        <div className="d-grid gap-2 topoq">
          <Button className="btpegada d-grid gap-2" variant="primary" size="lg" link href="/cadastropet"><span className="textado">Doação</span></Button>
        </div>
      </div>

    </div>
  </div>


);

export default Banner;