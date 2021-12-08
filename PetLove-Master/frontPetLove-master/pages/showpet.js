import TopLogin from '../components/TopLogin';
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'
import Styles from "../styles/Show.module.css"
import {Button} from "reactstrap"

function showPet() {
    const animais = [
        {
            nome: "Anne",
            foto: "https://image.freepik.com/fotos-gratis/cachorrinho-fofo-com-fantasia_23-2148423712.jpg",
            local: "Aparecida de Goiânia"
        },
        {
            nome: "Thor",
            foto: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato-pets.jpg",
            local: "Goiânia"
        },
        {
            nome: "Billy",
            foto: "https://image.freepik.com/fotos-gratis/cao-pequeno-bonito-com-espaco-de-copia_23-2148423607.jpg",
            local: "Trindade"
        },
        {
            nome: "Maggie",
            foto: "https://image.freepik.com/fotos-gratis/pe-de-cachorro-pequeno-bonito_23-2148423619.jpg",
            local: "Goiânia"
        },
        {
            nome: "Valentina",
            foto: "https://image.freepik.com/fotos-gratis/pe-bonito-cao-lateral_23-2148423605.jpg",
            local: "Inhumas"
        },
        {
            nome: "Stark",
            foto: "https://image.freepik.com/fotos-gratis/cao-bonito-sentado-com-um-lenco_23-2148423585.jpg",
            local: "Goianira"
        }, 
        {
            nome: "Deepie",
            foto: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gato.jpg",
            local: "Trindade"            
        },
        {
            nome: "Fly",
            foto: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gatos.jpg",
            local: "Aparecida de Goiânia"            
        }
    ]

    return (
        <>
            <TopLogin />
            <div className={Styles.animal}>
                    {animais.map(animal => (
                        <div className="mb-5">
                            {/* linha 1 */}
                            <div >
                                {/* coluna 1*/}
                                <div >
                                    <img src={animal.foto} className={Styles.imagem} alt="" />
                                    <div >
                                        <div className="fs-3 fw-bold text-info text-xl mb-2">
                                            <label >{animal.nome}</label>
                                        </div>
                                        {/* localidade*/}
                                        <ul>
                                            <li>
                                                <strong>Local: </strong>
                                                {animal.local}
                                            </li>
                                        </ul>
                                        {/* botoes */}
                                        <div className="row">
                                            <div className="col-sm-1 col-lg-5">
                                                <Button className="botoes" size="sm" href="/descricao">Mais</Button>
                                            </div>
                                            <div className="col-sm-1 col-lg-5">
                                                <Button className="botoes" size="sm" >Adotar</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>


            <Footer />
        </>
    )
}

export default showPet