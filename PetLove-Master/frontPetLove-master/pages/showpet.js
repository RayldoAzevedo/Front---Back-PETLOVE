import TopLogin from '../components/TopLogin';
import CatServico from '../components/CatServico'
import Footer from '../components/Footer'
import Styles from "../styles/Show.module.css"
import { Button } from "reactstrap"

function showPet() {

    const animais = [
        {
            id: 1,
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
            nome: "Hulk",
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
        },
        {
            nome: "novo animal",
            foto: "https://www.petz.com.br/blog/wp-content/uploads/2019/07/vida-de-gatos.jpg",
            local: "Goiânia"
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
                                <div className="m-0 p-0">
                                    <div className="fs-3 fw-bold descricaotexto text-xl">
                                        <label>{animal.nome}</label>
                                    </div>
                                    {/* localidade*/}
                                    <ul className="p-0 m-0">
                                        <li>
                                            <strong className="reset">Local: </strong>
                                            {animal.local}
                                        </li>
                                    </ul>

                                    {/* L2 botoes */}
                                    <div className="row">
                                        {/* L2/C1 */}
                                        <div className="col-sm-1 col-lg-5">
                                            <a href="/adotar"> <button type="button" className="mdcoracao button button-1" id="">Adotar</button></a>
                                            {/* <Button className="botoes" size="sm" href="">Mais</Button> */}
                                        </div>
                                        {/* L2/C2 */}
                                        <div className="col-sm-1 col-lg-5">
                                            <a href={`/descricao`}> <button type="button" className="mdpegada button button-1" id="">saber mais</button></a>
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