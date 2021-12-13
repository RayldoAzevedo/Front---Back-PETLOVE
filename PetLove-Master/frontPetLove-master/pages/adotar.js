import React from 'react';
import Footer from '../components/Footer'
import Top from '../components/Top';
import Styles from "../styles/User.module.css"
import axios, { Axios } from "axios";

function Adotar() {

    const url = "http://localhost:8080/animais"
    const animal = {
        imagem: "https://image.freepik.com/fotos-gratis/cao-bonito-sentado-com-um-lenco_23-2148423585.jpg",
        nome: "Anne",
        local: "Aparecida de Goiânia"
    }

    
        {/* 
            1. Quantos animais você tem em casa, 
            2. Qual o motivo da adoção?
            3. Quantas pessoas moram na casa? 
            4. Qual a moradia (casa, apartamento, chácara etc.)? 
            5. Tem criança em casa? 
            6. O animal vai ficar sozinho durante o dia? por quanto tempo?  
            7. Qual sua média salarial? */}

        return (
            <>
                <Top />
                <div className="container corpo mb-4">

                    <div className="card">
                        <div className="card-header text-center" id={Styles.h1}>
                            <h2 className={Styles.h2}>Questionário</h2>
                        </div>
                        <div className="card-body" id={Styles.corpo}>

                            <div className='text-center' id={Styles.h1, Styles.h2}><p className={Styles.text}>Responda o questionário de adoção:</p></div>

                            <form id="userdados">

                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" 
                                                className="form-control"
                                                id="nome"
                                                placeholder="Seu nome"
                                            />
                                            <label htmlFor="floatingInputNome">Seu nome</label>
                                        </div>
                                    </div>
                                </div>


                            </form>

                        </div>
                    </div>
                </div>

                <Footer />
            </>
        )
    
}
export default Adotar;