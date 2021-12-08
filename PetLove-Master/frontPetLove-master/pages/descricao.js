import { useState } from "react";
import Top from '../components/Top';
import Footer from '../components/Footer'
import Styles from "../styles/Show.module.css"
import { Button } from "reactstrap"

function Detalhes() {

    const url = "http://localhost:8080/animais"

    const animal = {
        imagem: "https://image.freepik.com/fotos-gratis/cachorrinho-fofo-com-fantasia_23-2148423712.jpg",
        nome: "Anne",
        idade: "2",
        tempo: "meses",
        raca: "Pintcher",
        caracteristicas: "pequenino e sem pelos",
        especie: "canina",
        sexo: "macho",
        tamanho: "pequeno",
        comportamento: "raivoso",
        local: "Aparecida de Goiânia",
        emailUser: ""
    }

    return (
        <>
            <Top />
            <div className="container mt-5 mb-5 ">
                <div className="row justify-content-center">
                    <div className="col col-sm-4" id={Styles.petdetalhes}>
                        <div className="row justify-content-center">
                            <img src={animal.imagem} className={Styles.imagem} />
                            <div className="fs-2 fw-bold text-info text-xl mb-2">
                                <p><label ><strong>{animal.nome} </strong></label> - <label className="fst-italic fs-5"><strong>{animal.local} </strong></label></p>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <Button className="botoes" size="sm" >Adotar</Button>
                            <Button className="botoes" size="sm" href="/showpet">Voltar</Button>
                        </div>
                    </div>
                    <div className="col-sm-5 col-lg-3 ms-4" id={Styles.exibir}>
                        <div className="row mt-4">
                            <label class=""><strong>Idade:</strong> {animal.idade} {animal.tempo}</label>
                            <label class=""><strong>Espécie:</strong> {animal.especie}</label>
                            <label class=""><strong>Raça:</strong> {animal.raca}</label>                            
                            <label class=""><strong>Sexo:</strong> {animal.sexo}</label>
                            <label class=""><strong>Tamanho:</strong> {animal.tamanho}</label>
                            <label class=""><strong>Comportamento:</strong> {animal.comportamento}</label>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}
export default Detalhes;